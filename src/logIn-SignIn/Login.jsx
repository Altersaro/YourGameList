import React from 'react'
import { LogIn } from './Login.style'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { ClientApiContext } from '../ClientApi';


function Login() {

  const {showAlert} = React.useContext(ClientApiContext);

  const [user, setUser]=React.useState({email:"", password:""})

  const navigate = useNavigate();

  const handleChange = (e)=>{
      setUser({...user, [e.target.name]: e.target.value});


  }

  async function submitForm(e) {
      e.preventDefault();

      const sendData = {
          email:user.email,
          password:user.password

      }


      let res = await axios.post('http://localhost:8000/api/login', sendData);
      if(res.data.error == 'Email or password is not matched'){
        showAlert(res.data.error);
      }else{
        sessionStorage.setItem("user-info",JSON.stringify(res))
        navigate('/userpage')
        showAlert('Welcome Back!')
      }
  }



  return (
    <LogIn className='col-10'>
      <h1 className='section-title'>Log in</h1>
      <form action="POST" className='logIn-form' onSubmit={submitForm}>

        <label htmlFor="email" className='log-label'>Email</label>
        <input type="text" id='email' name='email' className='box' onChange={handleChange} value={user.email}/>
        

        <label htmlFor="password" className='log-label'>Password</label>
        <input type="password" id='password' name='password' className='box' onChange={handleChange} value={user.password}/>


        <button type='submit'  className='log-button box' >Enjoy</button>
      </form>
      <a href="/signin" className='redirect-link'>No Profile ? Sign in and enjoy!</a>
    </LogIn>
  )
}

export default Login