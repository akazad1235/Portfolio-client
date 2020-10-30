import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Blogs = () => {
    return (
        <>

            <Container>
            <h2 className="text-center my-5">Blogs</h2>
                <Row>
                <Col xl={4} lg={4} md={4}>
                        <Card className="my-2 text-white">
                            <Card.Img variant="top" src="https://sifatmoonjerin.netlify.app/static/media/red-onion-cover.6d5a8c2f.png" alt="img" />
                            <Card.Body className="text-center">
                            <Card.Title>Red Orion Project</Card.Title>
                            </Card.Body>
                            <Card.Footer className=" m-auto">
                                <Button variant="danger " className="btn btn-danger m-1">Read More</Button>
                               
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xl={4} lg={4} md={4}>
                        <Card className="my-2 text-white">
                            <Card.Img variant="top" src="https://sifatmoonjerin.netlify.app/static/media/red-onion-cover.6d5a8c2f.png" alt="img" />
                            <Card.Body className="text-center">
                            <Card.Title>Red Orion Project</Card.Title>
                            </Card.Body>
                            <Card.Footer className=" m-auto">
                                <Button variant="danger " className="btn btn-danger m-1">Read More</Button>
                                
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xl={4} lg={4} md={4}>
                        <Card className="my-2 text-white">
                            <Card.Img variant="top" src="https://sifatmoonjerin.netlify.app/static/media/red-onion-cover.6d5a8c2f.png" alt="img" />
                            <Card.Body className="text-center">
                            <Card.Title>Red Orion Project</Card.Title>
                            </Card.Body>
                            <Card.Footer className=" m-auto">
                                <Button variant="danger " className="btn btn-danger m-1">Read More</Button>
                                
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xl={4} lg={4} md={4}>
                        <Card className="my-2 text-white">
                            <Card.Img variant="top" src="https://sifatmoonjerin.netlify.app/static/media/red-onion-cover.6d5a8c2f.png" alt="img" />
                            <Card.Body className="text-center">
                            <Card.Title>Red Orion Project</Card.Title>
                            </Card.Body>
                            <Card.Footer className=" m-auto">
                                <Button variant="danger " className="btn btn-danger m-1">Read More</Button>
                                
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xl={4} lg={4} md={4}>
                        <Card className="my-2 text-white">
                            <Card.Img variant="top" src="https://sifatmoonjerin.netlify.app/static/media/red-onion-cover.6d5a8c2f.png" alt="img" />
                            <Card.Body className="text-center">
                            <Card.Title>Red Orion Project</Card.Title>
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