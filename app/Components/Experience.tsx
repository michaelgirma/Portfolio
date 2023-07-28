import React from "react";

const Experience:React.FC = () => {
    return(
        <div id="Experience">
            <div id="ExperienceContainer">
                <div id="ExperienceHeaderContainer">
                    <h1 id="ExperienceHeader">Experience</h1>
                </div>
                <div id="ExperienceTextContainer">
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
                    height: 100vh;  
                }
                #ExperienceContainer{
                    display: flex;
                    position: relative;
                    flex-direction: column;
                    width: 100%;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
                }
                #ExperienceHeaderContainer{
                    display: flex;
                    position: relative;
                    width: 90%;
                    height: 71px;
                    justify-content: center;
                    align-items: center;
                    background-color: #00FFFF;
                    border-radius: 50px;
                    margin-bottom: 100px;                
                }
                #ExperienceHeader{
                    display: flex;
                    position: relative;
                    color: #343434;
                    font-weight: 400;
                    font-size: 32px;
                    font-family: InterBold;
                }
                #ExperienceTextContainer{
                    display: flex;
                    position: relative;
                    width: 70%;
                    height: 65%;
                    margin-top: 50px;
                    border-radius: 50px;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    border: 1px solid #00FFFF;
                }
                #CurrentText{
                    color: #00FFFF;
                    font-family: Inter;
                    font-size: 17px;
                }
                @media(max-width: 500px){
                    #ExperienceTextContainer{
                        width: 95%;
                    }
                }
            `}</style>
        </div>
    );
}

export default Experience;
