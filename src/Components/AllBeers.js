import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './AllBeers.css'
import HomeNavbar from './HomeNavbar.js'

function AllBeers() {
    let [beers, setBeers] = useState(['']);
    let [searchedWords, setSearchedWords] = useState('')

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(res => {
                setBeers(res.data);
            });
    },[]);

    const nameTest = new RegExp(`.*${searchedWords}.*`, 'gi');
    const searchedBeers = beers.filter(items => nameTest.test(items.name));

    return (
        <div>
            <HomeNavbar />
            
            <label for="contributed_by">Search Beers: </label>
            <input type="text" id="search" onChange={event => setSearchedWords(event.target.value)}></input>

            {searchedBeers.map((allDrinks) => (
                        <div>
                            <Link style={{textDecoration: 'none'}} to={`/SingleBeer/${allDrinks._id}`} >
                                <div id="beerShow">
                                    <img id="beerPictures" src={allDrinks.image_url} alt="A Beer Pic"></img>
                                    <p><strong>Name:</strong> {allDrinks.name}</p>
                                    <p><strong>Tagline:</strong> {allDrinks.tagline}</p>
                                    <p><strong>Contributed By:</strong> {allDrinks.contributed_by}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
            </div>
    )
}

export default AllBeers;