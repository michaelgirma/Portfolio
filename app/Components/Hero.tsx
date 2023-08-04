'use client' 
import React from "react"
import { useState } from "react"
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
        font-size: 80px;
        color: white;
        position: relative;
        text-align: center;
        padding-top: 350px;
        padding-right: 80px;

        @media(max-width: 1200px) {
            padding-top: 150px; 
            font-size: 40px;

        }
    `;

const Hero:React.FC = () => {

    const [animationState, setAnimationState] = useState(false);

    
    

    return(
        <>
        <div id="Hero">
            <div id="HeroContainer">
                <div id="HeroHeaderContainer" className="fade-in">
                    <div id="HeroHeader">Hello, Im Michael Girma <br/> FullStack developer <br/> Based in America</div>
                    <button onClick={() => setAnimationState(true)} id="HeroButton">CLICK ME</button>
                </div>
                <div id="HeroBodyContainer">
                    <div id="HeroRightContainer">
                        <StyledWelcome>Welcome</StyledWelcome>
                    </div>
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
                                <div id="HeroBiographyBody">Hello Im Michael Girma <br/> an upcoming FullStack developer. <br/> Passionate about creating websites. <br/> Attending the University of Maryland. I started my coding journey at the beginning of 2023 summer with a main interest in web development and with the guidance of peers I am continuing my journey.</div>
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
            }
            #HeroContainer{
                display: flex;
                position: relative;
                flex-direction: column;
                width: 100%;
                height: 100%;
                justify-content: space-between;
                align-items: center;
            }
            #HeroHeaderContainer{
                display: flex;
                position: relative;
                flex-direction: column;
                width: 100%;
                height: 15%;
                justify-content: center;
                align-items: center;
            }
            #HeroHeader{
                display: flex;
                position: relative;
                text-align: center;
                color: white;
                font-size: 40px;
                font-family: InterBold;
                margin-bottom: 50px;
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
                height: 80%;
                justify-content: space-around;
                align-items: center;
            }
            #HeroLeftContainer{
                display: flex;
                position: relative;
                flex-direction: column;
                width: 30%;
                height: 60%;
                justify-content: center;
                align-items: center;
                transform: translateX(-350%);
                overflow: hidden;
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
                height: 45%;
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
                width: 69%;
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
                display: flex;
                position: relative;
                flex-direction: column;
                width: 32%;
                height: 85%;
                justify-content: space-around;
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
                justify-content: space-around;
                align-items: center;
                overflow: hidden;
            }
            #HeroImageBorder{
                display: flex;
                position: relative;
                width: 80%;
                height: 90%;
                border-radius: 50%;
                background: linear-gradient(to bottom, white, black);
                overflow: hidden;
            }
            #HeroImage{
                overflow: hidden;
            }
            #HeroRightContainer{
                display: flex;
                position: relative;
                flex-direction: column;
                width: 32%;
                height: 85%;
                justify-content: space-between;
                align-items: center;
                overflow: hidden;
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

            @media(max-width: 1200px){
                #Hero{
                    height: 200vh;
                }
                #HeroContainer{
                    margin-top: 15%;
                }
                #HeroRightContainer{
                    width: 80%;
                    height: 60%;
                }
                #HeroLeftContainer{
                    width: 50%;
                }
                #HeroBodyContainer{
                    flex-direction: column;
                    height: 200vh;
                }
                #HeroCContainer{
                    padding-top: 30px;
                    margin-left: 330px;
                    width: 120%;
                    height: 50%;
                }
                #HeroBContainer{
                    padding-top: 30px;
                    margin-left: 330px;
                    width: 120%;
                    height: 50%;
                }
                #HeroMiddleContainer{
                    width: 500px;
                }
                #HeroImage{
                    justify-content: center;
                    align-items: center;
                }
                #HeroMiddleContainer{
                    overflow: hidden;
                }
                #HeroBiographyHeader{
                    justify-content: center;
                    text-align: center;
                }
                #HeroBiographyBodyContainer{
                    text-align: center;
                }
                #HeroContactHeader{
                    justify-content: center;
                    text-align: center;
                }
                #HeroContactBodyContainer{
                    text-align: center;
                }
                #HeroIconContainer{
                    width: 100%;
                    justify-content: center;
                    align-items: center;
                }
            }
            @media(max-width: 1200px){
                #HeroCContainer{
                    margin-left: 240px;
                }
                #HeroBContainer{
                    margin-left: 240px;
                }
            }
            @media(max-width: 550px){
                #HeroMiddleContainer{
                    width: 95%;
                    overflow: hidden;
                }
                #HeroContainer{
                    margin-top: 30%;
                }
                #HeroCContainer{
                    width: 100%;
                    height: 50%;
                    margin-left: 220px;
                }
                #HeroBContainer{
                    width: 100%;
                    height: 50%;
                    margin-left: 220px;
                }
                #HeroLeftContainer{
                    width: 100%;
                    
                }
                #HeroImageBorder{
                    padding-right: 50px;
                }
            }
            
            `}</style>
        </div>
        </>
    )
}


export default Hero