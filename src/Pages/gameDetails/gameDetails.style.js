import styled from "styled-components";


export const GamesDetails = styled.div`
    

.presentation{
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 10px;
}

.details-img-container{
position: relative;
}

.details-img{
    object-fit: cover;
    border-radius: 20px;
    width: 100%;
    height: 100%;
}


.details-info-container{
    display: flex;
    flex-direction: column;
    justify-content: end;
    font-family: 'Black Ops One', cursive;
    padding: 5px;
}

h2{
    color: #18D935;
}

.details-description-container{
    background-color: rgba(52, 79, 115, 0.6);
    padding: 5px;
    border-radius: 20px;
    margin-top: 10px;
}

.details-description{
    font-size: 18px;
}

.screenshots-container img{
    width: 40vw;
    height: 40vh;
    padding: 5px;
    border-radius: 20px;
    object-fit: cover;
}

@media screen and (max-width: 768px){
    .screenshots-container img{
    width: 80vw;
    height: 40vh;
}

@media screen and (max-width:576px) {
    .presentation{
        grid-template-columns: 1fr;
    }

    .details-img-container{
    height: 50vh;
    position: relative;
    }


    .details-info-container{
        align-items: center;
    }

    .card-platforms{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }


}

}

`