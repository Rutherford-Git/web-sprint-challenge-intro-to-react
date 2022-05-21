// Write your Character component here
import React, {useState} from 'react';

export const Character = props => {

    // i need this function to render a the data of the of a single person


     /* const {Characters} = props;
     const [bio, setbio] = useState('');
     const [select, setSelect]= useState('');
 */

     const {Characters} = props;
     

 return (
     <div>
         <h2>{Characters.name}</h2>
     </div>
 )
}

/* export default Character */