import React from 'react';

import Profile from '../components/Profile';
import Statistics from '../components/Statistics';
import Bio from '../components/Bio';
import Location from '../components/Location';
import Gallery from '../components/Gallery'

import '../assets/style/App.scss';

const App = () => (
        <div className="App">
            <Profile />
            <Statistics />
            <Bio />
            <Location />
            <Gallery />
        </div>
    )


export default App;
