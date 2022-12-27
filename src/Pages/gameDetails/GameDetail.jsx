import React from 'react';
import axios from "axios";
import { GamesDetails } from './gameDetails.style';
import { CardStyle } from '../../components/card/Card.style'
import {Link,useParams} from 'react-router-dom';
import  Vote from '../../components/Vote'
import ReleaseDate from '../../components/ReleaseDate';
import AddButton from '../../components/addButton';
import {motion} from 'framer-motion'




function GameDetail() {


    const [gamesDetails, setGamesDetails]= React.useState({
        platforms:[],
        genres:[],
        developers:[]
    });

    const [screenshots, setScreenshots]= React.useState([])

    const [additions, setAdditions]= React.useState([])




    let params = useParams()
    
    async function getGamesDetails(name){
        const res = await axios.get(`${process.env.REACT_APP_URL}/games/${name}?key=${process.env.REACT_APP_KEY}`);
        setGamesDetails(res.data);

    }


    async function getAdditions(name){
        const res = await axios.get(`${process.env.REACT_APP_URL}/games/${name}/additions?key=${process.env.REACT_APP_KEY}`);
        setAdditions(res.data.results)
    }
    
    async function getScreenshots(name){
        const res = await axios.get(`${process.env.REACT_APP_URL}/games/${name}/screenshots?key=${process.env.REACT_APP_KEY}`);
        setScreenshots(res.data.results);
    }


    
    React.useEffect(()=>{
        getGamesDetails(params.name)
        getAdditions(params.name)
        getScreenshots(params.name)
    },[params.name])


return (
    //main content
    <GamesDetails className='col-10 '>
        <h1 className='section-title'>{gamesDetails.name}</h1>
        <div className='presentation'>
            <div className='details-img-container'>
                <img  className = 'details-img' src={gamesDetails.background_image ? gamesDetails.background_image : 'ImageDetailsNotFound.jpg'} />
                <Vote metacritic={gamesDetails.metacritic}/>
                <AddButton game={gamesDetails}/>
            </div> 
            <div className='details-info-container '>
                <h2>Genres</h2>
                {gamesDetails.genres.map(genre=>{
                    return(
                    <p key={genre.id}>{genre.name} </p>
                    )
                })}
                <h2>Released</h2>
                <ReleaseDate released={gamesDetails.released}/>
                <div className='card-platforms'>
                    <h2>Platforms</h2>
                    {gamesDetails.platforms.map(platform=>{
                        return(
                        <span key={platform.platform.id}>{platform.platform.name} </span>
                        )
                    })}
                </div>
                <div className='card-platforms'>
                    <h2>Developers</h2>
                    {gamesDetails.developers.map(developer=>{
                        return(
                        <span key={developer.id}>{developer.name} </span>
                        )
                    })}
                </div>
            </div>
        </div>
        {/* screenshot */}
        <div className='details-description-container'>
            <p className='details-description'>{gamesDetails.description_raw}</p>
        </div>
        <div className='screenshots-container'>
            {screenshots.map(screenshot=>{
                return(
                    <motion.img initial={{scale:0}} whileInView={{scale:1}} src={screenshot.image} key={screenshot.id}></motion.img>
                )
            })}
        </div>
        {/* addition content */}
        <div className='col-10 addition-container'>
            <div className='card-container'>
                {additions.map(addition=>{ 
                    return(
                    <CardStyle key={addition.id} className="gamesGenre-card" initial={{scale:0}} whileInView={{scale:1}}>
                        <img  className = 'card-img' src={addition.background_image ? addition.background_image : 'imagenotfound.jpg' } />
                    <div className='card-info-container'>
                        <div className='card-info'>
                            <Link to={'/'+addition.slug} className='card-title'>{addition.name}</Link>
                            <span>{addition.platforms.map(platform=>{
                            return(
                            <span key={platform.platform.id} className='card-platforms'>{platform.platform.name} </span>
                            )
                            })}
                            </span>
                        </div>
                    </div>
                    <AddButton game={addition}/>
                    </CardStyle>
                    )
                })}
            </div>
        </div>
</GamesDetails>
)
}

export default GameDetail