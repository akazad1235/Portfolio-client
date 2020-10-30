import React from 'react';
import About from '../Components/About';
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
            <About/>
        </div>
    );
};

export default Homepage;