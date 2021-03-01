import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './AllBeers.css'
import HomeNavbar from './HomeNavbar.js'

function AllBeers() {
    const [beers, setBeers] = useState(['']);

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(res => {
                setBeers(res.data);
            });
    },[]);

    return (
        <div>
            <HomeNavbar />
            
            {beers.map((allDrinks) => (
                        <div>
                            <Link to={`/SingleBeer/${allDrinks._id}`} >
                                <img id="beerPictures" src={allDrinks.image_url} alt="A Beer Pic"></img>
                                <h3>{allDrinks.name}</h3>
                                <h3>{allDrinks.tagline}</h3>
                                <h3>{allDrinks.contributed_by}</h3>
                            </Link>
                        </div>
                    ))}
            </div>
    )
}

export default AllBeers;