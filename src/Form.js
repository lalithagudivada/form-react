import React, { useState } from 'react';

const Form = () => {
   const [login,setLogin] = useState({
       named:"",
       pass:""
   })
  const  Submit =(eve)=>
   {
        eve.preventDefault();
        console.log(login)
        console.log(login.named);
        console.log(login.pass);
   }
  const  inputhandle =(e)=>
  {    
       
       console.log(e.target.value)
       const names=e.target.name;
       const value=e.target.value
    setLogin({...login,[names]:value,});
    //  setLogin(e.target.value)
  }

    return (
        <div>
       
         <form action="" onSubmit={Submit}>
             <h1></h1>
             <div>
                 <input type="text"
                  name="named" 
                 onChange={inputhandle}
                 value={login.named}
                 
                 id="" />
                   <input type="password"
                    name="pass" 
                    onChange={inputhandle}
                    value={login.pass}
                 
                 id="" /> 
                 <button >Submit</button>

             </div>
             </form>    
        </div>
    );
};

export default Form;