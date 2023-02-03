import React, { useEffect, useState } from "react";

export default function AddForm() {
 
// // Sterilized
   

const [name, setName] = useState();
const [breed, setBreed] = useState();

    function onSubmit(e) {
        
        var form = document.getElementById('dogregistration')
        e.preventDefault();
        const fd = new FormData(form);
        const proData = Object.fromEntries(fd)
            
        form.reset();

        localStorage.setItem("Users", JSON.stringify(proData));
        //specifics
    
       setName(JSON.parse(localStorage.getItem("Users")).dogname)
       setBreed(JSON.parse(localStorage.getItem("Users")).breedname)

      
        }
       
        useEffect(()=>{
            
             console.log("I fired once")
            if (name || breed) {
                

                var profiles = JSON.parse(localStorage.getItem('Profiles') || "[]")

                profiles.push({name, breed})
   
                localStorage.setItem('Profiles', JSON.stringify(profiles))
            }

            else {
                console.log("fired but nothing in input")

            }
         }, [name, breed])


  

     
    return (
    <div>
        
            <form id="dogregistration" onSubmit={onSubmit} >
                <input
                type="text"
                name="dogname"
                placeholder="Dog Name Goes Here"
                id="dogname"
                ></input>
                <select name="breedname" placeholder="Choose your Breed">
                    <option value="Siberian Husky">Siberian Husky</option>
                    <option value="Vizsla">Vizsla</option>
                    <option value="Malamute">Malamute</option>
                </select>
                
                <button type="submit">Make New Profile
                </button>
                
            </form>
           
    </div>
    )
}

