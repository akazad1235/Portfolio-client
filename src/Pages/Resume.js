import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavMenu from '../Components/NavMenu';
import Projects from '../Components/Projects';

const Resume = () => {
    return (
        <div>
            <NavMenu/>
            <Projects/>       
        </div>
    );
};

export default Resume;