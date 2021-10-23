import { Navigate } from 'react-router-dom';
import DashboardLayout from './common/DashboardLayout';
// import MainLayout from './common/MainLayout';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import NotFound from './pages/NotFound';
import LoginPage from './pages/LoginPage/LoginPage';
import { isAuthed } from './utils/auth'

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'dashboard', element: isAuthed()? <DashboardPage /> : <Navigate to="/login" />},
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <LoginPage />,
    children: [
      { path: 'login', element: <LoginPage /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
