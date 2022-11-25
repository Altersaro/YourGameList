import styled from "styled-components";

export const Card = styled.div`

position: relative;
height: 400px;
width: 300px ;


.card-img{
    object-fit: cover;
    border-radius: 20px;
    width: 100%;
    height: 100%;
}


.card-info-container{
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: rgba(52, 79, 115, 0.5);
  width: 95%;
  height: 30%;
  border-radius: 20px 0px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
}

.card-title{
  margin-bottom: 5px;
  margin-top: 5px;
  font-size: 18px;
  font-weight: bold;
  display: block;
}

.card-info{
  align-self: flex-start;
  padding: 5px;
  width: 80%;
}


.add-button{
  width: 60px;
  height: 60px;
  margin-right: 5px;
  background-color: #352376 ;
  border-style: none;
  border-radius: 50px;
  color: white;
  font-size: 25px;
  position: absolute;
  bottom: 5px;
  right: 5px;
  border: 1px solid #352376;
  display: flex;
  justify-content: center;
  align-items: center;
}

.add-button:hover{
  background-color: #18D935;
  color: #352376;
}


`