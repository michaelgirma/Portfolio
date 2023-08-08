'use client' 
import React from "react"
import { useState, useEffect, useRef } from 'react';
import { AiOutlineLink } from 'react-icons/ai' 

const Projects:React.FC = () => {
    const [effectToggle, setEffectToggle] = useState(true);
    const [effectText, setEffectText] = useState('On');
    const [projectScrollHeight, setProjectScrollHeight] = useState('0%');
    const projectTextContainerRef = useRef<HTMLDivElement>(null);

    const toggleEffect = () => {

        setEffectToggle(!effectToggle);

        if (effectToggle === false) {
            setEffectText('On');
        } else {
            setEffectText('Off');
        }
    }

    const handleProjectScroll = () => {
        const projectTextContainer = projectTextContainerRef.current;
        if (!projectTextContainer) return;
      
        const containerHeight = projectTextContainer.clientHeight;
        const containerTop = projectTextContainer.getBoundingClientRect().top;
        const scrollPosition = Math.max(0, window.scrollY - containerTop - window.innerHeight * 1.9);

        const isContainerVisible = containerTop + containerHeight >= 0 && containerTop <= window.innerHeight;
      
        if (!isContainerVisible) {
          setProjectScrollHeight('0%');
        } else {
          const maxScroll = containerHeight * 2;
          const projectScrollPercentage = Math.min((scrollPosition / maxScroll) * 100, 100);
          setProjectScrollHeight(`${projectScrollPercentage}%`);
          console.log(projectScrollPercentage);
        }
    }
    
    useEffect(() => {

        window.addEventListener('scroll', handleProjectScroll);
        
        return () => {
            window.removeEventListener('scroll', handleProjectScroll);
        };

    }, []);

    return(
        <div id="Projects"  ref={projectTextContainerRef}>
            <div id="ProjectsContainer">
                <div id="ProjectsHeaderContainer">
                    <div id="ProjectsHeader">Projects</div>
                    <button id="ProjectsHeaderToggle" onClick={toggleEffect}>Effect: {effectText}</button>
                </div>
                <div id="ChurchContainer">
                    <div id="ChurchImageContainer">
                        <img src="DebreTsion.png" alt="" id="ChurchImage" />
                    </div>
                    <div id="ChurchTextContainer">
                        <div className="TitleContainer">
                            <p id="ChurchTitle">DebreTsion Church Website</p>
                        </div>  
                        <div className="DescriptionContainer">
                            <p id="ChurchDescription">
                                A website for Debre Tsion Church made by myself and 6 other student developers 
                                to give back to our childhood church led by senior developer Dawit Alemu. 
                                Created with Angular, Firebase, and TypeScript. I was a Front-End developer for this project and was tasked with
                                primarily working with TypeScript for animations, modals, and Lazy Loading on top of helping build the foundation of the website. 
                                I also utilized Google APIs for web scraping.
                            </p> 
                        </div>  
                        <div className="LinkContainer">
                            <div id="ReactLinkContainer">
                                <a href="https://debretsion.vercel.app/en" id="ChurchLink">Click me to visit the Website!</a>
                                <AiOutlineLink id="ReactIconLink"/>
                            </div>
                        </div>          
                    </div>
                </div>
                <div id="PreWorkContainer">
                    <div id="PreWorkImageContainer">
                        <img src="" alt="" id="PreWorkImage" />
                    </div>
                    <div id="PreWorkTextContainer">
                        <div className="TitleContainer">
                            <p id="PreWorkTitle">CreatorVerse</p>
                        </div>
                        <div className="DescriptionContainer">
                            <p id="PreWorkDescription">I made a fullstack website called CreatorVerse using React, Javascript, and Supabase. 
                            On this site you can create profiles for anybody that is online and has social media platoforms. 
                            Using CRUD operations, users can add, view, modify, or delete profiles with ease. This project was 
                            made for my Code Path class to teach me how to devleop a frontend that can interact with an API and supports CRUD operations.  
                            </p> 
                        </div>
                        <div className="LinkContainer">
                            <a href="https://prework-theta.vercel.app/" id="PreWorkLink">Click me to visit the Website!</a>
                        </div>             
                    </div>
                </div>
            </div>
            <style>{`

                :root { --projectScrollHeight: ${projectScrollHeight}; }
                
                #Projects{
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 200vh;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                    margin-top: 10%;
                }
                #ProjectsContainer{
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center; 
                    overflow: hidden;                   
                }
                #ProjectsHeaderToggle {
                    display: flex; 
                    position: absolute;
                    top: 20%;
                    right: 5%;
                    color: white;
                    background-color: black;
                    border: 1px solid white;
                }
                #ProjectsHeaderContainer{
                    display: flex;
                    position: relative;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    width: 100%;
                    height: 25%;
                    background-color: black;
                    margin-bottom: 30px;
                    background: linear-gradient(-45deg, black, black, white, black);
                    background-size: 400% 400%;
                    animation: gradient 15s ease infinite;
                }
                @keyframes gradient {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }
                #ProjectsHeader{
                    display: flex;
                    position: relative;
                    color: white;
                    font-weight: 400;
                    font-size: 60px;
                    font-family: InterBold;
                }
                #ChurchContainer{
                    display: flex;
                    position: relative;
                    width: 70%;
                    height: 20%;
                    flex-direction: row;
                    border-radius: 30px;
                    border: 5px solid white;
                    justify-content: center;
                    align-items: center;
                    left: ${effectToggle ? '50%' : '0'};
                    transform: ${effectToggle ? `translateX(calc(-0.9 * ${projectScrollHeight}))` : 'none'};
                }
                #ChurchImageContainer{
                    display: flex;
                    position: relative;
                    width: 40%;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
                }
                #ChurchImage{
                    display: flex;
                    position: relative;
                    width: 95%;
                    height: 75%;
                }
                #ChurchTextContainer{
                    display: flex;
                    position: relative;
                    width: 60%;
                    height: 100%;
                    border-radius: 30px;
                    justify-content: space-around;
                    align-items: center;
                    flex-direction: column;
                }
                #ChurchTitle{
                    color: white;
                    font-weight: 400;
                    font-size: 23px;
                    font-family: InterBold;
                }
                #ChurchDescription{
                    color: white;
                    font-family: Inter;
                    font-size: 14px;
                }
                #ChurchLink{
                    color: white;
                    text-decoration: none;
                    font-family: Inter;
                    font-size: 11px;
                }
                #ReactLinkContainer{
                    
                }
                #PreWorkContainer{
                    display: flex;
                    position: relative;
                    width: 70%;
                    height: 20%;
                    flex-direction: row;
                    border-radius: 30px;
                    border: 5px solid white;
                    justify-content: center;
                    align-items: center;
                    right: ${effectToggle ? '50%' : '0'};
                    transform: ${effectToggle ? `translateX(calc(0.9 * ${projectScrollHeight}))` : 'none'};
                }
                #PreWorkImageContainer{
                    display: flex;
                    position: relative;
                    width: 40%;
                    height: 100%;
                }
                #PreWorkImage{
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                }
                #PreWorkTextContainer{
                    display: flex;
                    position: relative;
                    width: 60%;
                    height: 100%;
                    border-radius: 30px;
                    justify-content: space-around;
                    align-items: center;
                    flex-direction: column;
                }
                #PreWorkTitle{
                    color: white;
                    font-weight: 400;
                    font-size: 23px;
                    font-family: InterBold;
                }
                #PreWorkDescription{
                    color: white;
                    font-family: Inter;
                    font-size: 14px;
                }
                #PreWorkLink{
                    color: white;
                    text-decoration: none;
                    font-family: Inter;
                    font-size: 11px;
                }
                .TitleContainer{
                    display: flex;
                    position: relative;
                    width: 90%;
                    height: 15%;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50px;
                }
                .DescriptionContainer{
                    display: flex;
                    position: relative;
                    width: 70%;
                    height: 50%;
                    border-radius: 20px;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    overflow-x: scroll;
                }
                .LinkContainer{
                    display: flex;
                    position: relative;
                    width: 35%;
                    height: 14%;
                    border-radius: 30px;
                    justify-content: center;
                    align-items: center;
                }
                .LinkContainer:hover {
                    transform: scale(1.3); 
                }
                // @media(max-width: 900px){
                //     #Projects{
                //         height: 200vh;
                //     }
                //     #ChurchContainer{
                //         flex-direction: column;
                //         width: 50%;
                //         height: 80%;
                //         justify-content: center;
                //         align-items: center;
                //     }
                //     #ChurchTextContainer{
                //         width: 90%;
                //         height: 60%;
                //     }
                //     .LinkContainer{
                //         width: 55%;
                //     }
                //     .TitleContainer{
                //         width: 100%;
                //         border: 1px solid blue;
                //     }
                //     .DescriptionContainer{
                //         width: 100%;
                //     }
                //     #PreWorkContainer{
                //         flex-direction: column;
                //         width: 50%;
                //         height: 80%;
                //         justify-content: center;
                //         align-items: center;
                //     }
                //     #PreWorkTextContainer{
                //         width: 90%;
                //         height: 60%;
                //     }
                // }
                // @media(max-width: 700px){
                //     #ChurchContainer{
                //         width: 60%;
                //     }
                //     #PreWorkContainer{
                //         width: 60%;
                //     }
                // }
            `}</style>
        </div>
    )
    
}


export default Projects