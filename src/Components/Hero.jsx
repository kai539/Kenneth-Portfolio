import React from 'react';
import { useState, useEffect } from 'react';
import "../styles/main.css";

const Hero = () => {
    
    const [Designation, setDesignation] = useState('Junior Front End Developer');

    useEffect(() => {
        const Designation = ['Junior UI/UX Designer', 'Junior Front End Developer'];
        let currentIndex = 0

        const Interval = setInterval(() => {
            setDesignation(Designation[currentIndex]);
            currentIndex = (currentIndex + 1) % Designation.length;
        }, 2000);

        return () => clearInterval(Interval);
    }, []);

    return (
       <div className='inline-flex gap-[136px] items-center py-[100px]'>
            <div className='flex item-flex start-0 flex-col gap-8 pt-11'>
                <div className="justify-start items-center gap-[10.81px] inline-flex py-1"><h4 className=" text-[22px] font-normal font-['Roboto']">Hello I'm</h4></div>
                <div className="justify-start items-center gap-[10.81px] inline-flex"><h1 className=" text-[81.06px] font-black font-['Roboto']">Kenneth James</h1></div>
                <div className="justify-c items-center gap-[10.81px] inline-flex "><p className="text-[29.06px] font-black font-['Roboto']">And I'm {Designation} </p></div>
                <div className="inline-flex items-center gap-[10.81px] py-8"><h4 className=" text-[25px] font-black font-['Roboto']">My Tech Stacks: </h4> 
                <img src="../assets/js-logo.png" alt="" />
                <img src="../assets/html-logo.png" alt="" />
                <img src="../assets/css-logo.png" alt="" />
                <img src="../assets/react-logo.png" alt="" />
                </div>
            </div>
            <div className="blob-container image-container w-[418px] h-[418px] rounded-full">
                <div className='blob'></div>
            </div>
       </div>
    );
};

export default Hero;
