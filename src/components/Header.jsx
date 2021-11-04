import {Button} from 'react-bootstrap'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useState } from 'react'
import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";
import { FcPlus} from "react-icons/fc";
import { BsPeopleFill ,BsPatchMinusFill} from "react-icons/bs";
import {Navbar} from 'react-bootstrap'

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
   

    return( 
      
      <container>
        <div className="container" id="header" style={{textAlign:'center',margin:'10px'}}>
    <input  value ={search} onChange ={(e) => setSearch(e.target.value)} type = "text" placeholder="start search ypur place"  />
  
   
        </div>
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


           </div>
        ) }
        </container>
       
            
        
            
    );
}
export default Header




