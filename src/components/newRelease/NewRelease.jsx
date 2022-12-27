import React from 'react'
import Card from '../card/Card';
import { ClientApiContext } from '../../ClientApi';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import {motion} from 'framer-motion'



function NewRelease(){

    const {games} = React.useContext(ClientApiContext)

return(
<div>

    <h1 
    className='section-title'>New Release</h1>

    <motion.h3
    initial={{x:100, scale:0}}
    whileInView={{scale:1, x:0}} 
    transition={{delay:2}}
    className='section-subtitle'>Games released in the last month</motion.h3>
    
        <Splide 
            options={
            {
            type:'loop',
            arrows:true,
            pagination:false,
            width:'81vw',
            perPage:4,
            gap:'4em',
            breakpoints:{
            1300:{
                perPage:3,
            },
            992:{
                perPage:2,

            },
            768:{
                perPage:1,
            }}
            }   
            }>
        {games.map(game=>{ 
            return(
                <SplideSlide  key={game.id}>
                    <Card game={game}/>
                </SplideSlide>
                )
            })}
        </Splide>
</div>
)}

export default NewRelease