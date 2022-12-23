import styled from "styled-components";


export const FormStyle = styled.form`
    display: flex;
    align-items: center;
    justify-content: end;
    
    input{
        background-color: rgba(52, 79, 115, 0.5);
        border: none;
        padding: 5px;
        border-radius: 20px;
        margin: 5px;
        width: 77%;
        color: #18D935;
    }




    .search-button{
        border: none;
        background-color: rgba(52, 79, 115, 0.5);
        border-radius: 20px;
        color: #18D935;
    }

    .search-button:hover{
        color: #352376;
        background-color: #18D935;
    }

    @media screen and (max-width:768px) {
        
    }
    

`