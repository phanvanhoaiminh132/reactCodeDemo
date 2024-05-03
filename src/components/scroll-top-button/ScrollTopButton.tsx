import { useState } from "react";
import { ChevronUp } from "react-bootstrap-icons";
import "./ScrollTopButton.scss";

const ScrollTopButton = () =>{
    const [visible, setVisible] = useState(false) 
  
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
    return(
            <ChevronUp className={"scroll-top" + (visible ? " ": " hide")} onClick={scrollToTop} /> 
    )
}

export default ScrollTopButton;