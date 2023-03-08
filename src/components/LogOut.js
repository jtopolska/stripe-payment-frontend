import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Main } from "./Main";
import { Link } from 'react-router-dom';

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
        <>
        <div className="logout-btn">
            <Link to='/account'>
                <button>My Account</button>
            </Link>  
            
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
            </button>
        </div>
        <div  className="main-page">
            <Main />
        </div>
        </>
    )
  );
};

export default LogoutButton;