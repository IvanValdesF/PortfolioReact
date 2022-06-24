import './Header.css'
import logo from '../icons/logo.svg'
import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Dropdown = () => {
    const [windowWidth,setWindowWidth] = useState(window.innerWidth)
    const [widthClass,setWidthClass] = useState(false)

    useEffect(() => {
        window.addEventListener("resize", function(){

            setWindowWidth(this.window.innerWidth);  

            if(windowWidth < 900){
                setWidthClass(false) 
            }else{
                setWidthClass(true) 
            }
            
           
            
      },[]);    
    });

    return (
        <div className='dropdown'>
            <button onClick={()=>setWidthClass(!widthClass)} className='dropIcon'><FontAwesomeIcon size="2x" icon={faBars} /></button>
            <div className={widthClass ? 'drop' : 'navbar'}>
                <div className={widthClass ? 'element' : 'hidden'}>
                        <a onClick={()=>setWidthClass(!widthClass)} href="#landing">Home</a>

                        <a onClick={()=>setWidthClass(!widthClass)} href="#about">About Me</a>
                    
                        <a onClick={()=>setWidthClass(!widthClass)} href="#work">My Work</a>
                    
                        <a onClick={()=>setWidthClass(!widthClass)} href="#contact">Contact</a>
                    
                        
                    
                
                </div>
            </div>
            
        </div>
        
        
    );
  };

function Header(){
    const nav = useRef();
    const [scrollState,setScrollState] = useState("header")
    const [scrollYValue,setScrollYValue] = useState(0)
    
    const [windowWidth,setWindowWidth] = useState(window.innerWidth)
    const [widthClass,setWidthClass] = useState("drop")

    useEffect(() => {
        window.addEventListener("resize", function(){

            setWindowWidth(this.window.innerWidth);  

            if(windowWidth < 900){
                setWidthClass("drop") 
            }else{
                setWidthClass("navbar") 
            }
            
            
            
      },[]);    
    });
    

    useEffect(() => {
        window.addEventListener("scroll", function(){

            if(this.window.scrollY > scrollYValue){
                setScrollState("sticky") 
            }else{
                setScrollState("header") 
            }
            setScrollYValue(this.window.scrollY)
      },[]);

    
        
    });


    



    return(
        <header ref={nav} className={scrollState}>
            <div className='logo'>
                <a href="#landing"><img src={logo} alt="logo"/></a>
            </div>
            {windowWidth < 800 ? <Dropdown className='comp'/>:<div className="sections">
                <ul>
                    <li>
                        <a href="#about">About Me</a>
                    </li>
                    <li>
                        <a href="#work">My Work</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                    
                    <li>
                        
                    </li>
                    
                </ul>
            </div> }
        </header>
    )
}


export default Header;