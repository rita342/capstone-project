import React, { Component } from 'react';
import imgpet from '../images/img-pet.jpg'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/imgcrop.jpg'
import {Col,Container,Row} from 'react-bootstrap'




    const MediumCard = () => {
        return(
            <Container>
            <Row>
    <Col xs={12} md={6} lg={6} xl={3}>
    
              <img src={img1} layout="fill" style={{width:'270px',borderRadius:'10px'}}/>   
              <h5>Outdoor getways</h5>  
         
         </Col>
    <Col  xs={12} md={6} lg={6} xl={3}> 
    
          
          <img src={img2} layout="fill" style={{width:'270px',borderRadius:'10px'}}/>  
          <h5>Unique Stays</h5>     
     
     </Col>
    <Col xs={12} md={6} lg={6} xl={3}> 
    
     <img src={img3} layout="fill" style={{width:'270px',borderRadius:'10px'}}/>  
     <h5>Entire homes</h5>     

</Col>
    <Col xs={12} md={6} lg={6} xl={3}>
   
 <img src={imgpet} layout="fill" style={{width:'270px',borderRadius:'10px'}}/>  
 <h5>Pet allowed</h5>     

</Col>
  </Row>
  
  <Row>
    <Col xs={12} md={12} lg={12}><img src={img4} layout="fill" objectFit="cover"  style={{width:'100%',borderRadius:'10px',height:'400px',marginTop:'5rem',marginBottom:'5rem'}}/> 
    <h2 style={{marginTop:'-40%'}}>dfff</h2>
     </Col>
    
  </Row>

</Container>
            
               
        
        )
}

export default MediumCard;