import styled from "styled-components";


export const Navbar = styled.div`

background-color: #352376;
height: 100%;
position: fixed;
display: flex;
flex-direction: column;
align-items: center;
padding: 10px;


.logo{
  border-radius: 50%;
}

.nav-link, .sub-link{
  font-family: 'Black Ops One', cursive;
  font-size: 30px;
  color: #18D935;
}



.nav-link:hover, .sub-link:hover{
  color: white;
}


.sub-link{
  font-size: 20px;
  text-decoration: none;
}

.user-icon {
        display: none;
    }

.dropdown-link{
    color: #352376;
    font-family: 'Black Ops One', cursive;
}

.user-menu{
    background-color: #18D935;

}

@media screen and (max-width:992px) {

    .logo{
        width: 100px;
        height: 100px;
    }

    .nav-link, .username{
        font-size:20px;
    }

    .sub-link{
        font-size:16px;
    }
}

@media screen and (max-width:768px) {

.logo{
    width: 70px;
    height: 70px;
}

.nav-link, .username{
        font-size:16px;
    }

    .sub-link{
        font-size:14px;
    }
}

@media screen and (max-width:576px) {
    
    justify-content: center;

    .bi{
        font-size: 30px;
    }

    .user-icon{
        display: block;
    }

    .dropdown-user{
        display: none;
    }

    .genres-menu{
        display: none;
    }

}

@media screen and (max-width:400px) {

.logo{
    width: 50px;
    height: 50px;
}
}

`