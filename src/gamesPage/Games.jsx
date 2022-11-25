
import React from 'react'
import { Gamespage } from '../gamesPage/Games.style'
import '@splidejs/splide/css';
import  Upcoming  from '../upcomingSection/Upcoming'
import NewRelease from '../newRelease/NewRelease';






function Games(){


    return(
        <Gamespage className='col-10'>
          <NewRelease/>
          <Upcoming/>
        </Gamespage>
    )
}

export default Games