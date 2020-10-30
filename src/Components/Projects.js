import React from 'react';
import {Button, Card, Col, Container, Row } from 'react-bootstrap';

const Projects = () => {
    return (
        <>
            <Container>
                <h2 className="text-center my-5">Projects</h2>
                <Row>
                    <Col xl={4} lg={4} md={4}>
                        <Card className="my-2">
                            <Card.Img variant="top" src="https://sifatmoonjerin.netlify.app/static/media/red-onion-cover.6d5a8c2f.png" alt="img" />
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
                    <Col xl={4} lg={4} md={4}>
                    <Card className="my-2">
                            <Card.Img variant="top" src="https://sifatmoonjerin.netlify.app/static/media/red-onion-cover.6d5a8c2f.png" alt="img" />
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
                    <Col xl={4} lg={4} md={4}>
                    <Card className="my-2">
                            <Card.Img variant="top" src="https://sifatmoonjerin.netlify.app/static/media/red-onion-cover.6d5a8c2f.png" alt="img" />
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
                    <Col xl={4} lg={4} md={4}>
                    <Card className="my-2">
                            <Card.Img variant="top" src="https://sifatmoonjerin.netlify.app/static/media/red-onion-cover.6d5a8c2f.png" alt="img" />
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
        </>
    );
};

export default Projects;