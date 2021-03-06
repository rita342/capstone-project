import {Button} from 'react-bootstrap'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useState } from 'react'
import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";
import { FcPlus} from "react-icons/fc";
import { BsPeopleFill ,BsPatchMinusFill} from "react-icons/bs";
import {Navbar,Col,Row,Container} from 'react-bootstrap'
import {RiDeleteBin6Fill} from "react-icons/ri";
import { Link, withRouter} from 'react-router-dom'
import {SiAirbnb } from "react-icons/si";
import { BiSearch } from "react-icons/bi";

function Header() {

    const [search, setSearch]= useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [count, setCount] = useState(0);


    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    
    const selectionRange = {
        startDate:startDate,
        endDate:endDate,
        key:'selection',
    }
   
const deleteInput =()=>{
    setSearch("")
}
    return( 
      
     <div>
<Container style={{marginTop:'30px',marginBottom:'20px'}}>
 
  <Row>
    <Col><SiAirbnb style={{marginLeft:'10px',fontSize:'40px',color:'green'}}/>AirBnb</Col>
    <Col id="box"> <input  value ={search} onChange ={(e) => setSearch(e.target.value)} type = "text" placeholder="start search ypur place"  id="input"/>
    <label id="check"><BiSearch/></label>
    </Col>
    <Col>3 of 3</Col>
  </Row>
</Container>

      
      
       {search && (  
       <div>
<DateRangePicker
ranges={[selectionRange]}
onChange={handleSelect}
/>
 
<Navbar style={{width:'400px',background:'#FD5B61',borderRadius:'50px',marginBottom:'20px'}}>
  <h2 style={{color:'pink'}}>Numberof Guests</h2>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
     
    <p><BsPeopleFill style={{width:'40px',size:'30px'}}/>{count}</p>
<FcPlus onClick={()=>setCount(count+1)}/>
<BsPatchMinusFill onClick={()=>setCount(count-1)}/>
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
<div style={{display:'flex'}}>
<h5  onClick={deleteInput} style={{fontWeight:'900'}}>Cancel</h5>
<Link to="/Main2">continue</Link>
</div>
</div>
) }
 </div>
       
            
        
            
    );
}
export default Header




