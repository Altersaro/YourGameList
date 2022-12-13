import styled from "styled-components";
import {motion} from 'framer-motion'

export const Addbutton = styled(motion.button)`
    width: 60px;
    height: 60px;
    margin-right: 5px;
    background-color: #352376 ;
    border-style: none;
    border-radius: 50px; 
    color: white;
    font-size: 25px;
    position: absolute;
    top: 5px;
    right: 5px;
    border: 1px solid #352376;
    display: flex;
    justify-content: center;
    align-items: center;


    :hover{
    background-color: #18D935;
    color: #352376;
    }
`

export const Checkbutton = styled(motion.button)`
    width: 60px;
    height: 60px;
    margin-right: 5px;
    border-style: none;
    border-radius: 50px;
    color: white;
    font-size: 25px;
    position: absolute;
    top: 5px;
    right: 5px;
    border: 1px solid #352376;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #18D935;
    border: none;
    color: #352376;

    :hover{
    background-color: #352376;
    color: #18D935;
}
`
export const Popups = styled(motion.div)`
    position: fixed;
    left: 45%;
    width: 20vw;
    height: 20vh;
    transform: translate(-50%,-50%);
    background-color: rgba(53, 35, 118, 0.5) ;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0px 0px 20px 20px ;
    color: #18D935;
    font-family: 'Black Ops One', cursive;




    @media screen and (max-width: 992px) {
        width: 50vw;
        height: 10vw;
    }



    @media screen and (max-width: 768px) {
        height: 30vw;
        left: 35%;
    }
`

export const Votes = styled(motion.span)`
    position: absolute;
    bottom: 5px;
    right: 5px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #352376;
    font-family: 'Black Ops One', cursive;
    color: #18D935;
    border-radius: 20px;
    font-size: 30px;
`
export const CompletedStyle = styled(motion.button)`
    font-family: 'Black Ops One', cursive; 
    margin-right: 5px;
    border-style: none;
    border-radius: 20px;
    color: white;
    font-size: 16px;
    position: absolute;
    bottom: 10px;
    right: 5px;
    border: 1px solid #352376;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #18D935;
    border: none;
    color: #352376;
`
export const UnCompletedStyle = styled(motion.button)`
    font-family: 'Black Ops One', cursive; 
    margin-right: 5px;
    border-style: none;
    border-radius: 20px;
    color: white;
    font-size: 16px;
    position: absolute;
    bottom: 10px;
    right: 5px;
    border: 1px solid #352376;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #352376;
    border: none;
    color: #18D935;
`