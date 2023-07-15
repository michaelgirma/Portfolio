'use client' 
import React from "react"

const Projects:React.FC = () => {
    return(
        <div id="Projects">
            <div id="ProjectsContainer">
                <div id="ChurchContainer">
                    <div id="ChurchImageContainer">
                        <img src="" alt="" id="ChurchImage" />
                    </div>
                    <div id="ChurchDescriptionContainer">
                        <p id="ChurchDescription">

                        </p>                
                    </div>
                </div>
                <div id="MisplacedContainer">
                    <div id="MisplacedImageContainer">
                        <img src="" alt="" id="MisplacedImage" />
                    </div>
                    <div id="MisplacedDescriptionContainer">
                        <p id="MisplacedDescription">

                        </p>                
                    </div>
                </div>
            </div>
            <style>{`
                #Projects{
                    display: flex;
                    position: relative; 
                    width: 100%;
                    height: 150vh; 
                }
                #ProjectsContainer{
                    width: 99%;
                    height: 150vh;
                    margin-left: auto;
                    margin-right: auto;
                    margin-top: 5px;
                }
                #ChurchContainer{

                }
                #ChurchImageContainer{

                }
                #ChurchImage{

                }
                #ChurchDescriptionContainer{

                }
                #ChurchDescription{

                }
                #MisplacedContainer{

                }
                #MisplacedImageContainer{

                }
                #MisplacedImage{

                }
                #MisplacedDescriptionContainer{

                }
                #MisplacedDescription{

                }
            `}</style>
        </div>
    )
    
}


export default Projects