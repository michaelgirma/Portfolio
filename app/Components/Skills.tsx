'use client' 
import React from "react"

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
                        <span className="Title">HTML</span>
                        <div className="SkillBar">
                            <span className="SkillPer" id="SkillPerHtml">
                                <span className="ToolTip">95%</span>
                            </span>
                        </div>
                    </div>
                    <div className="SkillBox">
                        <span className="Title">CSS</span>
                        <div className="SkillBar">
                            <span className="SkillPer" id="SkillPerCSS">
                                <span className="ToolTip">80%</span>
                            </span>
                        </div>
                    </div>
                    <div className="SkillBox">
                        <span className="Title">JavaScript</span>
                        <div className="SkillBar">
                            <span className="SkillPer" id="SkillPerJS">
                                <span className="ToolTip">60%</span>
                            </span>
                        </div>
                    </div>
                    <div className="SkillBox">
                        <span className="Title">Node.JS</span>
                        <div className="SkillBar">
                            <span className="SkillPer" id="SkillPerNode">
                                <span className="ToolTip">40%</span>
                            </span>
                        </div>
                    </div>
                    <div className="SkillBox">
                        <span className="Title">ReactJS</span>
                        <div className="SkillBar">
                            <span className="SkillPer" id="SkillPerReact">
                                <span className="ToolTip">70%</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div id="ProfessionalSkills">
                    <div className="HeaderContainer">
                        <h1 className="Header">Professional Skills</h1>
                    </div>
                    <div className="SkillBox">
                        <span className="Title">Communication</span>
                        <div className="SkillBar">
                            <span className="SkillPer" id="SkillPerComm">
                                <span className="ToolTip">100%</span>
                            </span>
                        </div>
                    </div>
                    <div className="SkillBox">
                        <span className="Title">TeamWork</span>
                        <div className="SkillBar">
                            <span className="SkillPer" id="SkillPerTeam">
                                <span className="ToolTip">100%</span>
                            </span>
                        </div>
                    </div>
                    <div className="SkillBox">
                        <span className="Title">Leadership</span>
                        <div className="SkillBar">
                            <span className="SkillPer" id="SkillPerLeader">
                                <span className="ToolTip">100%</span>
                            </span>
                        </div>
                    </div>
                    <div className="SkillBox">
                        <span className="Title">Adaptability</span>
                        <div className="SkillBar">
                            <span className="SkillPer" id="SkillPerAdap">
                                <span className="ToolTip">80%</span>
                            </span>
                        </div>
                    </div>
                    <div className="SkillBox">
                        <span className="Title">Problem Solving</span>
                        <div className="SkillBar">
                            <span className="SkillPer" id="SkillPerProb">
                                <span className="ToolTip">95%</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            
            <style>{`
            #Skills{
                display: flex;
                position: relative;
                width: 100%;
                height: 100vh;
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                justify-content: center;
                align-items: center;
            }
            #SkillsContainer{
                display: flex;
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
                width: 500px;
                height: 500px;
                max-width: 500px;
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
            .SkillBox{
                width: 100%;
                margin: 18px 0;
            }
            .Title{
                display: block;
                font-size: 14px;
                font-weight: 600;
                color: #00FFFF;
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
                width: 95%;
                animation-delay: 0.1s;
            }
            #SkillPerCSS{
                width: 80%;
                animation-delay: 0.2s;
            }
            #SkillPerJS{
                width: 60%;
                animation-delay: 0.3s;
            }
            #SkillPerNode{
                width: 40%;
                animation-delay: 0.4s;
            }
            #SkillPerReact{
                width: 70%;
                animation-delay: 0.5s;
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
            .ToolTip{
                position: absolute;
                right: -14px;
                top: -28px;
                font-size: 9px;
                font-weight: 500;
                color: #343434;
                padding: 2px 6px;
                border-radius: 3px;
                background: #00FFFF;
                z-index: 1;
            }
            .ToolTip::before {
                position: absolute;
                left: 50%;
                bottom: -2px;
                width: 10px;
                height: 10px;
                z-index: -1;
                background-color: #00FFFF;
                transform: translateX(-50%) rotate(45deg);
            }
            #ProfessionalSkills{
                display: flex;
                flex-direction: column;
                position: relative;
                width: 500px;
                height: 500px;
                max-width: 500px;
                margin: 0 15px;
                padding: 10px 20px;
                border: 1px solid #00FFFF;
                border-radius: 7px;
            }
            #SkillPerComm{
                width: 100%;
                animation-delay: 0.1s;
            }
            #SkillPerTeam{
                width: 100%;
                animation-delay: 0.2s;
            }
            #SkillPerLeader{
                width: 100%;
                animation-delay: 0.3s;
            }
            #SkillPerAdap{
                width: 80%;
                animation-delay: 0.4s;
            }
            #SkillPerProb{
                width: 95%;
                animation-delay: 0.5s;
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
                    width: 300px;
                }
                #ProfessionalSkills{
                    width: 300px;
                }
            }
            `}</style>
        </div>
        </>
        )
    
    
}


export default Skills