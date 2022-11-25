import React from 'react';
import {ClientApiContext} from './ClientApi'
import {NavLink} from 'react-router-dom'




function Navbar() {

    const {genres} = React.useContext(ClientApiContext)

    
   
  return (
        <div className="col-2 px-0">
            <div className="col-2   min-vh-100 sticky sidebar">
                <img src="logo.png" alt="" className="logo" />
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
                        <a href="/" class="nav-link align-middle px-0">
                            <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="bi bi-controller"></i> <span class="ms-1 d-none d-sm-inline">Novelty</span> </a>
                        <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li class="w-100">
                                <a href="#" class="nav-link sub-link px-0"> <span class="d-none d-sm-inline">New Release</span></a>
                            </li>
                            <li>
                                <a href="#" class="nav-link sub-link px-0"> <span class="d-none d-sm-inline">Hot titles</span></a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                            <i class="bi bi-joystick"></i> <span class="ms-1 d-none d-sm-inline">Geners</span></a>
                        <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                            {genres.map(genre=>{
                                return(
                                <NavLink className="w-100   sub-link  px-0" to={`${genre.name}`} key={genre.id}>
                                    <span class="d-none d-sm-inline">{genre.name}</span>
                                </NavLink>
                                )
                            })}
                        </ul>
                    </li>
                </ul>
                <div class="dropdown pb-4">
                    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="d-none d-sm-inline mx-1">loser</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a class="dropdown-item" href="#">New project...</a></li>
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li>
                        </li>
                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default Navbar