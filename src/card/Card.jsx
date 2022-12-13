import React from 'react'
import { CardStyle } from './Card.style'
import {Link} from 'react-router-dom';
import AddButton from '../components/addButton';


function Card(props) {
  return (
    <CardStyle initial={{scale:0}} transition={{delay:0.2}} whileInView={{scale:1}}>
    <img  className = 'card-img' src={props.game.background_image} />
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