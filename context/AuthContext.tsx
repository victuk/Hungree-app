import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType>({isLoggedIn: false, login: () => {}, logout: () => {}});

export const AuthProvider = (props: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => setIsLoggedIn(true);
    const logout = () => setIsLoggedIn(false);

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => useContext(AuthContext);