import logo from "../assets/logo.png";
import { LuFacebook } from "react-icons/lu";
import { CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { TbBrandTiktok } from "react-icons/tb";

export default function Footer(){
    return(
        <div className="px-24 py-32 bg-[#2A2B2C] text-[20px] flex flex-col gap-32">
            <div className="grid grid-cols-3 px-24">
                <ul className="flex flex-col gap-4 text-white ">
                    <li className="text-[#DB2E2D] text-[22px]">Company</li>
                    <li>Home</li>
                    <li>Programs and events</li>
                    <li>Platforms</li>
                </ul>
                <ul className="flex flex-col gap-4 text-white ">
                    <li className="text-[#DB2E2D] text-[22px]">Info</li>
                    <li>FAQs</li>
                    <li>Testimonials</li>
                </ul>
                <ul className="flex flex-col gap-4 text-white ">
                    <li className="text-[#DB2E2D] text-[22px]">Get In Touch</li>
                    <li>Chat With Us</li>
                    <li>ischoolsmedia@gmail.com</li>
                    <li>07064747942</li>
                </ul>
            </div>
            <div className="grid grid-cols-2 text-white">
                <div className="flex flex-col gap-4">
                    <small>Visit Our Socials</small>
                    <div className="flex px-8 items-center gap-4">
                        <img src={logo} alt="" />
                        <LuFacebook size={30}/>
                        <CiYoutube size={30}/>
                        <FaInstagram size={30}/>
                        <TbBrandTiktok size={30}/>
                    </div>
                </div>
                <div className="flex flex-col gap-4 pl-32">
                    <small>Office Address:</small>
                    <small>
                    17, Khamilant Plaza, Low-cost junction, Bangaie Street, Bida, 
                    </small>
                    <small>
                    Bida LG, Niger State, Nigeria.
                    </small>
                </div>
            </div>
            <div className="flex gap-6 items-center justify-center  text-white border-t-2 text-center text-[17px] py-8">
                <div className="w-fit gap-4 flex items-center">
                <small><span className="px-1 rounded-full border border-white">c</span> 2024</small>
                <img src={logo} width={100} alt="" />
                <small>All Rights Reserved</small>
                </div>
            </div>
        </div>
    )
}