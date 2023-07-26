'use client' 
import React from "react"

const Projects:React.FC = () => {
    return(
        <div id="Projects" className="fade-in">
            <div id="ProjectsContainer">
                <div id="ProjectsHeaderContainer">
                    <div id="ProjectsHeader">Projects</div>
                </div>
                <div id="ChurchContainer">
                    <div id="ChurchImageContainer">
                        <img src="Church.png" alt="" id="ChurchImage" />
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
                            <a href="https://debretsion.vercel.app/en" id="ChurchLink">Click me to visit the Website!</a>
                        </div>          
                    </div>
                </div>
                <div id="PreWorkContainer">
                    <div id="PreWorkImageContainer">
                        <img src="CreatorVerse.png" alt="" id="PreWorkImage"/>
                    </div>
                    <div id="PreWorkTextContainer">
                        <div className="TitleContainer">
                            <p id="PreWorkTitle">CreatorVerse</p>
                        </div>
                        <div className="DescriptionContainer">
                            <p id="PreWorkDescription"></p> 
                        </div>
                        <div className="LinkContainer">
                            <a href="https://prework-theta.vercel.app/" id="PreWorkLink">Click me to visit the Website!</a>
                        </div>             
                    </div>
                </div>
            </div>
            <style>{`
                #Projects{
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 150vh;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                    margin-top: 10%;
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
                    width: 90%;
                    height: 71px;
                    background-color: #00FFFF;
                    border-radius: 50px;
                    margin-bottom: 30px;
                }
                #ProjectsHeader{
                    display: flex;
                    position: relative;
                    color: #343434;
                    font-weight: 400;
                    font-size: 32px;
                    font-family: InterBold;
                }
                #ChurchContainer{
                    display: flex;
                    position: relative;
                    width: 80%;
                    height: 30%;
                    flex-direction: row;
                    border-radius: 30px;
                    border: 5px solid #00FFFF;
                }
                #ChurchImageContainer{
                    display: flex;
                    position: relative;
                    width: 40%;
                    height: 100%;
                    border-radius: 30px;
                }
                #ChurchImage{
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    border-radius: 30px;
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
                    color: #343434;
                    font-weight: 400;
                    font-size: 23px;
                    font-family: InterBold;
                }
                #ChurchDescription{
                    color: #00FFFF;
                }
                #ChurchLink{
                    color: #00FFFF;
                    text-decoration: none;
                }
                #PreWorkContainer{
                    display: flex;
                    position: relative;
                    width: 80%;
                    height: 30%;
                    flex-direction: row;
                    border-radius: 30px;
                    border: 5px solid #00FFFF;
                }
                #PreWorkImageContainer{
                    display: flex;
                    position: relative;
                    width: 40%;
                    height: 100%;
                    border-radius: 30px;
                }
                #PreWorkImage{
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    border-radius: 30px;
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
                    color: #343434;
                    font-weight: 400;
                    font-size: 23px;
                    font-family: InterBold;
                }
                #PreWorkDescription{

                }
                #PreWorkLink{
                    color: #00FFFF;
                    text-decoration: none;
                }
                .TitleContainer{
                    display: flex;
                    position: relative;
                    width: 90%;
                    height: 15%;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50px;
                    background-color: #00FFFF;
                }
                .DescriptionContainer{
                    display: flex;
                    position: relative;
                    width: 70%;
                    height: 50%;
                    border: 1px solid #00FFFF;
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
                    border: 1px solid #00FFFF;
                    border-radius: 30px;
                    justify-content: center;
                    align-items: center;
                }
                .LinkContainer:hover {
                    transform: scale(1.3); 
                }
            `}</style>
        </div>
    )
    
}


export default Projects