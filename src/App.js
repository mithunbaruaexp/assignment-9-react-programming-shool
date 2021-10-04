
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Home from './componenets/Home/Home';
import Header from './componenets/Header/Header';
import Footer from './componenets/Footer/Footer';
import Services from './componenets/Services/Services';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import About from './componenets/About/About';

import Noutfound from './componenets/Notfound/Noutfound';
import Notice from './componenets/Notice/Notice';


function App() {
  const [data, setData]= useState([])
  useEffect(()=>{
    fetch('./fakeData.json')
    .then(res=>res.json())
    .then(data=>setData(data))
  },[])
 
  return (
    <div>
      <Router>
      
      <Header></Header>
     
       <Switch>
         <Route exact path='/'>
         <Home data={data}></Home>
         </Route>

         <Route path='/home'>
         <Home data={data}></Home>
         </Route>

         <Route  path='/services'>
         <Services data={data}></Services>
         </Route>
         <Route  path='/about'>
        <About></About>
         </Route>
         <Route  path='/notice'>
        <Notice data={data}></Notice>
         </Route>
         <Route  path='*'>
        <Noutfound></Noutfound>
         </Route>

       </Switch>
       
       </Router>
    
      
      
     <Footer> </Footer>
    </div>
  );
}

export default App;
