import React from 'react';
import "../styles/main.css";


const About = () => {
    return (
       <>
            <div className="inline-flex justify-center items-center gap-[81px] py-[350px]">
            <div className="flex justify-end items-end w-[472px] h-[393px] rounded-lg bg-fuchsia-500"></div>
            <div className="flex flex-col content-start gap-[16px] h-[398px]">
                <h3 className="font-['Roboto'] text-[14px] text-customBlue">About Me</h3>
                <h1>A Passionate Front End Dev and UI/UX Designer</h1>
            </div>
            </div>
       </>
    );
};

export default About;