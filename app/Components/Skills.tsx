'use client' 
import React from "react"
import { useState, useEffect } from "react";
import '@fortawesome/fontawesome-svg-core/styles.css';




const Skills:React.FC = () => {

    const [animationStateSkills, setAnimationStateSkills] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 1000) {
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
        <>
        <div id="Skills" >
            <div id="SkillsContainer">
                <div id="BigHeaderContainer" >
                    <h1 id="BigHeader">Technical Skills</h1>
                </div> 
                <div id="TechnicalSkills" className={animationStateSkills ? "animate" : ""}>
                    <div className="SkillBox">
                        <div className="SubTitleContainer">
                            <span className="SubTitle">Front-End Development</span>
                        </div> 
                        <div className="Title">React, Angular, Next.js, TypeScript, JavaScript, HTML, CSS</div>
                        <div className="SkillBar">
                            <div className="ImageAContainer">
                                <div className="ImageContainer">
                                    <div className="IconContainer">
                                        <img src='ReactIcon.png' className="Icon"/>
                                    </div>
                                    <div className="IconContainer">
                                        <img src='AngularIcon.png' className="Icon"/>
                                    </div>
                                    <div className="IconContainer">
                                        <img src='NextJsIcon.png' className="Icon"/>
                                    </div>
                                    <div className="IconContainer">
                                        <img src='TypeScriptIcon.png' className="Icon"/>
                                    </div>
                                    <div className="IconContainer">
                                        <img src='JavascriptIcon.png' className="Icon"/>
                                    </div>
                                    <div className="IconContainer">
                                        <img src='HtmlIcon.png' className="Icon"/>
                                    </div>
                                    <div className="IconContainer">
                                        <img src='CssIcon.png' className="Icon"/>
                                    </div>
                                </div>
                            </div>
                            <span className="SkillPer" id="SkillPerCSS"></span>
                        </div>
                    </div>
                    <div className="SkillBox">
                        <div className="SubTitleContainer">
                            <span className="SubTitle">Back-End Development</span>
                        </div>
                        <div className="Title">Python, Firebase, Supabase, Node.js</div>
                        <div className="SkillBar">
                            <div className="ImageAContainer">
                                <div className="ImageContainer">
                                    <div className="IconContainer">
                                        <img src='PythonIcon.png' className="Icon"/>
                                    </div>
                                    <div className="IconContainer">
                                        <img src='FirebaseIcon.png' className="Icon"/>
                                    </div>
                                    <div className="IconContainer">
                                        <img src='SupabaseIcon.png' className="Icon"/>
                                    </div>
                                    <div className="IconContainer">
                                        <img src='NodeJsIcon.png' className="Icon"/>
                                    </div>
                                </div>
                            </div>
                            <span className="SkillPer" id="SkillPerCSS"></span>
                        </div>
                    </div>
                    <div className="SkillBox">
                        <div className="SubTitleContainer">
                            <span className="SubTitle">Miscellaneous</span>
                        </div>
                        <div className="Title">Google Cloud Platform, Vercel, Bash, Git/GitHub</div>
                        <div className="SkillBar">
                            <div className="ImageAContainer">
                                <div className="ImageContainer">
                                    <div className="IconContainer">
                                        <img src='GcIcon.png' className="Icon" id="GoogleCloud"/>
                                    </div>
                                    <div className="IconContainer">
                                        <img src='VercelIcon.png' className="Icon"/>
                                    </div>
                                    <div className="IconContainer">
                                        <img src='BashIcon.png' className="Icon"/>
                                    </div>
                                    <div className="IconContainer">
                                        <a href="https://github.com/michaelgirma"><img src='GitHubIcon.png' className="Icon"/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            
            <style>{`
            #Skills{
                display: flex;
                position: relative;
                width: 100%;
                height: 150vh;
                box-sizing: border-box;
                justify-content: center;
                align-items: center;
            }
            #SkillsContainer{
                display: flex;
                flex-direction: column;
                position: relative;
                width: 100%;
                height: 100%;
                justify-content: space-around;
                align-items: center;
            }
            .animate {
                animation: 2s ease-out forwards;
            }
            #TechnicalSkills.animate {
                animation-name: fadeInFromLeft;
            }
            @keyframes fadeInFromLeft{
                0% {
                  transform: translateX(-200%);
                  opacity: 0;
                }
                100% {
                  transform: translateX(0);
                  opacity: 1;
                }
            }
            #TechnicalSkills{
                display: flex;
                flex-direction: column;
                position: relative;
                width: 80%;
                height: 70%;
                border-radius: 30px;
                padding-bottom: 30px;
                background-color: black;
                justify-content: space-around;
                align-items: center;
                overflow: hidden;
                opacity: 0;
            }
            #BigHeaderContainer{
                display: flex;
                position: relative;
                justify-content: center;
                align-items: center;
                text-align: center;
                width: 100%;
                height: 35%;
                color: white;
                font-size: 14px;
                background: linear-gradient(-45deg, black, black, white, black);
                background-size: 400% 400%;
                animation: gradient 15s ease infinite;
            }
            #BigHeader{
                display: flex;
                position: relative;
                font-size: 60px;
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
            .SubTitleContainer{
                display: flex;
                position: relative;
                width: 100%;
                justify-content: space-around;
                align-items: center;
                margin-bottom: 30px;
            }
            .SubTitle{
                display: flex;
                position: relative;
                width: 100%;
                height: 30px;
                justify-content: center;
                align-items: center;
                background-color: black;
                border-radius: 20px;
                color: white;
                font-family: InterSemi;
                font-size: 40px;
            }
            .SkillBox{
                display: flex;
                position: relative;
                width: 100%;
                justify-content: space-around;
                align-items: center;
                flex-direction: column;
            }
            .Title{
                display: flex;
                position: relative;
                font-size: 19px;
                font-weight: 600;
                color: black;
                justify-content: space-around;
                align-items: center;
                font-family: Inter;
                color: white;
            }
            .SkillBar{
                height: 8px;
                width: 100%;
            }
            .SkillPer{
                position: relative;
                display: block;
                height: 50%;
                width: 50%;
                background: black;
                margin-top: 2%;
            }
            #SkillPerHtml{
                width: 100%;
            }
            #SkillPerCSS{
                width: 100%;
            }
            #SkillPerJS{
                width: 100%;           
            }
            #SkillPerNode{
                width: 100%;
            }
            .ImageAContainer{
                display: flex;
                position: relative;
                width: 100%;
                height: 80px;
                justify-content: center;
                align-items: center;
                margin-bottom: 30px;
            }
            .ImageContainer{
                display: flex;
                position: relative;
                width: 80%;
                height: 80px;
                margin-top: 10px;
                justify-content: space-around;
            }
            .IconContainer{
                display: flex;
                position: relative;
                justify-content: center;
                align-items: center;
            }
            .Icon{
                width: 50px;
                height: 50px;
                color: #00FFFF;
                transition: transform 0.3s;
            }
            .Icon:hover {
                transform: scale(1.2); 
            }
            #GoogleCloud{
            }
            #SmallHeaderContainer{
                display: none;
            }
            #SmallHeader{
                display: none;
            }
            @media(max-width: 900px){
                .Title{
                    font-size: 12px;
                }
            }
            @media (max-width: 700px){
                #Skills{
                    height: 150vh;
                }
                #SkillsContainer{
                    flex-direction: column;
                    justify-content: space-around;
                }
                #TechnicalSkills{
                    width: 90%;
                    height: 50%;
                }
                .Title{
                    font-size: 13px;
                }
                .Icon{
                    width: 40px;
                    height: 40px;

                }
                .ImageContainer{
                    align-items: center;
                }
                #GoogleCloud{
                    width: 100%;
                }
                .SubTitle{
                    font-size: 22px;
                }
            }
            @media(max-width: 450px){
                #Skills{
                }
                #TechnicalSkills{
                    height: 50%;
                }
                .Title{
                    font-size: 12px;
                }
                .Icon{
                    width: 30px;
                    height: 30px;
                }
                .SubTitleContainer{
                    width: 80%;

                }
                .SubTitle{
                    font-size: 15px;
                }
                .ImageContainer{
                    align-items: center;
                }
            }
            `}</style>
        </div>
        </>
        )
    
    
}


export default Skills