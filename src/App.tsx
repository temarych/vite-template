import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useMemo } from 'react';
import { selectMode } from '@store/features/theme';
import { Home } from '@modules/home';
import { Login } from '@modules/auth/pages/Login';
import { Signup } from '@modules/auth/pages/Signup';
import { AuthLayout } from '@modules/auth/components/AuthLayout';
import { useAppSelector } from './store';
import { createTheme } from './theme';

export const App = () => {
  const mode = useAppSelector(selectMode);

  const theme = useMemo(() => createTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>

          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
