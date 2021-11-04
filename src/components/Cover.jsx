
import React, { Component } from 'react';


class Cover extends Component {
    render() {
        return (
            <>
            <div className ="relative h-[300] sm: h [400] lg:h-[500px]"id="cover" >
                <img src="https://links.papareact.com/0fm" layout="fill" objectFit="cover" style={{ backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw'}} />
         

            <nav className="info">
                <ul>
                    <li><a href="#" class="nav-link current">place to stay</a></li>
                    <li><a href="#" class="nav-link">Experiances</a></li>
                    <li><a href="#" class="nav-link">Online Experiances</a></li>

                </ul>
            </nav>
            </div>
            </>
               
        );
    }
}

export default Cover;