'use client' 
import React from "react"

const Hero:React.FC = () => {

    const Animation = () => {
        return (
          <div id="arrow-container">
            <div id="arrow"></div>
          </div>
        );
      };

    return(
        <div id="Hero" className="hello-world">
            <div id="HeroContainer">
                <div id="TextContainer">
                    <div id="NameContainer">
                        <h1 id="Name">Hello, I&aposm Michael</h1>
                    </div>
                    <div id="DescriptionContainer">
                        <p id="Description">I&aposm a FullStack devloper who is currently enrolled at the University of Maryland, College Park.</p>
                    </div>
                    <div id="ArrowContainer">
                        <Animation/>
                    </div>
                </div>
                <div id="ImageContainer">
                    <img src="https://camo.githubusercontent.com/c1dcb74cc1c1835b1d716f5051499a2814c683c806b15f04b0eba492863703e9/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f3733303730332f73637265656e73686f74732f363538313234332f6176656e746f2e676966" alt="myImage" id="HeroImage"/>
                </div>
            </div>

            <style>{`
                #Hero{
                    display: flex;
                    position: relative;
                    flex-direction: column;
                    width: 90%;
                    height: 70vh;
                    background-color: #000080;
                    margin-left: auto;
                    margin-right: auto;
                    border-radius: 20px;
                    margin-top: 20px;
                }
                .hello-world {
                    opacity: 0;
                    animation-name: helloInAnimation;
                    animation-duration: 2s;
                    animation-fill-mode: forwards;
                   }
                  
                  @keyframes helloInAnimation {
                    from {
                      opacity: 0;
                    }
                    to {
                      opacity: 1;
                    }
                   }
                #HeroContainer{
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                }
                #TextContainer{
                    display: flex;
                    position: relative;
                    width: 60%;
                    height: 80%;
                    padding-left: 20px;
                    padding-top: 70px;
                    flex-direction: column;
                }
                #NameContainer{
                    display: flex;
                    position: relative;
                    width: 60%;
                }
                #Name{
                    display: flex;
                    position: relative;
                    color: white;
                    font-family: InterBold;
                    text-align: center;
                    font-size: 60px;
                }
                #DescriptionContainer{
                    display: flex;
                    position: relative;
                    width: 60%;
                    justify-content: center;
                    text-align: center;
                    padding-left: 5px;
                }
                #Description{
                    display: flex;
                    position: relative;
                    color: white;
                    font-family: Inter;
                    font-size: 20px;
                }
                #ArrowContainer{
                    display: flex;
                    position: relative;
                    width: 52%;
                    justify-content: center;
                    align-items: center;
                }
                #arrow-container {
                    display: flex;
                    position: relative;
                    align-items: center;
                    justify-content: center;
                    margin-top: 20px;
                    margin-left: 60px;
                    animation: arrow-bounce 1s infinite;
                  }
          
                  #arrow {
                    width: 40px;
                    height: 40px;
                    border: solid white;
                    border-width: 0 5px 5px 0;
                    display: inline-block;
                    padding: 3px;
                    transform: rotate(45deg);
                  }
          
                  @keyframes arrow-bounce {
                    0% {
                      transform: translateY(0);
                    }
                    50% {
                      transform: translateY(10px);
                    }
                    100% {
                      transform: translateY(0);
                    }
                  }
                #ImageContainer{
                    display: flex;
                    position: relative;
                    width: 40%;
                    height: 100%;
                    justify-content: center;
                    padding-right: 5%;
                    align-items: center;
                }
                #HeroImage{
                    display: flex;
                    position: relative;
                    width: 470px;
                    height: 400px;
                    border-radius: 20px;
                }
                
                @media (max-width: 1300px){
                    #Hero{
                        height: 140vh;
                    }
                    #HeroContainer{
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        padding-left: 16.55px; 
                    }
                    #TextContainer{
                        padding-left: 120px;
                    }

                }
                @media (max-width: 700px){
                    #Hero{
                        height: 155vh;
                    }
                    #HeroImage{
                        width: 380px;
                        height: 300px;
                    }
                    #TextContainer{
                        padding-right: 100px;
                        width: 55%;
                    }
                    #DescriptionContainer{
                        padding-left: 35px;
                    }
                    #NameContainer{
                        margin-right: 150px;
                        
                    }
                    #ArrowContainer{
                        padding-left: 15px;
                    }
                }
                @media (max-width: 400px){
                    #TextContainer{
                        padding-right: 200px;
                    }
                    #NameContainer{
                        margin-right: 40px;
                    }
                    #ImageContainer{
                        padding-right: 35px;
                    }
                    #DescriptionContainer{
                        padding-left: 50px;
                    }
                    #ArrowContainer{
                        padding-left: 30px;
                    }
                    #HeroImage{
                        width: 350px;
                        height: 250px;
                    }
                }
            `}</style>
        </div>
    )
    
}


export default Hero