import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const Private = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        <h1>Loading ...</h1>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" replace={true}></Navigate>;
};

export default Private;