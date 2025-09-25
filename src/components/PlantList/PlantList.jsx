import React, { useContext } from 'react';
import { NurseryContext } from '../../context/NurseryContext';
import { Card, Button, Badge, Container, Row, Col } from 'react-bootstrap';

export default function PlantList() {
    const { plants, markWatered } = useContext(NurseryContext);
    const now = Date.now();

    return (
        <Container fluid>
            <h4 className="text-white rounded p-2 bg-success">All plants at a glance</h4>
            <Row>
                {plants.map((plant) => (
                    <Col xs={12} sm={6} md={4} lg={4} key={plant.id} className="mb-3">
                        <Card className="h-100 position-relative shadow-sm">
                            <Card.Img
                                variant="top"
                                src={plant.image}
                                className="img-fluid"
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <Card.Body>
                                <Card.Title>{plant.name}</Card.Title>
                                <Card.Text>
                                    <strong>Care:</strong> {plant.care}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Next Watering:</strong>{' '}
                                    {new Date(plant.nextWatering).toLocaleString()}
                                </Card.Text>
                                {plant.nextWatering > now ? (
                                    <Badge bg="success" className="p-2">
                                        Already Watered
                                    </Badge>
                                ) : (
                                    <Button
                                        variant="primary"
                                        onClick={() => markWatered(plant.id)}
                                    >
                                        Mark as Watered
                                    </Button>
                                )}
                            </Card.Body>
                            <div className="category-chip">{plant.category}</div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
