import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';


const NavMenu = () => {
    return (
        <div className="navbar-bg fixed-top">
            <Container>
                <Navbar  expand="lg" className="">
                    <Navbar.Brand  className="text-white font-weight-bold font"><Link to="/home" className="text-white ">Azad Hosen</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
                        <Nav className="ml-auto m-0 p-0">
                            <Nav.Link className="text-white mx-2 d-inline p-2"><NavLink to="/home" className="text-white" >Home</NavLink></Nav.Link>
                            <Nav.Link  className="text-white mx-2 d-inline p-2"><NavLink to="/project" className="text-white" >Project</NavLink></Nav.Link>
                            <Nav.Link  className="text-white mx-2 d-inline p-2"><NavLink to="/blog" className="text-white" >Blog</NavLink></Nav.Link>
                            <Nav.Link  className="text-white mx-2 d-inline p-2"><NavLink to="/about" className="text-white" >About</NavLink></Nav.Link>
                            <Nav.Link  className="text-white mx-2 d-inline p-2"><NavLink to="/contact" className="text-white" >Contact</NavLink></Nav.Link>
                            <Nav.Link  href="https://drive.google.com/file/d/1HQRtKI9I-K-Uvuvu-qqAgsveTNEqP7rt/view?usp=sharing" target="_blank" className="text-white btn-outline-danger border rounded mx-2 resume-button d-inline px-3 p-1">Resume</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
};

export default NavMenu;