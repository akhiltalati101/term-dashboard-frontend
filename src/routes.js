import { Navigate } from 'react-router-dom';
import DashboardLayout from './common/DashboardLayout';
import {useSelector} from 'react-redux'
import DashboardPage from './pages/DashboardPage/DashboardPage';
import NotFound from './pages/NotFound';
import LoginPage from './pages/LoginPage/LoginPage';


const Routesfn = () =>{
  const { token } = useSelector(state => state.token)
  console.log("routesfn token value == ", token)
  const routes = [
    {
      path: 'app',
      element: <DashboardLayout />,
      children: [
        { path: 'dashboard', element: token !== "" && token !== null && token? <DashboardPage /> : <Navigate to="/login" />},
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
  return routes
}

export default Routesfn
