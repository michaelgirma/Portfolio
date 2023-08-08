'use client' 
import React from "react"
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react"


const Navbar:React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollWidth, setScrollWidth] = useState('0%');

  
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / totalHeight) * 100;
    setScrollWidth(`${scrollPercentage}%`);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

    return(
      <>
        <div id="Navbar" className="fade-in">
            <div id="NavbarContainer">               
              <div id="MenuContainer">
                <div id="MenuListContainer" className={isMenuOpen ? "open" : ""}>
                    <p className="style" id="NavHome">Home</p>
                    <p className="style" id="NavSkills">Skills</p>
                    <p className="style" id="NavExperience">Experience</p>
                    <p className="style" id="NavProject">Projects</p>
                    <p className="style" id="NavContact">Contacts</p>
                </div>
                <div className="iconContainer" onClick={handleMenuToggle}>
                  {isMenuOpen ? (
                    <FaTimes className="icon" />
                  ) : (
                    <FaBars className="icon" />
                  )}
                </div>
              </div>
            </div>
            <div id="LineContainer">
              <div className="GrowingDiv" style={{width: scrollWidth}}></div>
            </div>
            <style>{`
               #Navbar{
                    display:flex;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 13vh;
                    flex-direction: column;
                    background-color: black;
                    z-index: 9999;
               }
               .fade-in {
                opacity: 0;
                animation-name: fadeInAnimation;
                animation-duration: 2s;
                animation-fill-mode: forwards;
               }
              
              @keyframes fadeInAnimation {
                from {
                  opacity: 0;
                }
                to {
                  opacity: 1;
                }
               }
               #NavbarContainer{
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 12vh;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: center;
               }
               #LogoContainer{
                    display: flex;
                    position: relative;
                    width: 25%;
                    height: 100%;
                    jusitfy-content: center;
                    align-items: center;
                    flex-direction: row;                    
               }
               #MenuContainer{
                    display: flex;
                    position: relative;
                    width: 70%;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
               }
               #MenuListContainer {
                display: flex;
                position: relative;
                width: 100%;
                justify-content: space-around;
                align-items: center;
                padding-top: 15px;
                color: white;
                font-size: 18px;
              }
              
              #MenuListContainer p {
                position: relative;
                border-bottom: 3px solid transparent; 
                color: white;
                padding: 5px;  
                box-sizing: border-box;
                border-radius: 30px;

              }
              
              #MenuListContainer p:hover {
                opacity: 0.5;
              }

              .iconContainer{
                display: none;
              }
              .style{
                font-family: Inter;
              }

              #LineContainer{
                display: flex;
                position: relative;
                flex-direction: column;
                width: 100%;
                height: 5px;
                justify-content: center;
                align-items: center;
                border-radius: 5px;
                background: rgba(0,0,0,0.1);
              }

              .GrowingDiv {
                height: 5px;
                background-color: white;
                transition: width 0.1s ease-out;
              }
              
              @media (max-width: 700px) {

                #Navbar{
                  height: 13vh;
                }

                #LogoContainer {
                  display: none;
                }
                
                #MenuContainer {
                  justify-content: center;
                  align-items: flex-start;
                  width: 100%;
                  height: 100%;
                  padding-bottom: 5px;
                }
                
                #MenuListContainer {
                  display: ${isMenuOpen ? 'flex' : 'none'};
                  position: absolute;
                  flex-direction: column;
                  width: 100%;
                  align-items: center;
                  padding-top: 50px;
                  padding-bottom: 50px;
                  padding-left: 10px;
                  color: white;
                  font-size: 18px;
                  background-color: black;
                  border: 1px solid white;
                  border-bottom-left-radius: 30px;
                  border-bottom-right-radius: 30px;
                  animation-name: slideDownAnimation;
                  animation-duration: 1s;
                  animation-fill-mode: forwards;
                }

                @keyframes slideDownAnimation {
                  0% {
                    transform: translateY(-100%);
                  }
                  100% {
                    transform: translateY(0%);
                  }
                }
                
                #MenuListContainer p {
                  position: relative;
                  border-bottom: 3px solid transparent; 
                }
                
                #MenuListContainer p:hover {
                  border-bottom: 3px solid #white;
                  transition: border-bottom 0.5s ease;
                }
                
                .iconContainer {
                  display: flex;
                  position: relative;
                  justify-content: center;
                  align-items: center;
                  width: 50px;
                  height: 30px;
                  margin-top: 20px;
                  padding-left: 10px;
                  color: white;
                  
                }
                .icon{
                  width: 100px;
                  height: 35px;
                }
                #LineContainer{
                  display: none;
                }
              }
              
            `}
            </style>
        </div>
        </>
        );

};


export default Navbar