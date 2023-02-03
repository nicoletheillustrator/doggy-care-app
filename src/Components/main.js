import React from "react"
import {Routes, Route} from 'react-router-dom';
import AddForm from "./addForm";
import DogPage from "./dogPage";
import Home from "./Home";


export default function Main() {
    return (
      
        <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/doggy" element={<DogPage />}></Route>
                <Route path="/form" element={ <AddForm /> }></Route>
            </Routes>
        </div>
        
    )
}