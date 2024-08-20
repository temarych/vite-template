import { Divider, Stack, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { Link } from '@components/Link';
import { Button } from '@components/Button';
import {
  SignupFormData,
  signupSchema,
} from '@modules/auth/schemas/signupSchema';
import { AuthContainer } from '@modules/auth/components/AuthContainer';

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const handleSignup = useCallback((data: SignupFormData) => {
    console.log(data);
  }, []);

  return (
    <form onSubmit={handleSubmit(handleSignup)}>
      <AuthContainer title="Signup">
        <Stack spacing={2}>
          <TextField
            label="Email"
            error={!!errors.email}
            helperText={errors.email?.message}
            {...register('email')}
          />
          <TextField
            label="Full name"
            error={!!errors.fullName}
            helperText={errors.fullName?.message}
            {...register('fullName')}
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
            Sign up
          </Button>
          <Typography variant="body1" textAlign="center">
            Already have an account? <Link to="/login">Log in</Link>
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
