import React from 'react';
import { Button } from './scrollButton.style';
  
const ScrollButton = () =>{
  
  const [visible, setVisible] = React.useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <Button onClick={scrollToTop} 
    style={{display: visible ? 'inline' : 'none'}} >
     <span><i className="bi bi-arrow-up-circle-fill"></i></span>
    </Button>
  );
}
  
export default ScrollButton;