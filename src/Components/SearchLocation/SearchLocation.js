import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './SearchLocation.css';
import fakedata from '../../fakedata.json';


const SearchLocation = () => {

    const [locationFrom, setLocationFrom] = useState('');
    const [locationTo, setLocationTo] = useState('');
    const [showForm, setShowForm] = useState(true);


    const { name } = useParams();
    console.log(name)

    let src, price;
    if (name === "BIKE") {
        src = "https://i.ibb.co/SV2JjZr/Frame.png";
        price = 100;

    }
    else if (name === "CAR") {
        src = "https://i.ibb.co/8gjHN9P/Frame-2.png";
        price = 75;
    }
    else if (name === "BUS") {
        src = "https://i.ibb.co/hW2zbK2/Frame-1.png";
        price = 50;
    }
    else {
        src = "https://i.ibb.co/VCy1Rm6/Group.png";
        price = 40;
    }

    const rowStyle = {
        border: '2px solid red',
        borderRadius: '5px',
        padding: '20px'
    }

    const handleBlur = (e) => {

        if (e.target.name === 'from') {
            setLocationFrom(e.target.value)
        }
        if (e.target.name === 'to') {
            setLocationTo(e.target.value)
        }
    }


    return (

        <div className=" m-5" style={rowStyle} >
            <h3>You search for {name}</h3>
            <div className="row">
                <div className="col-lg-6 mt-2">

                    {showForm ? <form >
                        <label htmlFor="form"> Pick From</label>
                        <input onBlur={handleBlur} type="text" name="from" className="form-control" required />

                        <label htmlFor="to"> Pick To</label>
                        <input onBlur={handleBlur} type="text" name="to" className="form-control" required />

                        <label htmlFor="date">Pick Schedule</label>
                        <input type="date" className="form-control" name="date" required id="" />
                        <button type="submit" onClick={() => setShowForm(false)} className="form-control mt-3 btn-primary text-center" >Submit</button>
                    </form> : <form className='bg-warning p-3 rounded'>
                        <div>
                            <p>From: {locationFrom} </p>
                            <p>To: {locationTo}</p>
                        </div>
                        <div>
                            <div className="bg-light p-2 rounded mt-2">
                                <img src={src} height="50" width="50" alt="" className="ml-2" />
                                <span className="ml-2">{name}</span>
                                <img className="ml-2" src="https://i.ibb.co/SXYhc7G/peopleicon.png" height="20" width="20" alt="" />
                                <span className="ml-1">4</span>
                                <span className="ml-2">${price}</span>
                            </div>

                            <div className="bg-light p-2 rounded mt-2">
                                <img src={src} height="50" width="50" alt="" className="ml-2" />
                                <span className="ml-2">{name}</span>
                                <img className="ml-2" src="https://i.ibb.co/SXYhc7G/peopleicon.png" height="20" width="20" alt="" />
                                <span className="ml-1">4</span>
                                <span className="ml-2">${price}</span>

                            </div >

                            <div className="bg-light p-2 rounded mt-2">
                                <img src={src} height="50" width="50" alt="" className="ml-2" />
                                <span className="ml-2">{name}</span>
                                <img className="ml-2" src="https://i.ibb.co/SXYhc7G/peopleicon.png" height="20" width="20" alt="" />
                                <span className="ml-1">4</span>
                                <span className="ml-2">${price}</span>

                            </div>


                        </div>

                    </form>}


                </div>
                <div className="col-lg-4 map-style mx-auto">
                    <img src="https://i.ibb.co/0jzhwCZ/Map.png" alt="" />
                </div>
            </div>

        </div>
    );
};

export default SearchLocation;