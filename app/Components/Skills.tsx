'use client' 
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

const Skills:React.FC = () => {
    

    return(
        <>
        <div id="Skills">
            <div id="SkillsContainer">
                <div id="TechnicalSkills">
                    <div className="HeaderContainer">
                        <h1 className="Header">Technical Skills</h1>
                    </div>  
                    <div className="SkillBox">
                        <div className="SubTitleContainer">
                            <span className="SubTitle">Front-End Development</span>
                        </div> 
                        <span className="Title">React, Angular, Next.js, TypeScript, JavaScript, HTML, CSS</span>
                        <div className="SkillBar">
                            <span className="SkillPer" id="SkillPerHtml"></span>
                            <div className="ImageAContainer">
                                <div className="ImageContainer">
                                    <div className="IconContainer">
                                        <FontAwesomeIcon className="Icon" icon={faReact}/>
                                    </div>
                                    <div className="IconContainer">
                                        <FontAwesomeIcon className="Icon"  icon={faAngular} />
                                    </div>
                                    <div className="IconContainer">
                                        <FontAwesomeIcon className="Icon" icon={faJsSquare} />                                    
                                    </div>
                                    <div className="IconContainer">
                                        <FontAwesomeIcon className="Icon" icon={faHtml5} />                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="SkillBox">
                        <div className="SubTitleContainer">
                            <span className="SubTitle">Back-End Development</span>
                        </div>
                        <span className="Title">Python, Firebase, MongoDB, Supabase, Node.js, Express.js, Axios</span>
                        <div className="SkillBar">
                            <span className="SkillPer" id="SkillPerCSS"></span>
                            <div className="ImageAContainer">
                                <div className="ImageContainer">
                                    <div className="IconContainer">
                                        <FontAwesomeIcon className="Icon" icon={faPython} />
                                    </div>
                                    <div className="IconContainer">
                                            <FontAwesomeIcon className="Icon" icon={faNodeJs} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="SkillBox">
                        <div className="SubTitleContainer">
                            <span className="SubTitle">App Development</span>
                        </div>
                        <span className="Title">React Native, Expo </span>
                        <div className="SkillBar">
                            <span className="SkillPer" id="SkillPerJS"></span>
                            <div className="ImageAContainer">
                                <div className="ImageContainer">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="SkillBox">
                        <div className="SubTitleContainer">
                            <span className="SubTitle">Miscellaneous</span>
                        </div>
                        <span className="Title">Google Cloud Platform, Vercel, Bash, Git/GitHub</span>
                        <div className="SkillBar">
                            <span className="SkillPer" id="SkillPerNode"></span>
                            <div className="ImageAContainer">
                                <div className="ImageContainer">
                                    <div className="IconContainer">
                                        <FontAwesomeIcon className="Icon" icon={faGithubSquare}/>
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
                height: 120vh;
                margin: 0;
                padding: 0;
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
                justify-content: center;
                align-items: center;
            }
            #TechnicalSkills{
                display: flex;
                flex-direction: column;
                position: relative;
                width: 700px;
                height: 850px;
                margin: 0 15px;
                padding: 10px 20px;
                border: 1px solid #00FFFF;
                border-radius: 7px;
            }
            .HeaderContainer{
                text-align: center;
                background-color: #00FFFF;
                color: #343434;
                font-weight: 400;
                font-size: 14px;
                border-radius: 50px;
                margin-top: 15px;
                margin-bottom: 30px;
                padding: 0 20px 0 20px;
            }
            .SubTitleContainer{
                display: flex;
                position: relative;
                width: 100%;
                justify-content: center;
                align-items: center;
            }
            .SubTitle{
                display: flex;
                position: relative;
                width: 300px;
                height: 30px;
                justify-content: center;
                align-items: center;
                background-color: #00FFFF;
                border-radius: 20px;
                color: #343434;
                font-family: InterBold;
            }
            .SkillBox{
                display: flex;
                position: relative;
                width: 100%;
                margin: 50px 0;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            .Title{
                display: flex;
                position: relative;
                font-size: 17px;
                font-weight: 600;
                color: #00FFFF;
                justify-content: center;
                align-items: center;
            }
            .SkillBar{
                height: 8px;
                width: 100%;
                border-radius: 6px;
                margin-top: 6px;
                background: rgba(0,0,0,0.1);
            }
            .SkillPer{
                position: relative;
                display: block;
                height: 100%;
                width: 95%;
                border-radius: 6px;
                background: #00FFFF;
                animation: progress 0.4s ease-in-out forwards;
                opacity: 0;
            }
            #SkillPerHtml{
                width: 100%;
                animation-delay: 0.2s;
            }
            #SkillPerCSS{
                width: 100%;
                animation-delay: 0.4s;
            }
            #SkillPerJS{
                width: 100%;
                animation-delay: 0.6s;
            }
            #SkillPerNode{
                width: 100%;
                animation-delay: 0.8s;
            }
            #SkillPerReact{
                width: 100%;
                animation-delay: 1s;
            }
            @keyframes progress {
                0%{
                    width: 0;
                    opacity: 1;
                }

                100%{
                    opacity: 1;
                }
            }
            .ImageAContainer{
                display: flex;
                position: relative;
                width: 100%;
                height: 80px;
                justify-content: center;
                align-items: center;
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
            }
            .Icon{
                width: 80px;
                height: 80px;
                color: #00FFFF;
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
                    width: 500px;
                }
                .Title{
                    font-size: 13px;
                }
                .Icon{
                    width: 60px;
                    height: 60px;

                }
            }
            @media(max-width: 600px){
                #TechnicalSkills{
                    width: 400px;
                }
                .Title{
                    font-size: 12px;
                }
                .Icon{
                    width: 40px;
                    height: 40px;

                }
                .SubTitleContainer{
                    width: 80%;

                }
                .SubTitle{
                    font-size: 12px;
                }
            }
            `}</style>
        </div>
        </>
        )
    
    
}


export default Skills