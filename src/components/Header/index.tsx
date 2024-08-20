import { styled, Typography } from '@mui/material';
import { ModeToggle } from '@components/ModeToggle';
import { useAppDispatch, useAppSelector } from '@store/index';
import { selectMode, setMode } from '@store/features/theme';

export const Header = () => {
  const dispatch = useAppDispatch();

  const mode = useAppSelector(selectMode);

  return (
    <>
      <Header.Placeholder />
      <Header.Wrapper>
        <Header.Container>
          <Header.LogoWrapper>
            <Header.LogoIcon src="/vite.svg" />
            <Typography variant="h6">Vite Template</Typography>
          </Header.LogoWrapper>

          <ModeToggle
            mode={mode}
            onChange={(mode) => dispatch(setMode(mode))}
          />
        </Header.Container>
      </Header.Wrapper>
    </>
  );
};

Header.LogoIcon = styled('img')`
  width: 1.5rem;
`;

Header.LogoWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
`;

Header.Placeholder = styled('div')`
  min-height: 4rem;
`;

Header.Container = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)};
  max-width: 80rem;
  width: 100%;
  height: 100%;
`;

Header.Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
  padding-left: ${({ theme }) => theme.spacing(2)};
  padding-right: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.palette.background.paper};
  position: fixed;
  height: 4rem;
  top: 0;
  left: 0;
  right: 0;
`;
