import {Button} from 'react-bootstrap'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useState } from 'react'

function Header() {

    const [searchInput, setSearchInput]= useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

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
    <input  value ={searchInput} onChange ={(e) => setSearchInput(e.target.value)}type = "text" placeholder="  start your search"  />
  
   
        </div>
       {searchInput && (  
       <div>
<DateRangePicker
ranges={[selectionRange]}
onChange={handleSelect}
/>
           </div>
        ) }
        </container>
       
            
        
            
    );
}
export default Header




