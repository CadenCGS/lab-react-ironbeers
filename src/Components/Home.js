import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import HomeNavbar from './HomeNavbar.js'
import './Home.css'

function Home() {

    const [beers, setBeers] = useState(['']);
    const [rng, setRNG] = useState(Number());

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(res => {
                setBeers(res.data);
                setRNG(Math.floor(Math.random() * 25));
            });
    },[]);

    
    return (
        <div>
            <HomeNavbar />
            <Link style={{textDecoration: 'none', color: 'black'}} to="/AllBeers" >
                <img src='beers.png' alt="All Beers PNG"></img>
                <h1>All Beers</h1>
                <p className="infop">Lorem ipsum dolor sit amet, nonumy prompta nominavi est an, quo in nulla officiis, nostro aliquip volutpat cu qui. Ad usu purto menandri disputando. Quo quem labores temporibus te, timeam meliore senserit vix id. Nulla partem facete ex vis.
                </p>
            </Link>
            <div className="splitter"></div>

            <Link style={{textDecoration: 'none', color: 'black'}} to={`/RNGBeer/${beers[rng]._id}`} >
                <img src='random-beer.png' alt="All Beers PNG"></img>
                <h1>Random Beer</h1>
                <p className="infop">Lorem ipsum dolor sit amet, nonumy prompta nominavi est an, quo in nulla officiis, nostro aliquip volutpat cu qui. Ad usu purto menandri disputando. Quo quem labores temporibus te, timeam meliore senserit vix id. Nulla partem facete ex vis.
                </p>
            </Link>
            <div className="splitter"></div>
            <Link style={{textDecoration: 'none', color: 'black'}} to="/NewBeer" >
                <img src='new-beer.png' alt="All Beers PNG"></img>
                <h1>New Beer</h1>
                <p className="infop">Lorem ipsum dolor sit amet, nonumy prompta nominavi est an, quo in nulla officiis, nostro aliquip volutpat cu qui. Ad usu purto menandri disputando. Quo quem labores temporibus te, timeam meliore senserit vix id. Nulla partem facete ex vis.
                </p>
            </Link>
            <div className="splitter"></div>
        </div>
    )
}

export default Home;