import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '@modules/home';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);
