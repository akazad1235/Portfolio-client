import React from 'react';
import {Button, Card, Col, Container, Row } from 'react-bootstrap';
import NavMenu from './NavMenu';
import project1 from '../Assets/images/project1.PNG';
import project2 from '../Assets/images/project2.PNG';
import project3 from '../Assets/images/project3.PNG';
import project4 from '../Assets/images/project4.PNG';

const Projects = () => {
    return (
       <> 
       <NavMenu/>
        <div className="mt-5 animate__animated animate__fadeInLeft animate__slow overflow-hidden">
            
            <Container className="mt-5">
                
                <h2 className="text-center my-5 font-weight-bold font">Projects</h2>
                <Row>
                    <Col xl={4} lg={4} md={6}>
                        <Card className="my-2">
                            <Card.Img variant="top" src={project1} alt="img" />
                            <Card.Body className="text-center">
                            <Card.Title>Red Orion Project</Card.Title>
                            <Card.Text>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, fugit corrupti eligendi optio laboriosam soluta.</p>
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer className=" m-auto">
                                <Button variant="danger " className="btn btn-danger m-1">GitHub</Button>
                                <Button variant="danger" className="btn btn-danger m-1">Website</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xl={4} lg={4} md={6}>
                    <Card className="my-2">
                            <Card.Img variant="top" src={project2}  alt="img" />
                            <Card.Body className="text-center">
                            <Card.Title>Red Orion Project</Card.Title>
                            <Card.Text>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, fugit corrupti eligendi optio laboriosam soluta.</p>
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer className=" m-auto">
                                <Button variant="danger " className="btn btn-danger m-1">GitHub</Button>
                                <Button variant="danger" className="btn btn-danger m-1">Website</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xl={4} lg={4} md={6}>
                    <Card className="my-2">
                            <Card.Img variant="top" src={project3}  alt="img" />
                            <Card.Body className="text-center">
                            <Card.Title>Red Orion Project</Card.Title>
                            <Card.Text>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, fugit corrupti eligendi optio laboriosam soluta.</p>
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer className=" m-auto">
                                <Button variant="danger " className="btn btn-danger m-1">GitHub</Button>
                                <Button variant="danger" className="btn btn-danger m-1">Website</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xl={4} lg={4} md={6}>
                    <Card className="my-2">
                            <Card.Img variant="top" src={project4}  alt="img" />
                            <Card.Body className="text-center">
                            <Card.Title>Red Orion Project</Card.Title>
                            <Card.Text>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, fugit corrupti eligendi optio laboriosam soluta.</p>
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer className=" m-auto">
                                <Button variant="danger " className="btn btn-danger m-1">GitHub</Button>
                                <Button variant="danger" className="btn btn-danger m-1">Website</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    );
};

export default Projects;