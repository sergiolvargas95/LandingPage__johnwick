import React from 'react';

import '../assets/style/components/Gallery.scss';

import Pic1 from '../assets/static/galeria1.jpg';
import Pic2 from '../assets/static/galeria2.jpg';
import Pic3 from '../assets/static/galeria3.jpg';
import Pic4 from '../assets/static/galeria4.jpg';

const Gallery = () => (
    <div className="Gallery">
        <h3 className="Gallery__title">Mis Fotos</h3>
        <div className="Gallery__pics">
            <img className="pic1" src={Pic1} alt="picture 1" />
            <img className="pic2" src={Pic2} alt="picture 2" />
            <img className="pic3" src={Pic3} alt="picture 3" />
            <img className="pic4" src={Pic4} alt="picture 4" />
        </div>
    </div>
)

export default Gallery;

