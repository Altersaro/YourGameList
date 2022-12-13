import React from 'react';
import {ClientApiContext} from '../ClientApi'
import {NavLink, Link, useNavigate} from 'react-router-dom'
import {Navbar} from './Sidebar.style'
import Search from '../search/Search'




function Sidebar() {

    const {genres} = React.useContext(ClientApiContext);

    const navigate = useNavigate();

    let user =JSON.parse(sessionStorage.getItem('user-info'));

    function logOut(){
        sessionStorage.clear();
        navigate('/')
    }


return (
        <div className="col-2 px-0">
            <Navbar className="col-2   min-vh-100 sticky sidebar">
                <img src="logo.png" alt="" className="logo" />

                <div className='s-desktop' id='searchBar'><Search/></div>

                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <a href="/" className="nav-link align-middle px-0">
                            <i className=" bi bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="/Genres"  className="nav-link px-0 align-middle">
                            <i className="bi bi-joystick"></i> <span className="ms-1 d-none d-sm-inline">Genres</span>
                        </a>
                        <ul className="dropdown nav flex-column ms-1 genres-menu"  data-bs-parent="#menu">
                            {genres.map(genre=>{
                                return(
                                <NavLink className="w-100   sub-link  px-0" to={`${'/Genres/' +genre.slug}`} key={genre.id}>
                                    <span className="d-none d-sm-inline">{genre.name}</span>
                                </NavLink>
                                )
                            })}
                                <Link  className=" d-sm-inline w-100 sub-link px-0" to={'/Genres'}>All Genres</Link>
                        </ul>
                    </li>

                    {/* usericon */}
                    <li className="nav-item">
                        <a href={sessionStorage.getItem('user-info') ? "/userpage" : "/login"} className="nav-link align-middle  user-icon">
                            <i className=" bi bi-person"></i> <span className=" d-none d-sm-inline"></span>
                        </a>
                    </li>

                    {/* searchicon */}
                    <li className="nav-item">
                            <a href='/' className="nav-link align-middle  user-icon">
                                <i className=" bi bi-search"></i> <span className=" d-none d-sm-inline"></span>
                            </a>
                    </li>

                    {/* Logouticon */}
                    {
                    sessionStorage.getItem('user-info') ?

                    <li className="nav-item">
                            <a href='/' className="nav-link align-middle  user-icon"  onClick={logOut}>
                                <i className=" bi bi-box-arrow-in-left"></i> <span className=" d-none d-sm-inline"></span>
                            </a>
                    </li>
                    :
                    ''
                    }

                </ul>

                <div className="dropdown pb-4 dropdown-user">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="d-none d-sm-inline mx-1 sub-link">
                        {
                            sessionStorage.getItem('user-info') ?
                            <>
                                {user.data.username}
                            </>
                            :
                            <>
                            <span>Sign in/Log in</span>
                            </>
                        }
                        </span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark shadow user-menu ">
                        
                        {
                            sessionStorage.getItem('user-info') ?
                            <>
                                <li><a className="dropdown-item dropdown-link" href="/userpage">My List</a></li>
                                <li><a className="dropdown-item dropdown-link" href="/" onClick={logOut}>Sign out</a></li>
                            </>
                            :
                            <>
                            <Link className="dropdown-item dropdown-link" to={'/login'}>Log in </Link>
                            <Link className="dropdown-item dropdown-link" to={'/signin'}>Sign in </Link>
                            </>
                        }
                        
                    </ul>
                </div>
            </Navbar>
        </div>
  )
}

export default Sidebar