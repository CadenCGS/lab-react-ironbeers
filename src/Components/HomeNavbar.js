import React from 'react';
import {Link} from 'react-router-dom';
import './HomeNavbar.css'

function HomeNavbar() {
    
    return (
        <div>
            <Link to='../'>
                <div style={{marginBottom: 15}}  id="navHomeButon">
                    <img style={{height: 65}} src="https://cdn0.iconfinder.com/data/icons/basic-ui-seo/64/home_2-512.png" alt="Home Picture"></img>
                </div>
            </Link>
        </div>
    )
}

export default HomeNavbar;