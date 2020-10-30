import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const NavMenu = () => {
    return (
        <div className="navbar-bg fixed-top">
            <Container>
                <Navbar  expand="lg" className="">
                    <Navbar.Brand href="#home" className="text-white">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
                        <Nav className="ml-auto m-0 p-0">
                            <NavLink  to="/home" className="text-white mx-2 d-inline p-2">Home</NavLink>
                            <NavLink to="/home" className="text-white mx-2 d-inline p-2">Project</NavLink>
                            <NavLink to="/home" className="text-white mx-2 d-inline p-2">Blog</NavLink>
                            <NavLink  to="/home" className="text-white mx-2 d-inline p-2">About</NavLink>
                            <NavLink  to="/home" className="text-white mx-2 d-inline p-2">Contact</NavLink>
                            <NavLink  to="/home" className="text-white btn-outline-danger border rounded mx-2 resume-button d-inline px-3 p-1">Resume</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
};

export default NavMenu;