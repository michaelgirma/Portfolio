'use client' 
import React from "react";
import { useState, useEffect } from "react";


const Experience:React.FC = () => {
    const [animationStateExperience, setAnimationStateExperience] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 2000) {
            setAnimationStateExperience(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <div id="Experience">
            <div id="ExperienceContainer">
                <div id="ExperienceHeaderContainer">
                    <h1 id="ExperienceHeader">Experience</h1>
                </div>
                <div id="ExperienceTextContainer" className={animationStateExperience ? "animate" : ""}>
                    <p id="CurrentText">While I may not have professional experience in this field yet, I am a passionate self-learner and have dedicated numerous hours to mastering my skills in full stack web development. 
                        Through self-study, online courses, and hands-on projects, I have developed a strong foundation and familiarity with all the skills above. 
                        I have put this knowledge to practice by building a projects which will be down below.  My journey has not only allowed me to apply and deepen my understanding but also created a strong sense of problem-solving, adaptability, and persistence. 
                        I have also had the opportunity to work on group projects and participate in coding challenges that have strengthened my team-work and time-management skills. 
                        I am a rising sophmore and plan on having experience by the end of next summer to deliver high-quality work and continue learning and growing.
                    </p>
                </div>
            </div>
            <style>{`
                #Experience{
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 150vh; 
                }
                #ExperienceContainer{
                    display: flex;
                    position: relative;
                    flex-direction: column;
                    width: 100%;
                    height: 100%;
                    justify-content: space-around;
                    align-items: center;
                    overflow: hidden;
                }
                #ExperienceHeaderContainer{
                    display: flex;
                    position: relative;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    width: 100%;
                    height: 35%;
                    margin-top: 10%;
                    background-color: black;
                    color: white;
                    font-size: 14px;
                    margin-bottom: 30px; 
                    background: linear-gradient(-45deg, black, black, white, black);
                    background-size: 400% 400%;
                    animation: gradient 15s ease infinite; 
                }
                @keyframes gradient{
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
                #ExperienceHeader{
                    display: flex;
                    position: relative;
                    color: white;
                    font-weight: 400;
                    font-size: 60px;
                    font-family: InterBold;
                }
                #ExperienceTextContainer{
                    display: flex;
                    position: relative;
                    width: 70%;
                    height: 70%;
                    margin-top: 50px;
                    border-radius: 50px;
                    justify-content: center;
                    align-items: flex-start;
                    text-align: center;
                    overflow: hidden;
                }
                .animate {
                    animation: 3.5s ease-out forwards;
                }
                #ExperienceTextContainer.animate {
                    animation-name: fadeInFromRight;
                }
                @keyframes fadeInFromRight{
                    0% {
                      transform: translateX(200%);
                      opacity: 0;
                    }
                    100% {
                      transform: translateX(0);
                      opacity: 1;
                    }
                }
                #CurrentText{
                    color: white;
                    font-family: Inter;
                    font-size: 20px;
                }
                @media(max-width: 700px){
                    #ExperienceContainer{
                        width: 100%;
                        flex-direction: column;
                    }
                    #ExperienceHeaderContainer{
                        width: 100%;
                        height: 35%;
                    }
                    #ExperienceTextContainer{
                        width: 90%;
                    }
                }
            `}</style>
        </div>
    );
}

export default Experience;
