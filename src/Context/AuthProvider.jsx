import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from "firebase/auth";
const AuthProvider = ({ children }) => {
    // Registaion/Create User code start here;
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(email, password);
    }
    const userInfo = {
        createUser,
    }
    return <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;