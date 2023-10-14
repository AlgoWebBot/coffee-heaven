import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import auth from '../Firebase/Firebase.config';

export const MyContext = createContext(null);
const AuthContext = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const passwordAuth = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const passwordLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleProvidder = new GoogleAuthProvider();
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvidder)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false);
        })
        return (() => {
            unSubscribe();
        })
    }, [])
    
    const contextValue = {
        user,
        loading,
        passwordAuth,
        passwordLogin,
        googleLogin,
    }

  return (
      <MyContext.Provider value={contextValue}>
          {children}
      </MyContext.Provider>
  )
}

export default AuthContext