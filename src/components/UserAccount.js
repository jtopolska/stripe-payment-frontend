import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';

const UserAccount = () => {
    const { user, isAuthenticated } = useAuth0(); 

    return (
        isAuthenticated && (
        <div className="account-info">
            <Link className="back" to='/'>&#8592; Back</Link>
            <img src={user.picture} alt={user.name} />
            <h4>User name: {user.name}</h4>
            <p>Email: {user.email}</p>
        </div>
        )
    );
}
export default UserAccount;