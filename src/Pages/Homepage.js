import React from 'react';
import Home from '../Components/Home';
import NavMenu from '../Components/NavMenu';
import Projects from '../Components/Projects';

const Homepage = () => {
    return (
        <div>
            <NavMenu/>
            <Home/>
            <Projects/>
        </div>
    );
};

export default Homepage;