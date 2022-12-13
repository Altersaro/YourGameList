import styled from "styled-components";

export const LogIn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(52, 79, 115, 0.8) ;
    width: 50vw;
    border-radius: 20px;
    margin: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-35%,-50%);
    padding: 30px;

    .box{
        border-radius: 20px;
    }


    .logIn-form{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding:30px;
    }

    .log-label{
        align-self:start;
        color: #18D935;
        font-family: 'Black Ops One', cursive;
        font-size: 24px;
    }

    input{
        width: 30vw;
        border: none;
        background-color:rgba(53, 35, 118, 0.6);
        color: #18D935;
        margin-bottom: 20px;
    }

    .log-button{
        color: #18D935;
        font-family: 'Black Ops One', cursive;
        font-size: 24px;
        border: none;
        padding: 10px 30px;
        background-color: #352376;
        margin: 10px;
    }

    .log-button:hover{
        background-color: #18D935;
        color: #352376;
    }

    .redirect-link{
        color: #18D935;
    }

    .redirect-link:hover{
        color: #352376
    }

    @media screen and (max-width:768px) {

        width:60vw;

        input{
            width: 50vw;
        }
    }

    @media screen and (max-width:576px) {
        width:70vw;

    }
`