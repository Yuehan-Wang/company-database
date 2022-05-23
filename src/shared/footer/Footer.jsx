import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Faded from "../assets/img/faded.png";


const Footer = () => {

    const navigate = useNavigate();

    return (
        <div className="absolute min-h-0 bottom-0 w-full h-[250px] bg-[#226A32] flex flex-col justify-center items-center font-sans sm">
            <div className="flex justify-start items-start mb-1">
                <div className="flex flex-col justify-center items-center">
                    <div className="flex space-x-[50px] ">
                        <p 
                            className="text-xl text-white hover:underline hover:text-slate-300 m-0 cursor-pointer"
                            onClick={() => {navigate('/dummy')}}
                        >
                            People
                        </p>
                        <p 
                            className="text-xl text-white hover:underline hover:text-slate-300 m-0 cursor-pointer"
                            onClick={() => {navigate('/dummy')}}
                        >
                            Accessibility Statement
                        </p>
                        <p 
                            className="text-xl text-white hover:underline hover:text-slate-300 m-0 cursor-pointer"
                            onClick={() => {navigate('/dummy')}}
                        >
                            FAQ
                        </p>
                        <p 
                            className="text-xl text-white hover:underline hover:text-slate-300 m-0 cursor-pointer"
                            onClick={() => {navigate('/dummy')}}
                        >
                            Contact Us
                        </p>
                    </div>
                </div>

            </div>
            <div className="flex flex-col justify-center items-center">
                <p className="text-lg text-white mb-[20px]">© 2022 - 2024. National Corporation Directory </p>
                
                    <p 
                        className="text-xxl text-sky-500 hover:underline hover:text-slate-300 m-0 cursor-pointer"
                        onClick={() => {navigate('/dummy')}}
                    >
                        Privacy
                    </p>
                    <p 
                        className="text-xxl text-sky-500 hover:underline hover:text-slate-300 m-0 cursor-pointer"
                        onClick={() => {navigate('/dummy')}}
                    >
                        Terms&#38;Conditions
                    </p>
                    <p 
                        className="text-xxl text-sky-500 hover:underline hover:text-slate-300 m-0 cursor-pointer"
                        onClick={() => {navigate('/dummy')}}
                    >
                        Partnerships
                    </p>
                <p className="w-[500px] h-fit text-sm text-neutral-400  whitespace-normal mb-0">This site is published by Aajimatics, which is solely responsible for its contents. This website is intended for visitors from the U.S. This site contains links to websites to which our Privacy Policy does not apply. We encourage you to read the privacy policy of every website you visit.</p>
            </div>
            <div className="absolute left-[1000px] object-scale-down w-full h-fit object-cover">
                <img className="w-fit h-[250px] object-cover" src={Faded} alt="" /> 
            </div>
        </div>
    )
}

export default Footer;