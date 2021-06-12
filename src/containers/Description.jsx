import React from 'react';
import Info from '../components/Info';


const Description = () => (
    <React.Fragment>
        <Info
            title="Playstation"
            subTitle="GTA VI: FILTRACIONES DE INFORMACIÓN QUE SON BASTANTE DUDOSAS"
            description="Recientemente se filtró en Internet una importante cantidad de supuesta información sobre Grand Theft Auto VI (GTA VI) que nos ofrece una muy buena idea de lo que podemos esperar."
        />
        <Info
            title="Switch"
            subTitle="SECUELA DE THE LEGEND OF ZELDA: BREATH OF THE WILD ANUNCIADA EN EL E3 2019"
            description="Nintendo anunció la seuncia de The Legend of Zelda: Breath of the Wild en el E3 2019 y todos estamos más que emocionados con esto."
        />
        <Info
            title="Xbox"
            subTitle="RED DEAD ONLINE RECIBE ACTUALIZACIÓN MASIVA Y SALE DE BETA"
            description="Rockstar lanzó el día de hoy la actualización más grande de Red Dead Online desde que el componente online de Red Dead Redemption 2 se lanzó en noviembre."
        />
    </React.Fragment>
)

export default Description;
