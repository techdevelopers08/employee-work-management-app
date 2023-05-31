import React from 'react';

export const AuthContext = React.createContext();

export const UserContext = React.createContext({
    token: null,
});


export const UserNameContext = React.createContext({
    username: null,
});
export const OnBoardContext = React.createContext({
    isOnBoard: null
});