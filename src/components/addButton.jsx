    import React from 'react'
    import { ClientApiContext } from '../ClientApi';
    import { Addbutton, Checkbutton } from './Components.style';
    
    function AddButton(props) {
        const {addGameToList, gamelist, deleteGameToList, location} = React.useContext(ClientApiContext); 

      return (gamelist.find(o => o.id === props.game.id))?(
        
      <Checkbutton className='check-button' onClick={()=>deleteGameToList(props.game.id)} whileHover={{scale:1.1}}><i className="bi bi-check"></i></Checkbutton>
        
      )
      :
      (
      location !=='/userpage' ? 
      <Addbutton className='add-button' onClick={()=>addGameToList(props.game)} whileHover={{scale:1.1}}><i className="bi bi-plus"></i></Addbutton> : 
      <Checkbutton className='check-button' onClick={()=>deleteGameToList(props.game.id)} whileHover={{scale:1.1}}><i className="bi bi-check"></i></Checkbutton>
      )
    }
    
    export default AddButton
    
