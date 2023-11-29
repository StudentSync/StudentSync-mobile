import React, { Children, createContext, useState } from 'react';

export const AuthContext = createContext({})

function AuthProvider({children}){
    return (
        <AuthContext.Provider value={{nome: "GABRIEL"}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;