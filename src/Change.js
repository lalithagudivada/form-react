import React, { useState } from 'react';

const Change = () => {
    const [student,setStudent] =useState({
    name : "jj",
   
})
const changeMe=()=>{
    setStudent({...student,name:"svecw"})

}
    return (
        <div>
           name: {student.name}
            <button onClick={changeMe}>change</button>
        </div>
    );
};

export default Change;