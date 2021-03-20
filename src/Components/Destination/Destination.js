import React from 'react';
import { Link } from 'react-router-dom';

const Destination = () => {
    return (
        <div className="m-5 text-center">
            <Link to="/vehicle/BIKE">Go for Bike</Link>
        </div>
    );
};

export default Destination;