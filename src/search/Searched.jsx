import React from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import {CardStyle} from '../card/Card.style'
import AddButton from '../components/addButton';




function Searched() {



    const [gameResults, setGameResults] = React.useState([]);
    let params = useParams()


    async function getSearched(search){
        const res = await axios.get(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_KEY}&search=${search}`);
        setGameResults(res.data.results);
    }

    React.useEffect(()=>{
        getSearched(params.search)
    },[params.search]);

return (
    <div className='col-10'>
    <h1 className='section-title'>{params.search.toUpperCase()}</h1>
    <div className=' card-container'>
    {gameResults.map(gameResult=>{ 
        return(
        <CardStyle key={gameResult.id} className="gamesGenre-card" initial={{scale:0}} whileInView={{scale:1}}>
            <img  className = 'card-img' src={gameResult.background_image} />
            <div className='card-info-container'>
            <div className='card-info'>
                <Link to={'/'+gameResult.slug} className='card-title'>{gameResult.name}</Link>
                <h2 className='card-platforms'>Get more information!<i className="bi bi-arrow-up"></i></h2>
            </div>
            </div>
            <AddButton game={gameResult}/>
        </CardStyle>
        )
    })}
    </div>
</div>
)
}

export default Searched