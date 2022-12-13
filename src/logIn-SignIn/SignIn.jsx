import axios from 'axios';
import React from 'react';
import { LogIn } from './Login.style';
import {redirect, useNavigate} from 'react-router-dom';
import { ClientApiContext } from '../ClientApi';



function SignIn() {

    const {showAlert, refreshPage} = React.useContext(ClientApiContext)


    React.useEffect(()=>{
        if(sessionStorage.getItem('user-info')){
            navigate("/userpage")
        }else{
            getUsers()
        }

    },[])

    const [data,setData] = React.useState({
        username:"",
        name:"",
        surname:"",
        email:"",
        password:""
    })

    const navigate = useNavigate();

    const handleChange = (e)=>{
        setData({...data, [e.target.name]: e.target.value});
    }

    async function getUsers(){
        const res = await axios.get(`http://localhost:8000/api/list`);
        sessionStorage.setItem('users',JSON.stringify(res.data));
    }

    const submitForm = (e) => {
        e.preventDefault();

        const sendData = {
            username:data.username,
            name:data.name,
            surname:data.surname,
            email:data.email,
            password:data.password

        }


            const users = JSON.parse(sessionStorage.getItem('users'))
            if(users.find(e => e.email === sendData.email)){
                showAlert('Exsisting users please ritenta o log in')
                sessionStorage.removeItem('users');
                refreshPage()
            }else{
                axios.post('http://localhost:8000/api/register', sendData)
                    .then((result) =>{
                        if(result.data.Status == 'invalid'){
                            showAlert('Invalid User');
                        }else{
                        showAlert('Welcome to our community, Login and Enjoy!')
                        sessionStorage.removeItem('users');
                        navigate('/Login')
                        }
                    })
            }

    }

return (
    <LogIn className='col-10'>
    <h1 className='section-title'>Sign in</h1>
    <form action="POST" className='logIn-form' onSubmit={submitForm}>
        <label htmlFor="username" className='log-label'>Username</label>
        <input type="text" id='username' name='username' className='box' onChange={handleChange} value={data.username} required/>

        <label htmlFor="name" className='log-label'>Name</label>
        <input type="text" id='name' name='name' className='box' onChange={handleChange} value={data.name} required />

        <label htmlFor="surname" className='log-label'>Surname</label>
        <input type="text" id='surname' name='surname' className='box' onChange={handleChange} value={data.surname} required/>

        <label htmlFor="email" className='log-label'>Email</label>
        <input type="email" id='email' name='email' className='box' onChange={handleChange} value={data.email} required/>

        <label htmlFor="password" className='log-label'>Passowrd</label>
        <input type="password" id='password' name='password' className='box' onChange={handleChange} value={data.password} required/>

        <button type='submit' className='log-button box'>Join Us</button>
    </form>
    <a href="/login" className='redirect-link'>Do you have an account? Log In!</a>
    </LogIn>
)
}

export default SignIn