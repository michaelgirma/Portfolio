'use client' 
import React from "react"
import Link from "next/link"
import { BiLogoGmail } from 'react-icons/bi'


const Contact:React.FC = () => {
    return(
        <div id="Contacts">
            <div id="ContactsContainer">
                <div id="CHeaderContainer">
                    <div id="CHeader">Contact Me</div>
                </div>
                <div id="ContactBodyContainer">
                    <Link id="ContactEmail" href='https://mail.google.com/mail?view=cm&fs=1&to=michaelgirma003@gmail.com&su=Draft' target='_blank' rel="noopener noreferrer"><BiLogoGmail className="CIcon"></BiLogoGmail></Link>
                    <Link href="https://www.linkedin.com/in/michael-girma/" target='_blank' rel="noopener noreferrer" ><img src="LinkedIn.png" className="CIcon" /></Link>
                    <Link href="https://github.com/michLinkelgirma" target='_blank' rel="noopener noreferrer"><img src='GitHubIcon.png' className="CIcon"/></Link>
                </div>              
            </div>
           

            <style>{`
            #Contacts{
                display: flex;
                position: relative;
                width: 100%;
                height: 100vh;
            }
            #ContactsContainer{
                display: flex;
                position: relative;
                flex-direction: column; 
                width: 100%;
                height: 100%;
            }
            #CHeaderContainer{
                display: flex;
                position: relative;
                justify-content: center;
                align-items: center;
                text-align: center;
                width: 100%;
                height: 35%;
                background: linear-gradient(-45deg, black, black, white, black);
                background-size: 400% 400%;
                animation: gradient 15s ease infinite;
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
            #CHeader{
                display: flex;
                position: relative;
                color: white;
                font-weight: 400;
                font-size: 60px;
                font-family: InterBold;
            }
            #ContactBodyContainer{
                display: flex;
                position: relative;
                width: 100%;
                height: 65%; 
                justify-content: center;
                align-items: center;   
                gap: 15%;
            }  
            .CIcon{
                width: 100px;
                height: 100px;
                background-color: white;
                color: red;
                border-radius: 20px;
            }  
            .CIcon:hover{
                opacity: 0.5;
                transform: scale(1.2);
            }
            @media(max-width: 450px){
                #Contacts{
                    height: 150vh;
                }
                #ContactBodyContainer{
                    flex-direction: column;
                }
                
            }
            `}</style>
        </div>
    )
    
}


export default Contact