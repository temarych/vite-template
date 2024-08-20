import { styled, Typography } from '@mui/material';

export const Home = () => (
  <Home.Wrapper>
    <Typography variant="h6">Home</Typography>
  </Home.Wrapper>
);

Home.Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
