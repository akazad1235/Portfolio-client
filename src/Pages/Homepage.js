import React from 'react';
import Blogs from '../Components/Blogs';
import Home from '../Components/Home';
import NavMenu from '../Components/NavMenu';
import Projects from '../Components/Projects';

const Homepage = () => {
    return (
        <div>
            <NavMenu/>
            <Home/>
            <Projects/>
            <Blogs/>
        </div>
    );
};

export default Homepage;