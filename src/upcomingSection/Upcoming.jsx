import { ClientApiContext } from '../ClientApi'
import React from 'react'
import Card from '../card/Card';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import {motion} from 'framer-motion'




function Upcoming(){

    const {upcoming} = React.useContext(ClientApiContext)

    return(
    <div>
        <motion.h1 
            initial={{x:100, scale:0}}
            whileInView={{scale:1, x:0}} 
            transition={{delay:1}}
            className='section-title'>Upcoming Games </motion.h1>

        <motion.h3
            initial={{x:100, scale:0}}
            whileInView={{scale:1, x:0}} 
            transition={{delay:2}}
            className='section-subtitle'>Games to be released within a year</motion.h3>

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
            
            {upcoming.map(upcoming=>{
            return(
            <SplideSlide  key={upcoming.id}>
                <Card game={upcoming}/>
            </SplideSlide>
        )
        })}
        </Splide>
    </div>
    )
}

export default Upcoming