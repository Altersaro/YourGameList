import React from 'react'
import axios from "axios";
import { ClientApiContext } from '../ClientApi'
import { CompletedStyle , UnCompletedStyle } from './Components.style';


function Completed(props) {

    const{showAlert, refreshPage}  = React.useContext(ClientApiContext);


    const id = props.id
    const user_id = props.user_id

    function setCompleted(){
        showAlert('Gorgeous! You have completed this title')
        if(sessionStorage.getItem('user-info')){
            if(axios.post('https://yourgameapi.fly.dev/api/completed',{id, user_id})){
                refreshPage()
            }
        }
    }

    function setUnCompleted(){
        showAlert('What?! Then you had not completed it :(')
        if(sessionStorage.getItem('user-info')){
            if(axios.post('https://yourgameapi.fly.dev/api/uncompleted',{id, user_id})){
            refreshPage()
            }
        }
    }
    

    return(
        props.completed ? 
        <CompletedStyle onClick={() => setUnCompleted()}>Completed</CompletedStyle> : 
        <UnCompletedStyle onClick={() => setCompleted()}>Uncompleted</UnCompletedStyle>
    )
}

export default Completed