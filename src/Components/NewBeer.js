import React, {useState} from 'react';
import HomeNavbar from './HomeNavbar.js';
import './NewBeer.css';

function NewBeer() {
    let [beerName, setBeerName] = useState("");
    let [tagline, setTagline] = useState("");
    let [description, setDescription] = useState("");
    let [firstBrewed, setFirstBrewed] = useState("");
    let [tips, setTips] = useState("");
    let [attenuation, setAttenuation] = useState("");
    let [contributed, setContributed] = useState("");

    function handleFormSubmit(){
        fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: beerName,
                tagline: tagline,
                description: description,
                first_brewed: firstBrewed,
                brewers_tips: tips,
                attenuation_level: attenuation,
                contributed_by: contributed
            })
            })
    }

    return (
        <div>
            <HomeNavbar />

            <form onSubmit={handleFormSubmit()}>
                <div className="formElement">
                    <label for="name ">Beer Name: </label>
                    <input type="text" id="name " name="name" onChange={event => setBeerName(event.target.value)}></input><br></br>
                </div>

                <div className="formElement">
                    <label for="tagline ">Tagline: </label>
                    <input type="text" id="tagline " name="tagline " onChange={event => setTagline(event.target.value)}></input><br></br>
                </div>

                <div className="formElement">
                    <label for="description ">Description: </label>
                    <input type="text" id="description " name="description " onChange={event => setDescription(event.target.value)}></input><br></br>
                </div>

                <div className="formElement">
                    <label for="first_brewed">First Brewed: </label>
                    <input type="text" id="first_brewed" name="fbrfirst_brewedew" onChange={event => setFirstBrewed(event.target.value)}></input><br></br>
                </div>

                <div className="formElement">
                    <label for="brewers_tips">Brewer's Tips: </label>
                    <input type="text" id="brewers_tips" name="brewers_tips" onChange={event => setTips(event.target.value)}></input><br></br>
                </div>

                <div className="formElement">
                    <label for="attenuation_level">Attenuation Level: </label>
                    <input type="number" id="attenuation_level" name="attenuation_level" onChange={event => setAttenuation(event.target.value)}></input><br></br>
                </div>

                <div className="formElement">
                    <label for="contributed_by">Contributed By: </label>
                    <input type="text" id="contributed_by" name="contributed_by" onChange={event => setContributed(event.target.value)}></input><br></br>
                </div>

                <div className="formElement">
                    <input type="submit" value="Submit"></input>
                </div>
            </form>
        </div>
    )
}

export default NewBeer;