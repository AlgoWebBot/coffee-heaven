import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import auth from '../Firebase/Firebase.config';

export const MyContext = createContext(null);
const AuthContext = ({ children }) => {

    const [user, setUser] = useState(null);
    const [admin, setAdmin] = useState(false);
    const [loading, setLoading] = useState(true);

    console.log(admin)

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

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false);
            console.log(currentUser)
        })
        return (() => {
            unSubscribe();
        })
    }, [])
    
    const contextValue = {
        user,
        admin,
        setAdmin,
        loading,
        passwordAuth,
        passwordLogin,
        googleLogin,
        logOut,
    }

  return (
      <MyContext.Provider value={contextValue}>
          {children}
      </MyContext.Provider>
  )
}

export default AuthContext