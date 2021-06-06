import React from 'react';

import '../assets/style/components/Statisctics.scss';

const Statistics = () => {
    return (
        <div className="statistics--profile">
            <div className="statistics__box">
                <h3>12K</h3><span>Seguidores</span>
            </div>
            <div className="statistics__box">
                <h3>1.7K</h3><span>Siguiendo</span>
            </div>
            <div className="statistics__box">
                <h3>48</h3><span>Articulos</span>
            </div>
        </div>
    )
}

export default Statistics;
