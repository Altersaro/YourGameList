import React from "react";
import axios from "axios";
import AppReducer from './globalContext/AppReducer';
import { useNavigate } from "react-router-dom";

export const ClientApiContext = React.createContext();

const initialState ={
    gamelist: sessionStorage.getItem('usergame') ? JSON.parse(sessionStorage.getItem('usergame')) : [],
    completed:[],
    users: sessionStorage.getItem('users') ? JSON.parse(sessionStorage.getItem('users')) : [],
};

if(sessionStorage.getItem('user-info')){
    const user = JSON.parse(sessionStorage.getItem('user-info'))
    var user_id=(user.id)
}



export const ElementProvider = (props) =>{
    const [games, setGames] = React.useState({
        platforms:[]
    });
    const [upcoming, setUpcoming] = React.useState([]);
    const [hotTitles, setHotTitles] = React.useState([]);
    const [genres, setGenres] = React.useState([]);
    const [gamesGenres, setGamesGenres]= React.useState([]);
    const [allGenres, setAllGenres] = React.useState([]);
    const [path, setPath] = React.useState([]);
    const [popupState, setPopupState] = React.useState(false)
    const [popupText, setPopupText] = React.useState('')
    const [state, dispatch] = React.useReducer(AppReducer,initialState);
    const location = window.location.pathname
    const navigate = useNavigate();


    //date provider
    const current = new Date();
    let date = current.getDate()-1;
    let month = current.getMonth()+1;
    let year = current.getFullYear();
    let precMonth = current.getMonth()-2;
    let futureYear = current.getFullYear()+1;
    let precYear = current.getFullYear()-1;
    let currentDate = `${year}-${month<10? `0${month}`: `${month}`}-${date<10? `0${date}`: `${date}`}`;
    let precDate = `${precYear}-${12}-${date<10? `0${date}`: `${date}`}`;
    let futureDate = `${futureYear}-${month<10? `0${month}`: `${month}`}-${date<10? `0${date}`: `${date}`}`;
    let precYearDate = `${precYear}-${month<10? `0${month}`: `${month}`}-${date<10? `0${date}`: `${date}`}`;





    React.useEffect(()=>{
    getGames();
    getUpcoming();
    getGenres();
    getGamesGenres();
    getAllGenres();
    getHotTitles();
    },[path])


    async function getGames(){
        const res = await axios.get(`${process.env.REACT_APP_URL}/games?key=${process.env.REACT_APP_KEY}&dates=${precDate},${currentDate}&page_size=40`);
        setGames(res.data.results);
        console.log(currentDate)
        console.log(precDate)
    }

    async function getUpcoming(){
        const res = await axios.get(`${process.env.REACT_APP_URL}/games?key=${process.env.REACT_APP_KEY}&dates=${currentDate},${futureDate}&page_size=40`)
        setUpcoming(res.data.results);
    }

    async function getHotTitles(){
        const res = await axios.get(`${process.env.REACT_APP_URL}/games?key=${process.env.REACT_APP_KEY}&metacritic=80,100&dates=${precYearDate},${currentDate}&page_size=40`)
        setHotTitles(res.data.results)
        console.log(res.data.results);
    }

    async function getGenres(){
        const res = await axios.get(`${process.env.REACT_APP_URL}/genres?key=${process.env.REACT_APP_KEY}&page_size=9`);
        setGenres(res.data.results);
    }

    async function getAllGenres(){
        const res = await axios.get(`${process.env.REACT_APP_URL}/genres?key=${process.env.REACT_APP_KEY}`);
        setAllGenres(res.data.results);
        
    }

    async function getGamesGenres(){
        const res = await axios.get(`${process.env.REACT_APP_URL}/games?key=${process.env.REACT_APP_KEY}&genres=${path}&page_size=40`);
        setGamesGenres(res.data.results);
    }

    async function showAlert(name){
        setPopupState(true)
        setTimeout(() => {setPopupState(false)},2000 );
        setPopupText(name)
    }

    async function refreshPage(){
        setTimeout(() => {window.location.reload()},1000 )
    }


    const addGameToList = (game) => {
        if(sessionStorage.getItem('user-info')){
            dispatch({type: "ADD_GAME_TO_LIST", payload: game});
            axios.post(`${process.env.REACT_APP_API_URL}api/addGame`, {...game, user_id:user_id, completed:0});
            showAlert('AMAZING!, Now this game is in your list')
        }else{
            setPopupState(true)
            showAlert('Please Log in for add this game in your list')
        }
    };

    const deleteGameToList = (id) =>{
        showAlert('You have removed this game from list')
        if(sessionStorage.getItem('user-info')){
            axios.post(`${process.env.REACT_APP_API_URL}api/delete`,{id, user_id})
            dispatch({type:"REMOVE_GAME_FROM_LIST",payload:id})
            refreshPage()
        }
    }

    return(
        <ClientApiContext.Provider
            value={
                {
                games:games,
                upcoming:upcoming,
                hotTitles:hotTitles,
                genres:genres,
                gamesGenres:gamesGenres,
                allGenres: allGenres,
                setPath:setPath,
                location:location,
                popupState:popupState,
                popupText:popupText,
                setPopupText:setPopupText,
                showAlert:showAlert,
                refreshPage:refreshPage,
                gamelist:state.gamelist,
                completed:state.completed,
                users:state.users, 
                addGameToList,
                deleteGameToList,
                }}>
            {props.children}
        </ClientApiContext.Provider>
    )
}