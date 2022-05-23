// Write your Character component here
import React from 'react';

/* export */ const Character = props => {

  // i need this function to render a the data of the of a single person

  const {person} = props;
  
  console.log('blue')
    

    return (
       <div >
         <details>
             <summary id={person.name} className='character'>
         {person.name}
         </summary>
         <ul>
             <li>Gender: {person.gender}</li>
             <li>Height: {person.height}</li>
             <li>Mass: {person.mass}</li>
             <li>Birth Year: {person.birth_year}</li>
             <li>Eye Color: {person.eye_color}</li>
             <li>Skin Color: {person.skin_color}</li>
             <li>Hair Color: {person.hair_color}</li>
         </ul>
         </details>
     </div>

    )

}

export default Character;