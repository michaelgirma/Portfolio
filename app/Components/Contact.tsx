'use client' 
import React from "react"

const Contact:React.FC = () => {
    return(
        <div id="Contacts">
            <div id="ContactsContainer">
                <div id="CHeaderContainer">
                    <div id="CHeader">Contact Me</div>
                </div>
                <div id="CLineContainer"></div>
                <div id="ContactBodyContainer">
                    <div id="CIconContainer">

                    </div>              
                </div>
            </div>
           

            <style>{`
            #Contacts{
                display: flex;
                position: relative;
                width: 100%;
                height: 20vh;
                
            }
            #ContactsContainer{
                display: flex;
                position: relative;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
                border-radius: 10px;
            }
            #CHeaderContainer{
                display: flex;
                position: relative;
                margin-bottom: 1%;
                justify-content: center;
                align-items: center;
                text-align: center;
                width: 90%;
                height: 71px;
                background-color: #00FFFF;
                border-radius: 50px;
                margin-bottom: 30px;
            }
            #CHeader{
                display: flex;
                position: relative;
                color: #343434;
                font-weight: 400;
                font-size: 32px;
                font-family: InterBold;
            }
            #CLineContainer{
                display: flex;
                position: relative;
                width: 100%;
                height: 0px;
                border: 2px solid #00FFFF;
            }
            #ContactBodyContainer{
                display: flex;
                position: relative;
                flex-direction: row;
                width: 100%;
                height: 90%;                
            }
            #CIconContainer{

            }      
            `}</style>
        </div>
    )
    
}


export default Contact