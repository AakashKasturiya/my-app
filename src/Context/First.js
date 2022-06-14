import React, {createContext} from 'react';
import Two from './Two';
let Name = createContext();
let LastName = createContext();

let First =()=>{

  
return(
    <>
    <Name.Provider value={"Aakash"}>
    <LastName.Provider value={"Kasturiya"}>
    <Two/>
    </LastName.Provider>
    </Name.Provider>
       
    </>
);
}


export default First;
export {Name,LastName};
