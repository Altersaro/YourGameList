import { ClientApiContext } from '../ClientApi'
import React from 'react'
import{ Card } from '../style/Card.style'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';







function Upcoming(){

    const {upcoming} = React.useContext(ClientApiContext)

    return(
        <div>
            <h1 className='section-title'>Upcoming Games</h1>
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
                }
                }
            }
            }>
            
            {upcoming.map(upcoming=>{
            return(
            <SplideSlide  key={upcoming.id}>
            <Card>
                    <img  className = 'card-img' src={upcoming.background_image} />
                <div className='card-info-container'>
                    <div className='card-info'>
                        <span className='card-title'>{upcoming.name}</span>
                        <span>{upcoming.platforms.map(platform=>{
                        return(
                            <span key={platform.platform.id}>{platform.platform.name} </span>
                        )
                    })}</span>
                    </div>
                    <button className='add-button'><i class="bi bi-plus"></i></button>
                </div>
            </Card>
            </SplideSlide>
        )
    
        })}
        </Splide>
        </div>
    )
}

export default Upcoming