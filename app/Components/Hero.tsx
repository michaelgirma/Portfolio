'use client' 
import React from "react"
import { useState, useEffect } from "react";
import styled, { keyframes } from 'styled-components'
import { BiLogoGmail } from 'react-icons/bi'

const bounce = keyframes`
        0% { transform: translate(0, 0); }
        25% { transform: translate(50px, 50px); }
        50% { transform: translate(100px, 0); }
        75% { transform: translate(50px, -50px); }
        100% { transform: translate(0, 0); }
    `;

    const StyledWelcome = styled.div`
        animation: ${bounce} 4s linear infinite;
        font-size: 60px;
        font-family: InterBold;
        color: white;
        position: relative;
        text-align: center;
        padding-top: 10%;
        padding-right: 100px;
        padding-bottom: 0px;


    `;

const Hero:React.FC = () => {

    const [animationState, setAnimationState] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 200) {
            setAnimationState(true);
        }
    };

    useEffect(() => {
        // Add scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    

    return(
        <>
        <div id="Hero">
            <div id="HeroContainer">
                <div id="HeroHeaderContainer" className="fade-in">
                    <div id="HeroHeader">Hello, Im Michael Girma <br/> An Upcoming FullStack developer </div>
                    <div id="HeroRightContainer">
                        <StyledWelcome>Welcome</StyledWelcome>
                    </div>
                </div>
                <div id="HeroBodyContainer">
                    <div id="HeroMiddleContainer" className={animationState ? "animate" : ""}>
                        <div id="HeroImageContainer">
                            <div id="HeroImageBorder">
                                <div id="HeroImage"> <img src="picture1.png"/></div>
                            </div>
                        </div>
                    </div>
                    <div id="HeroLeftContainer" className={animationState ? "animate" : ""}>
                        <div id="HeroBContainer">
                            <div id="HeroBiographyHeader">
                                <div id="HBiographyHeader">BIOGRAPHY</div>
                            </div>
                            <div id="HeroBiographyBodyContainer">
                                <div id="HeroBiographyBody">Hello Im Michael Girma an upcoming FullStack developer. I am a rising sophmore attending the University of Maryland,College Park. I started my coding journey at the beginning of 2023 summer with a main interest in web development and with the guidance of peers I am continuing my journey.</div>
                            </div>
                        </div>
                        <div id="HeroCContainer">
                            <div id="HeroContactHeader">
                                <div id="HContactHeader">CONNECT WITH ME</div>
                            </div>
                            <div id="HeroContactBodyContainer">
                                <div id="HeroContactBody"> mikegirma2014@gmail.com<br/><br/></div>
                                <br/>
                                <div id="HeroIconContainer">
                                    <a href="https://www.google.com/gmail/about/"><BiLogoGmail id="GmailIcon"></BiLogoGmail></a>
                                    <a href="https://www.linkedin.com/in/michael-girma/"><img src="LinkedIn.png" className="HeroIcon" /></a>
                                    <a href="https://github.com/michaelgirma"><img src='GitHubIcon.png' className="HeroIcon"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <style>{`
            #Hero{
                display: flex;
                position: relative;
                width: 100%;
                height: 150vh;
                margin-top: 10%;
                margin-bottom: 20%;
                overflow: hidden;
            }
            #HeroContainer{
                display: flex;
                position: relative;
                flex-direction: column;
                width: 100%;
                height: 100%;
                justify-content: space-between;
                align-items: center;
                overflow: hidden;
            }
            #HeroHeaderContainer{
                display: flex;
                position: relative;
                flex-direction: column;
                width: 100%;
                height: 40%;
                justify-content: center;
                align-items: center;
                overflow: hidden;
            }
            #HeroHeader{
                display: flex;
                position: relative;
                text-align: center;
                color: white;
                font-size: 40px;
                font-family: InterBold;
                margin-bottom: 20px;
            }
            #HeroRightContainer{
                display: flex;
                position: relative;
                flex-direction: column;
                width: 100%;
                height: 100%;
                justify-content: center;
                align-items: center;
                overflow: hidden;
                margin-bottom: 0px;
                padding-bottom: 40px;
            }
            #HeroButton{
                text-decoration: none;
                background-color: black;
                border: 1px solid white;
                color: white;
                font-family: Inter;
            }
            #HeroBodyContainer{
                display: flex;
                position: relative;
                flex-direction: row;
                width: 100%;
                height: 60%;
                justify-content: center;
                align-items: center;
                gap: 5%;
                padding-left: 30%;
                overflow: hidden;
            }
            #HeroLeftContainer{
                display: flex;
                position: relative;
                flex-direction: column;
                width: 80%;
                height: 80%;
                justify-content: space-between;
                align-items: center;
                transform: translateX(-350%);
                overflow: hidden;
                padding-top: 12%;
            }
            #HeroBContainer{
                display: flex;
                position: relative;
                flex-direction: column;
                width: 100%;
                height: 45%;
                justify-content: flex-start;
                align-items: flex-start;
            }
            #HeroBiographyHeader{
                display: flex;
                position: relative;
                width: 60%;
                height: 15%;
                justify-content: flex-start;
            }
            #HBiographyHeader{
                color: grey;
                font-family: Inter;
                font-size: 20px;
            }
            #HeroBiographyBodyContainer{
                display: flex;
                position: relative;
                width: 60%;
                height: 90%;
                text-align: left;
            }
            #HeroBiographyBody{
                color: white;
                font-family: Inter;
                font-size: 14px;
            }
            #HeroCContainer{
                display: flex;
                position: relative;
                flex-direction: column;
                width: 100%;
                height: 100%;
                justify-content: flex-start;
                align-items: flex-start;
            }
            #HeroContactHeader{
                display: flex;
                position: relative;
                width: 60%;
                height: 15%;
                justify-content: flex-start;
            }
            #HContactHeader{
                color: grey;
                font-family: Inter;
                font-size: 20px;
            }
            #HeroContactBodyContainer{
                display: flex;
                position: relative;
                flex-direction: column;
                width: 60%;
                height: 90%;
                text-align: left;
            }
            #HeroContactBody{
                color: white;
                font-family: Inter;
                font-size: 14px;
            }
            #HeroIconContainer{
                display: flex;
                position: relative;
                width: 100%;
                height: 50%;
                justify-content: space-around;
                align-items: center;
            }
            #GmailIcon{
                border-radius: 10px;
                background-color: white;
                color: red;
                font-size: 40px;
            }
            .HeroIcon{
                border-radius: 10px;
                background-color: white;
                width: 40px;
                height: 40px;
            }
            #HeroMiddleContainer{
                flex-direction: column;
                width: 50%;
                height: 80%;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                border: 1px solid white;  
                transform: translateX(-220%);
                overflow: hidden;
            }
            #HeroImageContainer{
                display: flex;
                position: relative;
                width: 100%;
                height: 100%;
                justify-content: center;
                align-items: center;
                overflow: hidden;
            }
            #HeroImageBorder{
                display: flex;
                position: relative;
                width: 85%;
                height: 90%;
                border-radius: 50%;
                background: linear-gradient(to bottom, white, black);
                overflow: hidden;
                justify-content: center;
                align-items: center;
            }
            #HeroImage{
                display: flex;
                position: relative;
                width: 100%;
                height: 100%;
                justify-content: center;
                align-items: center;
                overflow: hidden;
                padding-left: 40px;
            }
            .animate {
                animation: 2s ease-out forwards;
            }
            #HeroLeftContainer.animate {
                animation-name: fadeInFromLeft;
            }
            #HeroMiddleContainer.animate {
                animation-name: fadeInFromRight;
            }
            @keyframes fadeInFromLeft {
                0% {
                  transform: translateX(-100%);
                  opacity: 0;
                }
                100% {
                  transform: translateX(0);
                  opacity: 1;
                }
            }
            @keyframes fadeInFromRight {
                0% {
                  transform: translateX(100%);
                  opacity: 0;
                }
                100% {
                  transform: translateX(0);
                  opacity: 1;
                }
            }

            @media(max-width: 850px){
                #Hero{
                    height: 200vh;
                    margin-top: 20%;
                }
                #HeroBodyContainer{
                    height: 80%;
                    flex-direction: column;
                    padding-left: 0%;
                }
                #HeroLeftContainer{
                    gap: 5%;
                    padding-top: 0%;
                }
                #HeroBContainer{
                    justify-content: center;
                    align-items: center;
                }
                #HeroBiographyBodyContainer{
                    text-align: center;
                }
                #HeroBiographyHeader{
                    justify-content: center;
                }
                #HeroCContainer{
                    justify-content: center;
                    align-items: center;
                }
                #HeroContactHeader{
                    justify-content: center;
                    align-items: center;
                }
                #HeroContactBodyContainer{
                    text-align: center;
                }
                #HeroIconContainer{
                    width: 100%;
                    height: 40%;
                }
                #HeroMiddleContainer{
                    width: 300px;
                    height: 650px;
                }
                
            }
            @media(max-width: 401px){
                #Hero{
                    margin-top: 35%;
                }
                #HContactHeader{
                    font-size: 15px;
                }
                #HBiographyHeader{
                    font-size: 15px;
                } 
                #HeroHeader{
                    font-size: 30px;
                }
            }

            
            `}</style>
        </div>
        </>
    )
}


export default Hero