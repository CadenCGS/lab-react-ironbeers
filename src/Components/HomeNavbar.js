import React from 'react';
import {Link} from 'react-router-dom';
import './HomeNavbar.css'

function HomeNavbar() {
    
    return (
        <div>
            <Link to='./'>
                <div  id="navHomeButon">
                </div>
            </Link>
        </div>
    )
}

export default HomeNavbar;