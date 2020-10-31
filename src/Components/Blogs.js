import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import NavMenu from './NavMenu';
import blog1 from '../Assets/images/blog/blog1.jpg';
import blog2 from '../Assets/images/blog/blog2.png';
import blog3 from '../Assets/images/blog/blog3.jpg';
import blog4 from '../Assets/images/blog/blog4.jpg';
import blog5 from '../Assets/images/blog/blog5.jpg';

const Blogs = () => {
    return (
        <>
            <NavMenu/>
            <Container className="mt-5 overflow-hidden animate__animated animate__fadeInLeft animate__slow">
            <h2 className="text-center my-5 font-weight-bold font">Blogs</h2>
                <Row>
                <Col xl={4} lg={4} md={4} sm={12} xm={12}>
                        <Card className="my-2 text-white">
                            <Card.Img variant="top" src={blog1} alt="img" />
                            <Card.Body className="text-center">
                            <Card.Title>Core JavaScript Duidline</Card.Title>
                            </Card.Body>
                            <Card.Footer className=" m-auto">
                                <Button variant="danger " className="btn btn-danger m-1">Read More</Button>
                               
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={12} xm={12}>
                        <Card className="my-2 text-white">
                            <Card.Img variant="top" src={blog2} alt="img" />
                            <Card.Body className="text-center">
                            <Card.Title>aravel-8 Paasport Authentication</Card.Title>
                            </Card.Body>
                            <Card.Footer className=" m-auto">
                                <Button variant="danger " className="btn btn-danger m-1">Read More</Button>
                                
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={12} xm={12}>
                        <Card className="my-2 text-white">
                            <Card.Img variant="top" src={blog3} alt="img" />
                            <Card.Body className="text-center">
                            <Card.Title>React Router With Animation</Card.Title>
                            </Card.Body>
                            <Card.Footer className=" m-auto">
                                <Button variant="danger " className="btn btn-danger m-1">Read More</Button>
                                
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={12} xm={12}>
                        <Card className="my-2 text-white">
                            <Card.Img variant="top" src={blog4} alt="img" />
                            <Card.Body className="text-center">
                            <Card.Title>React Redux</Card.Title>
                            </Card.Body>
                            <Card.Footer className=" m-auto">
                                <Button variant="danger " className="btn btn-danger m-1">Read More</Button>
                                
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xl={4} lg={4} md={4}>
                        <Card className="my-2 text-white">
                            <Card.Img variant="top" src={blog5} alt="img" />
                            <Card.Body className="text-center">
                            <Card.Title>Redux</Card.Title>
                            </Card.Body>
                            <Card.Footer className=" m-auto">
                                <Button variant="danger " className="btn btn-danger m-1">Read More</Button>
                               
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Blogs;