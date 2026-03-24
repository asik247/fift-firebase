import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../firebase/firebase.init';
const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    // Registaion/Create User code start here;
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // SignIn/LogIn code start here;
    const signInUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    // SignIn out/LogOut code start here;
    const signOutUser = ()=>{
        return signOut(auth);
    }
    // UseEffect/onAuthChange code start here;
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log("current User:",currentUser);
            setUser(currentUser);
            setLoading(false)
        })
        return ()=> unsubscribe();
    },[])
    const userInfo = {
        createUser,
        signInUser,
        signOutUser,
        user,
        loading,
    }
    return <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;