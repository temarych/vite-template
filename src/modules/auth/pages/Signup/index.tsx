import { Button, Divider, Stack, TextField, Typography } from '@mui/material';
import { AuthContainer } from '@modules/auth/components/AuthContainer';
import { Link } from '@components/Link';

export const Signup = () => (
  <AuthContainer title="Signup">
    <Stack spacing={2}>
      <TextField label="Email" />
      <TextField label="Full name" />
      <TextField label="Password" type="password" />
    </Stack>

    <Stack spacing={2}>
      <Button size="large" variant="contained" type="submit">
        Log in
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
);
