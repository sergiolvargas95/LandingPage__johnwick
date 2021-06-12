import React from 'react';
import '../assets/style/components/Info.scss'

const Info = ( { title, subTitle, description }) => (
    <div className="Info">
        <div className="Info__container">
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
            <p>{description}</p>
        </div>
    </div>
)

export default Info;
