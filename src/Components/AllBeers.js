import React, {useState, useEffect} from 'react';
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

console.log(beers);

    return (
        <div>
            <HomeNavbar />
            
            {beers.map((allDrinks) => (
                        <div>
                            <img id="beerPictures" src={allDrinks.image_url} alt="A Beer Pic"></img>
                            <h3>{allDrinks.name}</h3>
                            <h3>{allDrinks.tagline}</h3>
                            <h3>{allDrinks.contributed_by}</h3>
                        </div>
                    ))}
            </div>
    )
}

export default AllBeers;