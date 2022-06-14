import React, { useContext } from 'react'
import {Name,LastName} from "./First";



let Three = ()=>{
    let fname = useContext(Name);
    let lname = useContext(LastName);
return(
    <>
<h2>First Name:{fname}</h2><br></br>
<h2>Last Name:{lname}</h2>
    </>
);
}

export default Three;