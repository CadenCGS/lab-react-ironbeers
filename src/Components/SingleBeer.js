import React, {useState, useEffect} from 'react';
import HomeNavbar from './HomeNavbar.js'
import axios from 'axios';
import './SingleBeer.css'

function SingleBeer(props) {

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
            <img id="beerPicture"src={selectedBeer.image_url} alt="A Beer Pic"></img>
            <h1>{selectedBeer.name}</h1>
            <p><strong>Tagline: </strong>{selectedBeer.tagline}</p>
            <p><strong>First Brewed: </strong>{selectedBeer.first_brewed}</p>
            <p><strong>Attenuation Level: </strong>{selectedBeer.attenuation_level}</p>
            <p id="desc"><strong>Description: </strong>{selectedBeer.description}</p>
            <p><strong>Contributed By: </strong>{selectedBeer.contributed_by}</p>
        </div>
    )
}

export default SingleBeer;