import { styled } from '@mui/material';
import { ModeToggle } from '@components/ModeToggle';
import { useAppDispatch, useAppSelector } from '@store/index';
import { selectMode, setMode } from '@store/features/theme';

export const Home = () => {
  const dispatch = useAppDispatch();

  const mode = useAppSelector(selectMode);

  return (
    <Home.Wrapper>
      <ModeToggle mode={mode} onChange={(mode) => dispatch(setMode(mode))} />
    </Home.Wrapper>
  );
};

Home.Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
