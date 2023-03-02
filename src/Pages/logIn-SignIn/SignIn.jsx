import axios from 'axios';
import React from 'react';
import { LogIn } from './Login.style';
import { useNavigate} from 'react-router-dom';
import { ClientApiContext } from '../../ClientApi';



function SignIn() {

    const {showAlert} = React.useContext(ClientApiContext)


    React.useEffect(()=>{
        if(sessionStorage.getItem('user-info')){
            navigate("/userpage")
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



    const submitForm = (e) => {
        e.preventDefault();

        const sendData = {
            username:data.username,
            name:data.name,
            surname:data.surname,
            email:data.email,
            password:data.password

        }

            axios.post(`${process.env.REACT_APP_API_URL}api/auth/register`, sendData)
                .then((result) =>{
                    showAlert('Welcome to our community, Login and Enjoy!')
                    navigate('/Login')
                }).catch((error)=>{
                    if(error.response.data.errors.username){
                        showAlert(error.response.data.errors.username[0])
                    }else{
                        showAlert(error.response.data.errors.email[0])
                    }
                })
    }

return (
    <LogIn className='col-10'>
        <h1 className='section-title'>Sorry, but it is not possible to register at the moment.Please try again later</h1>
        <a href="/" className='redirect-link'>Back to Homepage</a>
    {/* <h1 className='section-title'>Sign in</h1>
    <form action="POST" className='logIn-form' onSubmit={submitForm}>
        <label htmlFor="username" className='log-label'>Username</label>
        <input type="text" id='username' name='username' className='box' onChange={handleChange} value={data.username} required/>

        <label htmlFor="name" className='log-label'>Name</label>
        <input type="text" id='name' name='name' className='box' onChange={handleChange} value={data.name} required />

        <label htmlFor="surname" className='log-label'>Surname</label>
        <input type="text" id='surname' name='surname' className='box' onChange={handleChange} value={data.surname} required/>

        <label htmlFor="email" className='log-label'>Email</label>
        <input type="email" id='email' name='email' className='box' onChange={handleChange} value={data.email} required/>

        <label htmlFor="password" className='log-label'>Password</label>
        <input type="password" id='password' name='password' className='box' onChange={handleChange} value={data.password} required/>

        <button type='submit' className='log-button box'>Join Us</button>
    </form>
    <a href="/login" className='redirect-link'>Do you have an account? Log In!</a> */}
    </LogIn>
)
}

export default SignIn