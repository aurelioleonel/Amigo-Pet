import React from 'react';
import { UserContext } from '../../UserContext';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    const { login } = React.useContext(UserContext);

    if (login === true) {
        return children
    }
    else if (login === false)
        return <Navigate to="/Login" />
    else
        return null;

    // if (login === true)
    //  return <Navigate to="/User"
    // else if (login === true) return <Navigate to="/Login"



    //return login ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;