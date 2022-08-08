import AuthFormLayout from './pages/authFormLayout';
import RegisterForm from './pages/authFormLayout/RegisterForm';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import LoginForm from './pages/authFormLayout/LoginForm';
import RestorePasswordForm from './pages/authFormLayout/RestorePasswordForm';
import { useEffect } from 'react';

const App = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/') {
      navigate('/login');
    }
  }, [pathname]);

  return (
    <Routes>
      <Route
        path='/login'
        element={
          <AuthFormLayout>
            <LoginForm />
          </AuthFormLayout>
        }
      />
      <Route
        path='/register'
        element={
          <AuthFormLayout>
            <RegisterForm />
          </AuthFormLayout>
        }
      />
      <Route
        path='/restore'
        element={
          <AuthFormLayout>
            <RestorePasswordForm />
          </AuthFormLayout>
        }
      />
    </Routes>
  );
};

export default App;
