import React from "react";
import { SocialIcon } from 'react-social-icons';
import logo from "../../images/logo.png";

const Footer = () => (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
        <div className="w-full flex sm:flex-row flex-col  items-center my-4">
            <div className="flex flex-[0.5] justify-center items-center">
                <img src={logo} alt="logo" className="w-32" />
            </div>


            <div className="flex justify-center items-center flex-col mt-5">
                <p className="text-white text-sm text-center">Contact me with me</p>
                <div className="flex flex-row " >
                    <SocialIcon url="https://www.linkedin.com/in/dhruv-panchal-a61a51200/" className="m-3 my-4 h-1 w-1 " />
                    <SocialIcon url="https://github.com/DAP2506" className="m-3 my-4 h-1 w-1 " />
                    <SocialIcon url="https://instagram.com" className="m-3 my-4 h-1 w-1 " />
                    <SocialIcon url="https://twitter.com/" className="m-3 my-4 h-1 w-1 " />
                    <SocialIcon url="https://facebook.com/" className="m-3 my-4 h-1 w-1 " />
                </div>


            </div>
        </div>

        <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

        <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
            <p className="text-white text-left text-xs">Dhruv Panchal ,<br></br> {Date()} </p>
            <p className="text-white text-right text-xs">CopyWrite! all rights are reserved</p>
        </div>
    </div>
);

export default Footer;