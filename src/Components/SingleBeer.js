import React, {useState, useEffect} from 'react';
import beerId from './AllBeers.js'
import beers from './AllBeers.js'
import HomeNavbar from './HomeNavbar.js'



function SingleBeer(props) {

    let id = props.match.params._id
    let [selectedBeer, setSelectedBeer] = useState();

    console.log(props.beers);

    // findBeer(){

    // }

    return (
        <div>
            <HomeNavbar />
        </div>
    )
}

export default SingleBeer;