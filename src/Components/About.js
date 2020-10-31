import React from 'react';
import {Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import me from "../Assets/images/me.jpg"

const About = () => {
    return (
        <section className="overflow-hidden" id="about">
        <div className="about-bg">
                
             <Container>
                 
                <Row className="py-5 text-white">
                    <Col className="text-center my-5 ">
                        <h1 className="text-center m-4">About</h1>
                        <img className="my-img m-3" src={me} alt=""/><br/>
                        <a href="" className="m-2 social"><i class="fab fa-github"></i></a>
                        <a href="" className="m-2 social"><i class="fab fa-linkedin-in"></i></a>
                        <a href="" className="m-2 social"><i class="fab fa-facebook"></i></a>
                        <p className="text-center m-5">A self-taught software developer with a Bachelor's in Electrical & Electronic Engineering. Besides programming all day, he has a passion for writing about himself in third person.</p>
                        <Button variant="danger" className="btn btn-danger m-1"><Link to="/contact">Send Message</Link></Button>
                        <Button variant="danger" className="btn btn-danger m-1">Download My Resume</Button>   
                    </Col>
                </Row>
            </Container>
          
            
           
        </div>
        </section>
    );
};

export default About;