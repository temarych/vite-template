import { Divider, Stack, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { routes } from '@config/routes';
import { ApiErrorDto, useLoginMutation } from '@store/api';
import { Link } from '@components/Link';
import { Button } from '@components/Button';
import { PasswordField } from '@components/PasswordField';
import { AuthContainer } from '@modules/auth/components/AuthContainer';
import { LoginFormData, loginSchema } from '@modules/auth/schemas/loginSchema';

export const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const [login, { isLoading: isAuthenticating }] = useLoginMutation();

  const handleError = useCallback(
    (error: FetchBaseQueryError) => {
      switch ((error.data as ApiErrorDto).code) {
        case 'entity-not-found':
          return setError('email', { message: 'User not found' });
        case 'incorrect-password':
          return setError('password', { message: 'Incorrect password' });
      }
    },
    [setError],
  );

  const handleLogin = useCallback(
    (data: LoginFormData) => {
      login({ loginRequestDto: data })
        .unwrap()
        .then(() => navigate(routes.home()))
        .catch(handleError);
    },
    [handleError, login, navigate],
  );

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <AuthContainer title="Login">
        <Stack spacing={2}>
          <TextField
            label="Email"
            error={!!errors.email}
            helperText={errors.email?.message}
            {...register('email')}
          />
          <PasswordField
            label="Password"
            error={!!errors.password}
            helperText={errors.password?.message}
            {...register('password')}
          />
        </Stack>

        <Stack spacing={2}>
          <Button
            size="large"
            variant="contained"
            type="submit"
            loading={isAuthenticating}
          >
            Log in
          </Button>
          <Typography variant="body1" textAlign="center">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </Typography>
        </Stack>

        <Divider>OR</Divider>

        <Stack spacing={2}>
          <Button variant="outlined" size="large">
            Continue with Google
          </Button>
          <Button variant="outlined" size="large">
            Continue with Facebook
          </Button>
        </Stack>
      </AuthContainer>
    </form>
  );
};
