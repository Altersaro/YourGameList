import React from 'react'
import { CardStyle } from './Card.style'
import {Link} from 'react-router-dom';
import AddButton from '../addButton';


function Card(props) {
  return (
    <CardStyle initial={{scale:0}} transition={{delay:0.2}} animate={{scale:1}}>
    <img  className ='card-img' src={props.game.background_image ? props.game.background_image : 'imagenotfound.jpg'} alt={props.game.name}/>
    <div className='card-info-container'>
        <div className='card-info'>
            <Link to={'/'+props.game.slug} className='card-title'>{props.game.name}</Link>
            <span>{props.game.platforms.map(platform=>{
            return(
            <span key={platform.platform.id} className='card-platforms'>{platform.platform.name} </span>
            )
            })}
            </span>
        </div>
    </div>
        <AddButton game={props.game}/>
    </CardStyle>
  )
}

export default Card