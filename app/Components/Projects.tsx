'use client' 
import React from "react"
import { useState, useEffect,} from 'react';
import { AiOutlineLink } from 'react-icons/ai' 
import {MdOutlineSlowMotionVideo} from 'react-icons/md'

const Projects:React.FC = () => {

    const [animationStateSkills, setAnimationStateSkills] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 3500) {
            setAnimationStateSkills(true);
        }
    };
   
    
    useEffect(() => {

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    return(
        <div id="Projects"  >
            <div id="ProjectsContainer">
                <div id="ProjectsHeaderContainer">
                    <div id="ProjectsHeader">Projects</div>
                </div>
                <div id="ChurchContainer" className={animationStateSkills ? "animate" : ""}>
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
                            <a href="https://debretsion.vercel.app/en" className="ChurchLink">
                                <div id="ReactLinkInsideContainer">
                                    <AiOutlineLink className="ReactIconLink"/>Visit Website!
                                </div>
                            </a>
                            <a href="https://github.com/DebreTsionWeb/debretsion.org" className="ChurchLink">
                                <div id="ReactVideoDemoContainer">
                                    <MdOutlineSlowMotionVideo className="ReactIconLink"/>Video Demo!
                                </div>
                            </a>
                        </div>          
                    </div>
                </div>
                <div id="PreWorkContainer" className={animationStateSkills ? "animate" : ""}>
                    <div id="PreWorkImageContainer">
                        <img src="CreatorVerseImage.png" alt="" id="PreWorkImage" />
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
                            <a href="https://prework-theta.vercel.app/" className="ChurchLink">
                                <div id="ReactLinkInsideContainer">
                                    <AiOutlineLink className="ReactIconLink"/>Visit Website!
                                </div>
                            </a>
                            <a href="https://github.com/michaelgirma/CodePathWeb103PreWork" className="ChurchLink">
                                <div id="ReactVideoDemoContainer">
                                    <MdOutlineSlowMotionVideo className="ReactIconLink"/>Video Demo!
                                </div>
                            </a>
                        </div>             
                    </div>
                </div>
            </div>
            <style>{`
                
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
                    width: 80%;
                    height: 22%;
                    flex-direction: row;
                    border-radius: 30px;
                    border: 5px solid white;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                    opacity: 0;
                }
                .animate {
                    animation: 2s ease-out forwards;
                }
                #ChurchContainer.animate {
                    animation-name: fadeInFromLeft;
                }
                @keyframes fadeInFromLeft{
                    0% {
                      transform: translateX(-1500px);
                      opacity: 0;
                    }
                    100% {
                      transform: translateX(0);
                      opacity: 1;
                    }
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
                .ChurchLink{
                    color: white;
                    text-decoration: none;
                    font-family: Inter;
                    font-size: 14px;
                }
                .ReactIconLink{
                    width: 40px;
                    height: 40px;
                    color: white;
                }
                #ReactLinkInsideContainer{
                    display: flex;
                    positiion: relative;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                #ReactLinkInsideContainer:hover {
                    opacity: 0.5;
                }
                #ReactVideoDemoContainer{
                    display: flex;
                    positiion: relative;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                #ReactVideoDemoContainer:hover {
                    opacity: 0.5;
                }
                #PreWorkContainer{
                    display: flex;
                    position: relative;
                    width: 80%;
                    height: 22%;
                    flex-direction: row;
                    border-radius: 30px;
                    border: 5px solid white;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                    opacity: 0;
                }
                #PreWorkContainer.animate {
                    animation-name: fadeInFromRight;
                }
                @keyframes fadeInFromRight{
                    0% {
                      transform: translateX(1500px);
                      opacity: 0;
                    }
                    100% {
                      transform: translateX(0);
                      opacity: 1;
                    }
                }
                #PreWorkImageContainer{
                    display: flex;
                    position: relative;
                    width: 40%;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
                }
                #PreWorkImage{
                    display: flex;
                    position: relative;
                    width: 95%;
                    height: 75%;
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
                    overflow: scroll;
                }
                .TitleContainer{
                    display: flex;
                    position: relative;
                    width: 90%;
                    height: 10%;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50px;
                }
                .DescriptionContainer{
                    display: flex;
                    position: relative;
                    width: 90%;
                    height: 43%;
                    justify-content: center;
                    align-items: flex-start;
                    text-align: center;
                    overflow: scroll;
                }
                .LinkContainer{
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 30%;
                    border-radius: 30px;
                    justify-content: center;
                    align-items: center;
                    gap: 30px;
                }
                @media(max-width: 900px){
                    #ChurchContainer{
                        width: 50%;
                    }
                    #PreWorkContainer{
                        width: 50%;
                    }
                    #ChurchImageContainer{
                        width: 0%;
                    }
                    #PreWorkImageContainer{
                        width: 0%;
                    }
                    #ChurchTextContainer{
                        width: 100%;
                    }
                    #PreWorkTextContainer{
                        width: 100%;
                    }
                    #PreWorkImage{
                        display: none;
                    }
                    #ChurchImage{
                        display: none;
                    }
                   
                }
                @media(max-width: 700px){
                    #ChurchTitle{
                        font-size: 15px;

                    }
                    #PreWorkTitle{
                        font-size: 15px;
                    }
                }
                @media(max-width: 450px){
                    #ChurchContainer{
                        width: 90%;
                    }
                    #PreWorkContainer{
                        width: 90%;
                    }
                }
            `}</style>
        </div>
    )
    
}


export default Projects