import { Card, styled } from '@mui/material';
import { Outlet } from 'react-router-dom';

export const AuthLayout = () => (
  <AuthLayout.Wrapper>
    <AuthLayout.Container variant="outlined">
      <Outlet />
    </AuthLayout.Container>
  </AuthLayout.Wrapper>
);

AuthLayout.Container = styled(Card)`
  max-width: 25rem;
  width: 100%;
`;

AuthLayout.Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: ${({ theme }) => theme.spacing(2)};
`;
