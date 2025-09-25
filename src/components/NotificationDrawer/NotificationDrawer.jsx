import { useContext, useState, useEffect } from 'react';
import { NurseryContext } from '../../context/NurseryContext';
import { Offcanvas, Badge, ListGroup } from 'react-bootstrap';
import { IoNotificationsOutline } from 'react-icons/io5';
import '../../index.css';

export default function NotificationDrawer() {
    const { notifications } = useContext(NurseryContext);
    const [show, setShow] = useState(false);
    const [newAlert, setNewAlert] = useState(false);

    const toggleDrawer = () => setShow(!show);

    // Blink animation when new notification comes
    useEffect(() => {
        if (notifications.length > 0) {
            setNewAlert(true);
            const timer = setTimeout(() => setNewAlert(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [notifications]);

    return (
        <>
            <Badge
                bg="danger"
                pill
                onClick={toggleDrawer}
                className={`notification-badge position-fixed top-0 end-0 m-3 p-2 cursor-pointer ${newAlert ? 'animate__animated animate__flash' : ''}`}
                style={{ zIndex: 1050 }}
            >
                <IoNotificationsOutline className="me-1" />
                {/* Full text for desktop, count for mobile */}
                <span className="notif-text">Notifications ({notifications.length})</span>
                <span className="notif-count">{notifications.length}</span>
            </Badge>

            <Offcanvas show={show} onHide={toggleDrawer} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Notifications</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {notifications.length === 0 ? (
                        <p>No notifications</p>
                    ) : (
                        <ListGroup>
                            {notifications.map((note, idx) => (
                                <ListGroup.Item key={idx} className="bg-warning">
                                    {note}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
