import React, { useState } from 'react';
import "./styles.css"

const App = () => {
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const[radio,setRadio]=useState('')
    const[checkbox,setCheckbox]=useState('')
    const checkboxChange =(e)=>
    {
        setCheckbox(e.target.value)
    }
    const radioChange =(e)=>
    {
        setRadio(e.target.value);
    }
    const passwordChange =(e)=>
    {
        setPassword(e.target.value);
    }
   const usernameChange =(e)=>
   {
       setUsername(e.target.value);
   }
    return (
        <form >
        <div>
            <h1>FORM</h1>
        <div className='indiv'>
            <input type="text" 
            value={username}
            onChange={usernameChange}
            placeholder="username"
            />
        </div>
        <div className='indiv'>
            <input type="password" 
            value={password}
            onChange={passwordChange}
            placeholder="password"
            />
        </div>
        <div className='indiv'>
            <input type="radio" 
            value={radio}
            onChange={radioChange}
            name="n"
            />Male
             <input type="radio" 
            value={radio}
            onChange={radioChange}
            name="n"
            />Female
        </div>
        <div className='indiv'>
            <input type="checkbox" 
            value={checkbox}
            onChange={checkboxChange}
         
            />English
            <input type="checkbox" 
            value={checkbox}
            onChange={checkboxChange}
         
            />Hindi
      
        </div>
        {/* <div  id="button">
            <input type="button" 
           placeholder='signup'
        />
        </div> */}
        </div>
        </form>
    );
};

export default App;