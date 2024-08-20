import { Divider, Stack, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { Link } from '@components/Link';
import { AuthContainer } from '@modules/auth/components/AuthContainer';
import { LoginFormData, loginSchema } from '@modules/auth/schemas/loginSchema';
import { Button } from '@components/Button';

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = useCallback((data: LoginFormData) => {
    console.log(data);
  }, []);

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
          <TextField
            label="Password"
            type="password"
            error={!!errors.password}
            helperText={errors.password?.message}
            {...register('password')}
          />
        </Stack>

        <Stack spacing={2}>
          <Button size="large" variant="contained" type="submit">
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
