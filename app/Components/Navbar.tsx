"use client" 
import React from "react"
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from 'react';

const Navbar:React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
    return(
        <div id="Navbar" className="fade-in">
            <div id="NavbarContainer">
                {windowWidth >= 700 && (
                  <div id="LogoContainer">
                    <p id="Logo">Logo</p>
                  </div>
                )}
                {window.innerWidth < 700 ? (
                  isMenuOpen ? (
                    <div id="MobileMenu">
                      <FaTimes className="icon" onClick={handleMenuToggle} />
                      <div id="MobileListContainer">
                          <p id="MobileSkills">Skills</p>
                          <p id="MobileExperience">Experience</p>
                          <p id="MobileProjects">Projects</p>
                          <p id="MobileContact">Contacts</p>
                      </div>
                    </div>
                  ) : (
                    <FaBars className="icon" onClick={handleMenuToggle} />
                  )
                ) : (
                <div id="MenuContainer">
                    <div id="MenuListContainer" className={isMenuOpen ? "open" : ""}>
                        <p id="Skills">Skills</p>
                        <p id="Experience">Experience</p>
                        <p id="Projects">Projects</p>
                        <p id="Contact">Contacts</p>
                    </div>
                </div>
                )}
            </div>
            <style>{`
               #Navbar{
                    display:flex;
                    position: relative;
                    width: 100%;
                    height: 13vh;
                    flex-direction: column;
                    background-color: #000080;
                    border-bottom-left-radius: 30px;
                    border-bottom-right-radius: 30px;
               }
               .fade-in {
                opacity: 0;
                animation-name: fadeInAnimation;
                animation-duration: 2.5s;
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
                    // border: 1px solid green;
                    
               }
               #Logo{
                    display: flex;
                    position: relative;
                    width: 100%;
                    justify-content: flex-start;
                    align-items: center;
                    font-size: 48px;
                    color: white;
                    padding-left: 35px;
                    // border: 1px solid yellow;
               }
               #MenuContainer{
                    display: flex;
                    position: relative;
                    width: 70%;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    // border: 1px solid purple;
               }
               #MenuListContainer{
                    display: flex;
                    position: relative;
                    width: 100%;
                    justify-content: space-around;
                    align-items: center;
                    padding-top: 15px;
                    color: white;
                    font-size: 18px;
                    // border: 1px solid blue;
               }
               #MenuListContainer p {
                position: relative;
              }
              
              #MenuListContainer p::after {
                content: '';
                position: absolute;
                left: 0;
                bottom: 0;
                width: 0;
                height: 3px;
                background-color: #E5FCF5;
                transition: width 0.5s ease;
              }
              
              #MenuListContainer p:hover::after {
                width: 100%;
              }
              
              .icon {
                display: flex;
                position: relative;
                justify-content: center;
                align-items: center;
                width: 30px;
                height: 30px;
                padding-top: 32px;
                color: white;
              }
              #MobileMenu{
                display:flex;
                position: absolute;
                width: 100%;
                height: 300px;
                background-color: #000080;
                border-bottom-left-radius: 30px;
                border-bottom-right-radius: 30px;
                padding-left: 20px;
              }
              #MobileListContainer{
                display: flex;
                position: relative;
                width: 100%;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                padding-top: 45px;
                padding-right: 50px;
                color: white;
                font-size: 18px;
              }
            `}</style>
        </div>
    )

}


export default Navbar