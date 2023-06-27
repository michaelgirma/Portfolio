"use client" 
import React from "react"

const Hero:React.FC = () => {
    return(
        <div id="Hero">

            <style>{`
                #Hero{
                    display:flex;
                    position: relative;
                    flex-direction: column;
                    border: 1px solid red;
                }
            `}</style>
        </div>
    )
    
}


export default Hero