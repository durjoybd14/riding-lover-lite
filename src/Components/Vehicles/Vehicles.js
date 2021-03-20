import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import SearchLocation from '../SearchLocation/SearchLocation';

const Vehicles = (props) => {
    const { img, name } = props.vehicle;
    const history = useHistory();
    const handleVehicleInfo = (name) => {
        const url = `/vehicle/${name}`;
        history.push(url);
    }
    const cardStyle = {
        textAlign: 'center',
        padding: '20px',
        borderRadius: '5px',
        marginTop: '10px'
    }


    return (
        <Card style={cardStyle} onClick={() => handleVehicleInfo(name)}>
            <Card.Img variant="top" src={img} style={{ width: '100px', height: '100px', margin: 'auto' }} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
            </Card.Body>

        </Card>
    );
};

export default Vehicles;