import './App.css';
import { Layout } from './pages/Layout';
import { Home } from './pages/Home';
import { Deposit } from './pages/Deposit';
import { Login } from './pages/Login';
import { ProfileSetting } from './pages/ProfileSetting';
import { Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Routes>
          <Route path="/" element={<Login />}>
          </Route>
          <Route path="/home" element={<Layout />}>
            <Route index element={<Home />}></Route>
          </Route>
          <Route path="/deposit" element={<Deposit />}>
          </Route>
          <Route path="/profileSetting" element={<ProfileSetting />}>
          </Route>
        </Routes>
    </ThemeProvider>
  );
}

export default App;
