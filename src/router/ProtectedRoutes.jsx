import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../hooks/UserContext';


const useAuth = () => {
  const {user} = useContext(UserContext);
  console.log('user auth', user);
  return user && user.loggedIn
}


const ProtectedRoutes = () => {
  
  const isAuth = useAuth();
  
   return isAuth ? <Outlet /> : 
   <Navigate to="/sprint2copy/" />
  
}

export default ProtectedRoutes