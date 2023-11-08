import React from 'react';
import "../styles/main.css";

const Hero = () => {
    return (
       <div className='inline-flex gap-[87px] items-center'>
            <div className='flex item-flex start-0 flex-col'>
                <div className="justify-start items-center gap-[10.81px] inline-flex"><h4 className=" text-[22px] font-normal font-['Roboto']">Hello I'm</h4></div>
                <div className="justify-start items-center gap-[10.81px] inline-flex"><h1 className=" text-[81.06px] font-black font-['Roboto']">Kenneth James</h1></div>
                <div className="justify-c items-center gap-[10.81px] inline-flex"><p className="text-[29.06px] font-black font-['Roboto']">and im a Front-end developer and UI/UX Designer</p></div>
                <div className="inline-flex items-center gap-[10.81px]"><h4 className=" text-[25px] font-black font-['Roboto']">My Tech Stacks: </h4> 
                <img src="../assets/js-logo.png" alt="" />
                <img src="../assets/html-logo.png" alt="" />
                <img src="../assets/css-logo.png" alt="" />
                <img src="../assets/react-logo.png" alt="" />
                </div>
            </div>
            <div className="w-[418px] h-[418px] rounded-full border-8 border-stone-900">
                
            </div>
       </div>
    );
};

export default Hero;
