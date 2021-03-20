import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const SearchLocation = () => {
    const [location, setLocation] = useState({});
    const { name } = useParams();
    const rowStyle = {
        border: '2px solid red',
        borderRadius: '5px',
        padding: '20px'
    }

    const handleBlur = (e) => {
        let fieldValue = "";
        if (e.target.name === 'from') {
            fieldValue = e.target.value
            setLocation(fieldValue)
        }
        if (e.target.name === 'to') {
            fieldValue =e.target.value
            setLocation(fieldValue)
        }
    }

    const handleSubmit = (e) => {

    }
    return (

        <div className=" m-5" style={rowStyle} >
            <h3>You search for {name}</h3>
            <div className="row">
                <div className="col-lg-6 mt-2 ">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="form"> Pick From</label>
                        <input onBlur={handleBlur} type="text" name="from" className="form-control" required />

                        <label htmlFor="to"> Pick To</label>
                        <input onBlur={handleBlur} type="text" name="to" className="form-control" required />

                        <label htmlFor="date">Pick Schedule</label>
                        <input type="date" className="form-control" name="date" id="" />
                        <input type="submit" value="search" className="form-control mt-3 btn-primary text-center" />
                    </form>
                </div>
                <div className="col-lg-4 mt-5">
                    <img src="https://i.ibb.co/0jzhwCZ/Map.png" width="300" height="300" alt="" />
                </div>
            </div>

        </div>
    );
};

export default SearchLocation;