import React from 'react';

import Landing from './Landing';
import Description from './Description';

import '../assets/style/App.scss';


const App = () => (
    <div className="App__container">
        <div className="Landing">
            <Landing />
        </div>
        <div className="Desc">
            <Description />
        </div>
    </div>
)


export default App;
