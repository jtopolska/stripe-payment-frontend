import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return ( 
    !isAuthenticated && (
      <div>
        <div className="login-btn">
            <button onClick={() => loginWithRedirect()}>Log In</button>
        </div>
        <div className="welcome">
            <h3>Log In to continue</h3>
        </div>
      </div>
    )
  );
};

export default LoginButton;