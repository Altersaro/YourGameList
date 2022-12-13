import styled from 'styled-components';

  
export const Button = styled.div`
   position: fixed; 
   width: 100%;
   left: 95%;
   bottom: 50px;
   height: 30px;
   font-size: 3rem;
   z-index: 1;
   cursor: pointer;
   color: #18D935;


   @media(max-width:992px){
      left: 90%;
   }


   @media(max-width:768px){
    left: 80%;
   }
`