'use client' 
import React from "react"

const Skills:React.FC = () => {
    return(
        <div id="Skills">
            <div id="SkillsContainer">
                <div className="Skill">
                    <div className="Outer">
                        <div className="Inner">
                            <div id="Number">65%</div>
                        </div>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                            <linearGradient id="GradientColor">
                            <stop offset="0%" stop-color="#E5FCF5" />
                            <stop offset="100%" stop-color="#E5FCF5" />
                            </linearGradient>
                        </defs>
                        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                    </svg>

                </div> 
            </div>

            <style>{`
            #Skills{
                display: flex;
                position: relative; 
                width: 100%;
                height: 65vh;
                border-radius: 20px;
                background: #000080;
                margin-top: 10px;
            }
            #SkillsContainer{
                display: flex;
                position: relative;
                width: 100%;
                height: 100%;
                justify-content: center;
                align-items: center;
            }
            .Skill{
                position: relative;
                width: 160px;
                height: 160px;
                // background: white;
            }
            .Outer{
                display: flex;
                position: relative;
                justify-content: center;
                align-items: center;
                height: 160px;
                width: 160px;
                border-radius: 50%;
                padding: 10px;
                box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15),
                            -6px -6px 10px -1px rgba(255,255,255,0.7);
            }
            .Inner{
                display: flex;
                position: relative;
                height: 120px;
                width: 120px;
                border-radius: 50%;
                justify-content: center;
                align-items: center;
                box-shadow: inset 4px 4px 6px -1px rgba(0,0,0,0.2),
                                inset -4px -4px 6px -1px rgba(255,255,255,0.7),
                                -0.5px -0.5px 0px rgba(255,255,255,1),
                                0.5px 0.5px 0px rgba(0,0,0,0.15),
                                0px 12px 10px -10px rgba(0,0,0,0.05);
            }
            #Number{
               font-weight: 600px;
               color: #555;    
            }
            circle{
                fill: none;
                stroke: url(#GradientColor);
                stroke-width: 20px;

            }
            `}</style>
        </div>
    )
    
}


export default Skills