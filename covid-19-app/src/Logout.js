import React from 'react';

import './App.css';

const Logout = ({ handleLogout}) => {

    return (
        <section className="Logout__section">
            <button onClick={handleLogout}>Login/out</button>
        </section>
    );
};

export default Logout;