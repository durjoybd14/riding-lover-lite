import React, { useEffect, useState } from 'react';
import './Home.css';
import fakedata from '../../fakedata.json';
import Vehicles from '../Vehicles/Vehicles';

const Home = () => {
    const [vehicles, setVehicles] = useState([]);
    useEffect(() => {
        setVehicles(fakedata)
    }, [])

    return (
        <div className="home-background">
            <h3 className="text-center py-3">Choose Your Journey</h3>
            <div className="vehicle-container">
                {
                    vehicles.map(vehicle => <Vehicles vehicle={vehicle} key={vehicle.id}></Vehicles>)
                }
            </div>
        </div>
    );
};

export default Home;