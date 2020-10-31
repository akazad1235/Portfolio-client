import { Button } from 'react-bootstrap';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const Home = () => {

    return (
        <section className="home-bg animate__animated animate__fadeInLeft animate__slow">
        <div className="">
             <Container>
                <Row className="py-5 text-white my-5">
                    <Col className="text-center my-5 ">
                        <h1 className="font font-weight-bold">Md. Azad Hosen</h1>
                        <div style={{color:'white', fontSize:'30px'}}>
                        <Typewriter
                            options={{
                                strings: ['Hey There', 'I am Azad Hosen', 'I am Web Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                         />
                    </div>
                        <div className="my-3 ">
                        <a href="https://github.com/akazad1235" target="_blank" className="m-3  social-icon"><i class="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/akazad1235/" target="_blank" className="m-3  social-icon"><i class="fab fa-linkedin-in"></i></a>
                        <a href="https://web.facebook.com/akazad151/" className="m-3  social-icon" target="_blank"><i class="fab fa-facebook"></i></a>
                        </div>
                        <Button variant="danger" className="btn btn-danger m-1"><Link to="/contact" className="font text-white hire-me">Hire Me</Link></Button>
                        <Button variant="danger" href="https://drive.google.com/drive/folders/1gS0R0uv6tl7Ajdi9VkH7GPw3h2QVtJmk" target="_blank" className="btn btn-danger m-1 hire-me" >Download My Resume</Button>   
                    </Col>
                </Row>
            </Container>
          
            
           
        </div>
        </section>
    );
};

export default Home;