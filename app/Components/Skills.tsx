'use client' 
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import {BiLogoTypescript} from 'react-icons/bi'
import {TbBrandNextjs} from 'react-icons/tb'
import {BsFiletypeCss} from 'react-icons/bs'
import {BiLogoFirebase} from 'react-icons/bi'
import {BiLogoMongodb} from 'react-icons/bi'
import {RiSupabaseFill} from 'react-icons/ri'
import {SiAxios} from 'react-icons/si'
import {SiVercel} from 'react-icons/si'
import '@fortawesome/fontawesome-svg-core/styles.css';




const Skills:React.FC = () => {

    return(
        <>
        <div id="Skills" className="fade-in">
            <div id="SkillsContainer">
                <div className="HeaderContainer">
                    <h1 className="Header">Technical Skills</h1>
                </div>  
                <div id="TechnicalSkills">
                    {/* <div className="HeaderContainer">
                        <h1 className="Header">Technical Skills</h1>
                    </div>   */}
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
                                        <img src='PythonIcon.png' className="Icon"/>
                                    </div>
                                    <div className="IconContainer">
                                        <img src='FirebaseIcon.png' className="Icon"/>
                                    </div>
                                    <div className="IconContainer">
                                        <img src='MongoDbIcon.png' className="Icon"/>
                                    </div>
                                    <div className="IconContainer">
                                        <img src='SupabaseIcon.png' className="Icon"/>
                                    </div>
                                    <div className="IconContainer">
                                        <img src='NodeJsIcon.png' className="Icon"/>
                                    </div>
                                    <div className="IconContainer">
                                        <img src='AxiosIcon.png' className="Icon"/>
                                    </div>
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
                                        <img src='GcIcon.png' className="Icon" id="GoogleCloud"/>
                                    </div>
                                    <div className="IconContainer">
                                        <img src='VercelIcon.png' className="Icon"/>
                                    </div>
                                    <div className="IconContainer">
                                        <img src='BashIcon.png' className="Icon"/>
                                    </div>
                                    <div className="IconContainer">
                                        <img src='GitHubIcon.png' className="Icon"/>
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
                margin-top: 60px;
                box-sizing: border-box;
                justify-content: center;
                align-items: center;
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
                width: 80%;
                height: 70%;
                border: 1px solid #00FFFF;
                border-radius: 7px;
            }
            .HeaderContainer{
                display: flex;
                position: relative;
                justify-content: center;
                align-items: center;
                text-align: center;
                width: 90%;
                margin-left: auto;
                margin-right: auto;
                background-color: #00FFFF;
                color: #343434;
                font-weight: 400;
                font-size: 14px;
                border-radius: 50px;
                margin-bottom: 30px;
            }
            .Header{
                display: flex;
                position: relative;
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
                font-family: Inter;
            }
            .SkillBar{
                height: 8px;
                width: 100%;
                margin-top: 6px;
                background: rgba(0,0,0,0.1);
            }
            .SkillPer{
                position: relative;
                display: block;
                height: 50%;
                width: 50%;
                background: #00FFFF;
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
                width: 80px;
                height: 80px;
                color: #00FFFF;
                transition: transform 0.3s;
            }
            .Icon:hover {
                transform: scale(1.2); 
            }
            #GoogleCloud{
                width: 140px;

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
                    width: 50px;
                    height: 50px;

                }
                .ImageContainer{
                    align-items: center;
                }
                #GoogleCloud{
                    width: 100%;
                }
            }
            @media(max-width: 600px){
                #TechnicalSkills{
                    height: 50%;
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