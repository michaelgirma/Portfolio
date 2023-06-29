"use client" 
import React from "react"

const Hero:React.FC = () => {
    return(
        <div id="Hero">
            <div id="HeroContainer">
                
            </div>

            <style>{`
                #Hero{
                    display:flex;
                    position: relative;
                    flex-direction: column;
                    width: 100%;
                    height: 84vh;
                    // border: 1px solid black;
                }
                #HeroContainer{

                }
            `}</style>
        </div>
    )
    
}


export default Hero