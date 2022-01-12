import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";


const ServiceCard = ({ color, title, icon, subtitle }) => (
    <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 py-5 cursor-pointer hover:shadow-xl max-w-[80%]">

        <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
            {icon}
        </div>
        <div className="ml-5 flex flex-col flex-1">
            <h3 className="mt-2 text-white text-lg">{title}</h3>
            <p className="mt-1 text-white text-sm md:w-9/12">
                {subtitle}
            </p>
        </div>
    </div>
);


const Services = () => (
    <div className="flex w-full justify-center items-center gradient-bg-services">
        <div className="flex mf:flex-col flex-col items-center justify-between md:p-20 py-20 px-3">

            <div className="flex-1 flex flex-col justify-start items-start p-5">
                <h1 className="text-white text-3xl sm:text-5xl py-2">
                    What we offer to you?
                    <br />
                    why you shold use this?
                </h1>
                <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
                    Reasons to use this then anyother website for payment is as stated
                </p>
            </div>
            
            <br></br>
            <br></br>
            <br></br>


            <div className="flex-1 flex ms:flex-col flex-col  justify-start items-center">
                <ServiceCard
                    color="bg-[#5952E3]"
                    title="Security gurantee"
                    icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
                    subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
                />
                <ServiceCard
                    color="bg-[#9645A8]"
                    title="Best exchange rates"
                    icon={<BiSearchAlt fontSize={21} className="text-white" />}
                    subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
                />
                <ServiceCard
                    color="bg-[#F84950]"
                    title="Fastest transactions"
                    icon={<RiHeart2Fill fontSize={21} className="text-white" />}
                    subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
                />
            </div>
        </div>
    </div>
);

export default Services;