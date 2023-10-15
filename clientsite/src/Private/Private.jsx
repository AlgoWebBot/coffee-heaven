import React, { useContext } from 'react'
import { MyContext } from '../Context/AuthContext'
import { Navigate } from 'react-router-dom';

const Private = ({ children }) => {
  
  const { user, loading } = useContext(MyContext)
  
  if (loading) {
    return console.log("loading");
  }
  if (user) {
    return children;
  }
  return ( <Navigate to='/login'></Navigate> )
}

export default Private