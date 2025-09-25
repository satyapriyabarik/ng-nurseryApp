import { useContext } from 'react';
import { Alert } from 'react-bootstrap';
import { NurseryContext } from '../../context/NurseryContext';

export default function Notification() {
    // Access notifications from context
    const { notifications } = useContext(NurseryContext);

    return (
        <div className="mb-4">
            {notifications.map((note, idx) => (
                <Alert key={idx} variant="warning">
                    {note}
                </Alert>
            ))}
        </div>
    );
}
