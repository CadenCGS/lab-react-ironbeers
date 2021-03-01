import React, {useState, useEffect} from 'react';
import HomeNavbar from './HomeNavbar.js'
import axios from 'axios';
import './AllBeers.css'

function RNGBeer(props) {

    let id = props.match.params._id
    const [selectedBeer, setSelectedBeer] = useState({});

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(res => {
                setSelectedBeer(res.data.find(x => x._id === id));
            });
    },[]);


    return (
        <div>
            <HomeNavbar />
            <img id="beerPictures" src={selectedBeer.image_url} alt="A Beer Pic"></img>
            <h3>{selectedBeer.name}</h3>
            <h3>{selectedBeer.tagline}</h3>
            <h3>{selectedBeer.first_brewed}</h3>
            <h3>{selectedBeer.attenuation_level}</h3>
            <h3>{selectedBeer.description}</h3>
            <h3>{selectedBeer.contributed_by}</h3>
        </div>
    )
}

export default RNGBeer;