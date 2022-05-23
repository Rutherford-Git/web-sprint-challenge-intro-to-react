import React, {useEffect, useState} from 'react';
import Character from './components/Character'
import { data } from './mocks/handlers';
import './App.css';
import SearchBar from './components/xxx';
import axios from 'axios';

const App = () => {


  const [egg, yolk] = useState([]);

  /* const [setName, setSetName] = useState(''); */

/*   egg.forEach((person, idx)=> {
    console.log('red');
   return setSetName(person.name); 
  }) */

  useEffect(()=> {
     axios.get('https://swapi.dev/api/people/')
     .then((res)=>{
       yolk(res.data);
       console.log(res.data);
     })
     .catch((prob)=>{
       console.error(prob);
     })
  }, [])
 let ggg = egg.map((person, idx)=> {
    console.log('red');
  return <Character person={person} key={idx}/>
})




  // for each character i need an unordered list with the characte name
  // then i need to list over each part of the person object
  
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Star Wars Major characters</h1>
      <SearchBar />
      {ggg}
    </div>
   
  );
}

export default App
