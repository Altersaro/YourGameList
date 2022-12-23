import React from 'react';
import SignIn from "../logIn-SignIn/SignIn";


function Protected(props) {

    let Component=props.component


  return (
    <div className='col-10'>
      {
        sessionStorage.getItem('user-info')?
        <Component/> : <SignIn/>
      }
    </div>
  )
}

export default Protected