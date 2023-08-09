import React from "react";
import { useNavigate } from "react-router-dom";

function Nav() {
    const navigate = useNavigate();

    const signOut = () => {
        localStorage.removeItem("_id");
        // redirects to the login page
        navigate("/forum");
    };

    return (
        <nav className='navbar'>
            <div className='navbarRight'>
                <button onClick={signOut}>Sign out</button>
            </div>
        </nav>
    );
};

export default Nav;
