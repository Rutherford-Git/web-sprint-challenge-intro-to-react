import React, {useState} from 'react';
import {Character} from 'C:/Users/ruthe/documents/web-sprint-challenge-intro-to-react/src/components/Character'
import { data } from './mocks/handlers';
import './App.css';

const App = () => {


  const [egg, setEgg] = useState(data);
  const [person, setPerson]= useState('');

   const name =  egg.forEach( exp => {
        return exp.name
  })
  .then(()=> console.log('blue'))
  .catch(()=> console.log('error'))

  setPerson(name);



  // for each character i need an unordered list with the characte name
  // then i need to list over each part of the person object
  
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">{person}</h1>
    </div>
  );
}

export default App
