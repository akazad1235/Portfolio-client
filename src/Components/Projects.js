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
                    <Col xl={4} lg={4} md={6} sm={12} xm={12}>
                        <Card className="my-2">
                            <Card.Img variant="top" src={project1} alt="img" />
                            <Card.Body className="text-center">
                            <Card.Title>Creative Agency</Card.Title>
                            <Card.Text>
                                <p>A simple single side and user friendly web application. User can get our
                                service. Create simple admin panel & and service manage</p>
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer className=" m-auto">
                                <Button variant="danger " className="btn btn-danger m-1" href="https://creative-agency-cc80c.web.app/"   target="_blank">GitHub</Button>
                                <Button variant="danger"  href="https://github.com/akazad1235/creative-agency" target="_blank" className="btn btn-danger m-1">Website</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xl={4} lg={4} md={6} sm={12} xm={12}>
                    <Card className="my-2">
                            <Card.Img variant="top" src={project2}  alt="img" />
                            <Card.Body className="text-center">
                            <Card.Title>Volunteer Network</Card.Title>
                            <Card.Text>
                                <p>A full-stack simple single side & user friendly social provider web application. User can get different kinds of task and show user panel</p>
                            </Card.Text>
                            </Card.Body>
                            
                            <Card.Footer className=" m-auto">
                                <Button variant="danger " className="btn btn-danger m-1" href="https://github.com/akazad1235/volunteer-network-client"   target="_blank">GitHub</Button>
                                <Button variant="danger"  href="https://volunteer-network2-fc07a.web.app/" target="_blank" className="btn btn-danger m-1">Website</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xl={4} lg={4} md={6} sm={12} xm={12}>
                    <Card className="my-2">
                            <Card.Img variant="top" src={project3}  alt="img" />
                            <Card.Body className="text-center">
                            <Card.Title>E-schools</Card.Title>
                            <Card.Text>
                                <p>Simple Responsive Web application for Schools Management System. Anyone Can See Schools information and student inform</p>
                            </Card.Text>
                            </Card.Body>
                            
                            <Card.Footer className=" m-auto">
                               <Button variant="danger " className="btn btn-danger m-1" href="https://github.com/akazad1235/E-Schools"  target="_blank">GitHub</Button>
                                <Button variant="danger"   href="https://akazad1235.github.io/E-Schools/" target="_blank" className="btn btn-danger m-1">Website</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xl={4} lg={4} md={6} sm={12} xm={12}>
                    <Card className="my-2">
                            <Card.Img variant="top" src={project4}  alt="img" />
                            <Card.Body className="text-center">
                            <Card.Title>Online Crime Management System</Card.Title>
                            <Card.Text>
                                <p>Simple full-stack web application, anyone can get service and victim people complain to the nearest police station. User Panel create and get there service and status showing</p>
                            </Card.Text>
                            </Card.Body>
                            
                            <Card.Footer className=" m-auto">
                            <Button variant="danger " className="btn btn-danger m-1" href="https://github.com/akazad1235/Crime-Management"  target="_blank">GitHub</Button>
                                <Button variant="danger"   href="https://demo.azadhosen.com" target="_blank" className="btn btn-danger m-1">Website</Button>
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