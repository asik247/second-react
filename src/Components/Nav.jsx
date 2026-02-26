import React from "react";
const Nav = ()=>{
    const name = "Asik"
    const number = 10;
    return(
        <>
        {/* variable use */}
        <h1>hi {name}</h1>
        {/* Expression use */}
        <h2>{number + 5}</h2>

        </>
    )
}
export default Nav

