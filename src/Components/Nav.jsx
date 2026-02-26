import React from "react";
const Nav = ()=>{
    const name = "Asik"
    const number = 10;
    const greating =()=>{
        return "Welcome to React"
    }
    const isToggle = false;
    return(
        <>
        {/* variable use */}
        <h1>hi {name}</h1>
        {/* Expression use */}
        <h2>{number + 5}</h2>
        {/* Function use */}
        <h3>{greating()}</h3>
        {/* Condition Rendering code start here */}
        {isToggle ? "Welcome back":"Plaese Login"}
        </>
    )
}
export default Nav

