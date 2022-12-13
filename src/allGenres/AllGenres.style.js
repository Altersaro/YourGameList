import styled from "styled-components";


export const Allgenres = styled.div`

display: grid;
grid-template-columns: 2fr 2fr 2fr; 
gap: 10px;

.genre-container{
    height: 30vh;
    background-color: #352376;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    font-size:20px;
    color: #18D935;
    text-decoration: none;
    font-family: 'Black Ops One', cursive;
}



.genre-container:hover{
    background-color: #18D935;
    color: #352376;
}

@media screen and (max-width:992px) {

    grid-template-columns: 2fr 2fr;
}

@media screen and (max-width:576px) {

grid-template-columns: 2fr;
}
`