import React, { useState } from 'react';

function Example() {

    const[fname, setFname] = useState("");
    const[lname, setLname] = useState("");

    const random = Math.floor(Math.random()*10);

    const handleClick = ()=>{

        console.log(fname.toLowerCase() + lname.toLowerCase() + random);
    }


    return (
        <div>
            <label for="fname">FirstName</label>
            <input type="text" name="fname" onChange = {(e)=>{setFname(e.target.value)}}></input>
            <label for="lname">LastName</label>
            <input type="text" name="lname" onChange = {(e)=>{setLname(e.target.value)}}></input>
            <button onClick={handleClick}>Generate</button>
        </div>
    );
}

export default Example;