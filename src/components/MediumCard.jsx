import React, { Component } from 'react';
import imgpet from '../images/img-pet.jpg'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import {Col,Container,Row} from 'react-bootstrap'




    const MediumCard = () => {
        return(
            <Container>
            <Row>
    <Col xs={12} md={6} lg={6} xl={3}>
    
              <img src={img1} layout="fill" style={{width:'270px',borderRadius:'10px'}}/>   
              <h4>Outdoor getways</h4>  
         
         </Col>
    <Col  xs={12} md={6} lg={6} xl={3}> 
    
          
          <img src={img2} layout="fill" style={{width:'270px',borderRadius:'10px'}}/>  
          <h4>Unique Stays</h4>     
     
     </Col>
    <Col xs={12} md={6} lg={6} xl={3}> 
    
     <img src={img3} layout="fill" style={{width:'270px',borderRadius:'10px'}}/>  
     <h4>Entire homes</h4>     

</Col>
    <Col xs={12} md={6} lg={6} xl={3}>
   
 <img src={imgpet} layout="fill" style={{width:'270px',borderRadius:'10px'}}/>  
 <h4>Pet allowed</h4>     

</Col>
  </Row>
</Container>
            
               
        
        )
}

export default MediumCard;