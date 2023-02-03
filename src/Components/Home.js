import React from "react";

export default function Home() {
    const styleAddDog = {
        borderRadius: 180,
        padding: 20,
        width: 100,
        height: 100,
        border: "none",
        backgroundColor: "#D5EEFF",
        color: "grey",
        cursor: "pointer",
        margin: 5,
    }
    return (
        
    <div>
        
       
        <h1>Welcome to the Doggy Care App</h1>
      
        <a href="/form"><button style={styleAddDog}>Add Dog</button></a>
        <a href="/doggy"><button style={styleAddDog}>Balto</button></a>
    </div>

    )
}