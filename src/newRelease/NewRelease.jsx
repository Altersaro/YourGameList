import React from 'react'
import{ Card } from '../style/Card.style';
import { ClientApiContext } from '../ClientApi';
import { Splide, SplideSlide } from '@splidejs/react-splide';

function NewRelease(){

    const {games} = React.useContext(ClientApiContext)
return(
<div>
<h1 className='section-title'>New Release</h1>
    <Splide 
        options={
        {
        type:'loop',
        arrows:true,
        pagination:false,
        width:'81vw',
        perPage:4,
        gap:'9em',
        breakpoints:{
        768:{
            perPage:2,
        }}
        }   
        }>
    {games.map(game=>{ 
        return(
    <SplideSlide  key={game.id}>
        <Card>
            <img  className = 'card-img' src={game.background_image} />
        <div className='card-info-container'>
            <div className='card-info'>
                <span className='card-title'>{game.name}</span>
                <span>{game.platforms.map(platform=>{
                return(
                <span key={platform.platform.id}>{platform.platform.name} </span>
                )
                })}
                </span>
            </div>
            <button className='add-button'><i class="bi bi-plus"></i></button>
        </div>
        </Card>
    </SplideSlide>
)
})}
    </Splide>
</div>
)}

export default NewRelease