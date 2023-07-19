'use client' 
import React from "react"
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react"


const Navbar:React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  

    return(
      <>
        <div id="Navbar" className="fade-in">
            <div id="NavbarContainer">
              <div id="LogoContainer">
                <p id="Logo">Logo</p>
              </div>                
              <div id="MenuContainer">
                <div id="MenuListContainer" className={isMenuOpen ? "open" : ""}>
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
            <div id="LineContainer"></div>
            <style>{`
               #Navbar{
                    display:flex;
                    position: relative;
                    width: 100%;
                    height: 13vh;
                    flex-direction: column;
                    background-color: #343434;
                    border-bottom-left-radius: 30px;
                    border-bottom-right-radius: 30px;
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
               #Logo{
                    display: flex;
                    position: relative;
                    width: 100%;
                    justify-content: flex-start;
                    align-items: center;
                    font-size: 48px;
                    color: #00FFFF;
                    padding-left: 35px;
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
                color: #00FFFF;

              }
              
              #MenuListContainer p:hover {
                border-bottom: 2px solid #00FFFF;
                transition: border-bottom 0.3s ;
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
                border: 1px solid #00FFFF;
                width: 100%;
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
                  margin-top: 0px;
                  color: white;
                  font-size: 18px;
                  background-color: #343434;
                  border: 1px solid #00FFFF;
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
                  border-bottom: 3px solid #00FFFF;
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
                  color: #00FFFF;
                  
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