import { useContext } from 'react';
import { NurseryContext } from '../../context/NurseryContext';
import { Card, Button, Badge, Container, Row, Col } from 'react-bootstrap';

export default function FertilizerList() {
    const { fertilizers, markFertilized } = useContext(NurseryContext);
    const now = Date.now();

    return (

        <Container fluid>
            <h4 className="text-white rounded p-2 bg-success">List of Fertilizers</h4>
            <Row>
                {fertilizers.map((fert) => (
                    <Col xs={12} sm={6} md={4} lg={4} key={fert.id} className="mb-3">
                        <Card className="h-100 position-relative shadow-sm">
                            <Card.Img
                                variant="top"
                                src={fert.image}
                                className="img-fluid"
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <Card.Body>
                                <Card.Title>{fert.name}</Card.Title>
                                <Card.Text>
                                    <strong>Care:</strong> {fert.care}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Next Fertilizing:</strong>{' '}
                                    {new Date(fert.nextFertilizing).toLocaleString()}
                                </Card.Text>
                                {fert.nextFertilizing > now ? (
                                    <Badge bg="success" className="p-2">
                                        Already Fertilized
                                    </Badge>
                                ) : (
                                    <Button
                                        variant="primary"
                                        onClick={() => markFertilized(fert.id)}
                                    >
                                        Mark as Fertilized
                                    </Button>
                                )}
                            </Card.Body>
                            <div className="category-chip">{fert.category}</div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
