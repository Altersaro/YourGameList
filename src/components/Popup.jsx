import React from 'react'
import {Popups} from './Components.style'




function Popup(props) {

  return (props.trigger) ? (
    <Popups initial={{scale:0}} transition={{delay:0.2}} whileInView={{scale:1}} className='popup'>
            <h3>{props.text}</h3>
    </Popups>
  ):"";
}

export default Popup