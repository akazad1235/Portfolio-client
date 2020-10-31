import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavMenu from '../Components/NavMenu';
import meImage from '../Assets/images/me.jpg';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <>
           <NavMenu/>
           <Container className="overflow-hidden mt-5 animate__animated animate__fadeInLeft animate__slow">
                <Row className="my-5">
                    <Col xl={6} lx={6} md={6} xm={12} sm={12}>
                        <img className="my-img mx-auto" src={meImage} alt=""/>
                        <h1 className="my-3 mt-5 font font-weight-bold">I am <span className="text-danger font ">Md. Azad Hosen</span></h1>
                        <p className="font">A self-motivated and enthusiastic web developer with a deep interest in JavaScript. I develop web applications. My core skill is based on Javascript and I love to do most of the things using JavaScript and React JS.</p>
                        <div className="my-2">
                            <Button variant="danger" className="btn btn-danger m-1"><Link to="/contact" className="font text-white hire-me">Hire Me</Link></Button>
                            <Button variant="danger" href="https://drive.google.com/file/d/1HQRtKI9I-K-Uvuvu-qqAgsveTNEqP7rt/view?usp=sharing" target="_blank" className="btn btn-danger m-1 hire-me" >Download My Resume</Button>   
                        </div>
                    </Col>
                    <Col xl={6} lx={6} md={6} xm={12} sm={12}>
                        <h1 className="font font-weight-bold">Skills - <span className="text-danger ">Technology & Tools</span></h1>
                        <div className="my-4 m-4    ">
                            <span class="badge badge-dark p-2 m-1">React Js</span>
                            <span class="badge badge-dark p-2 m-1">Node Js</span>
                            <span class="badge badge-dark p-2 m-1">Express Js</span>
                            <span class="badge badge-dark p-2 m-1">MongoDB</span>
                            <span class="badge badge-dark p-2 m-1">Laravel</span>
                            <span class="badge badge-dark p-2 m-1">Mysql</span>
                            <span class="badge badge-dark p-2 m-1">Rest API</span>
                            <span class="badge badge-dark p-2 m-1">Firebase</span>
                            <span class="badge badge-dark p-2 m-1">Redux</span>
                            <span class="badge badge-dark p-2 m-1">Axius</span>
                            <span class="badge badge-dark p-2 m-1">Ajax</span>
                            <span class="badge badge-dark p-2 m-1">Bootstrap</span>
                            <span class="badge badge-dark p-2 m-1">Html5</span>
                            <span class="badge badge-dark p-2 m-1">Css3</span>
                            <span class="badge badge-dark p-2 m-1">Heroku</span>
                            <span class="badge badge-dark p-2 m-1">Netlify</span>
                        </div>
                        <h1 className="font font-weight-bold">You Can <span className="text-danger">Find Me !</span></h1>
                        <div className="my-1 m-4 ">
                            <a href="https://github.com/akazad1235" target="_blank" className="m-2 about-social-icon"><i class="fab fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/akazad1235/" target="_blank" className="m-2  about-social-icon"><i class="fab fa-linkedin-in"></i></a>
                            <a href="https://web.facebook.com/akazad151/" className="m-2  about-social-icon" target="_blank"><i class="fab fa-facebook"></i></a>
                        </div>
                    </Col>
                </Row>   
            </Container> 
        </>
    );
};

export default About;