import { ClientApiContext } from '../../ClientApi'
import React from 'react'
import Card from '../card/Card';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import {motion} from 'framer-motion'





function HotTitles(){

    const {hotTitles} = React.useContext(ClientApiContext)

    return(
    <div>
            <h1
                className='section-title'>Hot Titles
            </h1>
            
            <motion.h3 
            initial={{x:100, scale:0}}
            whileInView={{scale:1, x:0}} 
            transition={{delay:2}}
            className='section-subtitle'>Games released in the past year with a Metacritic above 80</motion.h3>

        <Splide 
            options={
            {
                type:'loop',
                arrows:true,
                pagination:false,
                width:'81vw',
                perPage:4,
                gap:'5em',
                breakpoints:{
                1300:{
                    perPage:3,
                },
                992:{
                    perPage:2,
                },
                768:{
                    perPage:1,
                }
                }
            }
            }>
            
            {hotTitles.map(hotTitle=>{
            return(
            <SplideSlide  key={hotTitle.id}>
                <Card game={hotTitle}/>
            </SplideSlide>
        )
        })}
        </Splide>
    </div>
    )
}

export default HotTitles