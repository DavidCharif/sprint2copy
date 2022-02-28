import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../hooks/UserContext';


const useAuth = () => {
  const {login} = useContext(UserContext);
  // console.log('user auth', login);
  return login}

const useAdmin = () => {
  const {user} = useContext(UserContext);
  const {isAdmin} = user
  return isAdmin}


const ProtectedRoutes = () => {
  
  const isAuth = useAuth();
  
   return isAuth ? <Outlet /> : 
   <Navigate to="/sprint2copy/" />
  
}
export const ProtectedAdmin = () => {
  
  const isAuth = useAdmin();
  
   return isAuth ? <Outlet /> : 
   <Navigate to="/sprint2copy/" />
  
}

export default ProtectedRoutes