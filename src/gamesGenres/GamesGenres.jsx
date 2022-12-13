import React from 'react'
import { ClientApiContext } from '../ClientApi'
import Card from '../card/Card';
import {useParams} from 'react-router-dom'


function GamesGenres() {

    const{gamesGenres, setPath}  = React.useContext(ClientApiContext);

    let params = useParams()

    React.useEffect(()=>{
        setPath(params.type.toLocaleLowerCase())
    },[setPath,params.type])

    return(
    <div className='col-10'>
        <h1 className='section-title'>{params.type.toUpperCase()}</h1>
        <div className=' card-container'>
        {gamesGenres.map(gamesgenre=>{ 
            return(
                <Card game={gamesgenre}  key={gamesgenre.id}/>
            )
        })}
        </div>
    </div>
    )

}

export default GamesGenres