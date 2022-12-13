import React from 'react'
import {Votes} from './Components.style'

function Vote(props) {
  return (
    props.metacritic ? <Votes
    initial={{scale:0.5}} 
    animate={{scale:1}}
    transition={{
      default:{
        duration: 1,
        ease:[0, 0.71, 0.2, 1]
      },
      scale: {
        type: "spring",
        damping: 5,
        stiffness: 100,
        restDelta: 0.001
      }
    }}
    className='details-vote'>{props.metacritic}
    </Votes> 
    :
    ""
  )
}

export default Vote