import { Button } from 'react-bootstrap';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Home = () => {
    return (
        <section className="m-0 p-0 overflow-hidden" id="home">
        <div className="home-bg ">
             <Container>
                <Row className="py-5 text-white">
                    <Col className="text-center my-5 ">
                        <h1>Md. Azad Hosen</h1>
                        <p>Engineer | Web Developer | Programmer</p>
                        <div className="my-3">
                        <a href="" className="m-2 social"><i class="fab fa-github"></i></a>
                        <a href="" className="m-2 social"><i class="fab fa-linkedin-in"></i></a>
                        <a href="" className="m-2 social"><i class="fab fa-facebook"></i></a>
                        </div>
                        <Button variant="danger" className="btn btn-danger m-1">Hire Me</Button>
                        <Button variant="danger" className="btn btn-danger m-1">Download My Resume</Button>   
                    </Col>
                </Row>
            </Container>
          
            
           
        </div>
        </section>
    );
};

export default Home;