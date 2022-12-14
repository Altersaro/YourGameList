
import React from 'react'
import { Gamespage } from './Games.style'
import '@splidejs/splide/css';
import  Upcoming  from '../../components/upcomingSection/Upcoming'
import NewRelease from '../../components/newRelease/NewRelease';

import Search from '../search/Search';
import HotTitles from '../../components/hotTitles/HotTitles';



function Games(){


  let user =JSON.parse(sessionStorage.getItem('user-info'));


    return(
        <Gamespage className='col-10'>
          <div className='s-mobile'>
            {
            sessionStorage.getItem('user-info')?
            <h1 className ='section-title' >Welcome:<span className ='mobile-title'> {user.username}!</span></h1> : ''
            }
            <h2 className ='section-title'>Search your loved games</h2>
            <Search/>
          </div>
          <NewRelease/>
          <Upcoming/>
          <HotTitles/>
        </Gamespage>
    )
}

export default Games