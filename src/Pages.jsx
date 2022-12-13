import React from "react";
import Games from "./gamesPage/Games";
import {Route, Routes} from "react-router-dom";
import Login from "./logIn-SignIn/Login";
import GamesGenres from "./gamesGenres/GamesGenres";
import GameDetail from "./gameDetails/GameDetail";
import SignIn from "./logIn-SignIn/SignIn";
import AllGenres from "./allGenres/AllGenres";
import Searched from "./search/Searched";
import UserPage from "./userPage/UserPage";
import Protected from "./userPage/Protected";
import Popup from './components/Popup';
import { ClientApiContext } from './ClientApi';



function Pages(){

    const {popupState, popupText } = React.useContext(ClientApiContext);

    return(
        <>
            <Routes>
                <Route path="/" element={<Games/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signin" element={<SignIn/>}/>
                <Route path="/Genres" element={<AllGenres/>}/>
                <Route path="/Genres/:type" element={<GamesGenres/>}/>
                <Route path="/:name" element={<GameDetail/>}/>
                <Route path='/search/:search' element={<Searched/>}/>
                <Route path='/userpage' element={<Protected component={UserPage}/>}/>
            </Routes>
        <Popup trigger={popupState} text={popupText}/>
        </>
    )
}

export default Pages