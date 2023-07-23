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
        <>
        <div id="Hero" className="hello-world">
            <div id="HeroContainer">
                <div id="TextContainer">
                    <div id="NameContainer">
                        <h1 id="Name">Hello, Im Michael</h1>
                    </div>
                    <div id="DescriptionContainer">
                        <p id="Description">Im a FullStack devloper who is currently enrolled at the University of Maryland, College Park.</p>
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
                    width: 100vw;
                    height: 70vh;
                    background-color: #343434;
                    border-radius: 20px;
                    margin-top: 80px;
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
                    flex-direction: row;
                    width: 100%;
                    height: 100%;
                    justify-content: space-around;
                }
                #TextContainer{
                    display: flex;
                    position: relative;
                    width: 60%;
                    height: 80%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                #NameContainer{
                    display: flex;
                    position: relative;
                    justify-content: center;
                    align-items: center;
                    width: 60%;
                }
                #Name{
                    display: flex;
                    position: relative;
                    color: #00FFFF;
                    font-family: InterBold;
                    text-align: center;
                    font-size: 60px;
                }
                #DescriptionContainer{
                    display: flex;
                    position: relative;
                    width: 60%;
                    justify-content: center;
                    align-items: center;
                    padding-left: 5px;
                }
                #Description{
                    display: flex;
                    position: relative;
                    color: #00FFFF;
                    font-family: Inter;
                    font-size: 20px;
                    text-align: center;
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
                    margin-top: 10px;
                    animation: arrow-bounce 1s infinite;
                  }
          
                  #arrow {
                    width: 40px;
                    height: 40px;
                    border: solid #00FFFF;
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
                    align-items: center;
                }
                #HeroImage{
                    display: flex;
                    position: relative;
                    width: 60%;
                    height: 50%;
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
                    }
                    #HeroImage{
                        width: 200%;
                    }
                }

            `}</style>
        </div>
        </>
        )
    
}


export default Hero