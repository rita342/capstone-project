
import React, { Component } from 'react';


class Cover extends Component {
    render() {
        return (
            <>
            <div className ="relative h-[300] sm: h [400] lg:h-[500px]"id="cover" >
                <img src="https://links.papareact.com/0fm" layout="fill" objectFit="cover"   style={{ backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw'}} />
         
<h2 id="tree">"TREE HOUSES ARE THE ULTIMATE RETURN TO  NATURE"</h2>
           

           
            </div>
            </>
               
        );
    }
}

export default Cover;