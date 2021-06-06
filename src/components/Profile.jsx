import React from 'react';

import '../assets/style/components/Profile.scss';
import Avatar from '../assets/static/avatar.jpg';

const Profile = () => (
        <div className="Profile">
            <img className="Profile__avatar" src={Avatar} alt="avatar" />
            <h1 className="Profile__title">John Wick</h1>
            <p className="Profile__description">Asesino Legendario</p>
            <button className="Profile__btn">Seguir</button>
        </div>
    )


export default Profile;
