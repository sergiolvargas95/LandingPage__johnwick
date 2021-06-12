import React from 'react';

import Profile from '../components/Profile';
import Statistics from '../components/Statistics';
import Bio from '../components/Bio';
import Location from '../components/Location';
import Gallery from '../components/Gallery';

const Landing = () => (
    <React.Fragment>
        <Profile />
        <Statistics />
        <Bio />
        <Location />
        <Gallery />
    </React.Fragment>
)


export default Landing;
