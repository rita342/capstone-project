import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Home from './components/Home'
import Main2 from './components/Main2'
import './App.css';
import { BrowserRouter , Routes, Route,Link,Switch} from 'react-router-dom'

const  App = () => {
  return(
    <div>
  
    <BrowserRouter>
    <Home/>
    
      <Routes>
      <Route path="./Main2" exact Component={Main2}/>
    
      </Routes>
      </BrowserRouter>  
      </div>  
      );
  
}
 






export default App;
