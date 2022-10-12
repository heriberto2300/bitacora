import React from "react";

import NavBar from '../components/NavBar';
import '../stylesheets/Page.css';

function Profile() {
    return(
        <div className="page profile-page">
            <NavBar title="Perfil"/>
        </div>
    );
}

export default Profile;