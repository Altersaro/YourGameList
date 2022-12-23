import React from "react";
import Games from "./Pages/gamesPage/Games";
import {Route, Routes} from "react-router-dom";
import Login from "./Pages/logIn-SignIn/Login";
import GamesGenres from "./Pages/gamesGenres/GamesGenres";
import GameDetail from "./Pages/gameDetails/GameDetail";
import SignIn from "./Pages/logIn-SignIn/SignIn";
import AllGenres from "./components/allGenres/AllGenres";
import Searched from "./Pages/search/Searched";
import UserPage from "./Pages/userPage/UserPage";
import Protected from "./Pages/userPage/Protected";
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