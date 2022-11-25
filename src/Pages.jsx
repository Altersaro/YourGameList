import React from "react";
import Games from "./gamesPage/Games";
import {Route, Routes} from "react-router-dom";
import Login from "../src/Login";



function Pages(){

    return(
            <Routes>
                <Route path="/" element={<Games/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
    )
}

export default Pages