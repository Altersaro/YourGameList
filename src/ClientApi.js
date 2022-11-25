import React from "react";
import axios from "axios";

export const ClientApiContext = React.createContext();

export const ElementProvider = (props) =>{
    const [games, setGames] = React.useState([]);
    const [upcoming, setUpcoming] = React.useState([]);
    const [genres, setGenres] = React.useState([]);
    const [gamesGenres, setGamesGenres]= React.useState([]);
    const [path, setPath] = React.useState([]);

    React.useEffect(()=>{
    getGames();
    getUpcoming();
    getGenres();
    getGamesGenres()
    },[path])

    async function getGames(){
        const res = await axios.get(`https://api.rawg.io/api/games?key=a2aa1ee9417240229486360ed39b7ab0&dates=2022-09-01,2022-11-30&page_size=30`);
        setGames(res.data.results);
        console.log(process.env.REACT_APP_KEY)
    }

    async function getUpcoming(){
        const res = await axios.get(`https://api.rawg.io/api/games?key=a2aa1ee9417240229486360ed39b7ab0&dates=2023-01-01,2023-09-09`)
        setUpcoming(res.data.results);
        console.log(res.data.results);
    }

    async function getGenres(){
        const res = await axios.get(`https://api.rawg.io/api/genres?key=a2aa1ee9417240229486360ed39b7ab0&page_size=7`);
        setGenres(res.data.results);
        console.log(res.data.results);

    }

    async function getGamesGenres(){
        const res = await axios.get(`https://api.rawg.io/api/games?key=a2aa1ee9417240229486360ed39b7ab0&genre=${path}`);
        setGamesGenres(res.data.results);
        console.log(res.data.results);

    }

    return(
        <ClientApiContext.Provider
            value={
                {
                games:games,
                upcoming:upcoming,
                genres:genres
                }}>
            {props.children}
        </ClientApiContext.Provider>
    )
}