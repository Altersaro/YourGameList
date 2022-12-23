import styled from "styled-components";
import {motion} from 'framer-motion'

export const CardStyle = styled(motion.div)`

position: relative;
height: 400px;
width: 300px ;
margin: 5px;


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
  text-decoration: none;
  color: white;
}

.card-title:hover{
  color: #18D935;
}

.card-info{
  align-self: flex-start;
  padding: 5px;
}

.card-platforms{
  font-size: 14px;
}


@media screen and (max-width:992px) {
  width:50%;
}

@media screen and (max-width:992px) {
  width:95%;
}

`