import logo from "../assets/logo.png";
import { LuFacebook } from "react-icons/lu";
import { CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { TbBrandTiktok } from "react-icons/tb";

export default function Footer(){
    return(
        <div className="xl:px-24 px-8 py-32 bg-[#2A2B2C] text-[20px] flex flex-col gap-32">
            <div className="grid xl:grid-cols-3 gap-y-12 grid-cols-2 gap-6 xl:px-24">
                <ul className="flex flex-col gap-4 text-white xl:text-[20px] text-[12px]">
                    <li className="text-[#DB2E2D] xl:text-[22px] text-[14px]">Company</li>
                    <li>Home</li>
                    <li>Programs and events</li>
                    <li>Platforms</li>
                </ul>
                <ul className="flex flex-col gap-4 text-white xl:text-[20px] text-[12px] ">
                    <li className="text-[#DB2E2D] xl:text-[22px] text-[14px]">Info</li>
                    <li>FAQs</li>
                    <li>Testimonials</li>
                </ul>
                <ul className="flex flex-col gap-4 text-white xl:text-[20px] text-[12px] ">
                    <li className="text-[#DB2E2D] xl:text-[22px] text-[14px]">Get In Touch</li>
                    <li>Chat With Us</li>
                    <li>ischoolsmedia@gmail.com</li>
                    <li>07064747942</li>
                </ul>
                <div className="flex flex-col gap-4  text-white text-[12px]">
                    <small className="text-[#DB2E2D]">Office Address:</small>
                    <small>
                    17, Khamilant Plaza, Low-cost junction, Bangaie Street, Bida, 
                    </small>
                    <small>
                    Bida LG, Niger State, Nigeria.
                    </small>
                </div>
            </div>
            <div className="xl:grid grid-cols-2 text-white">
                <div className="flex flex-col gap-4">
                    <small>Visit Our Socials</small>
                    <div className="flex xl:px-8 items-center gap-4">
                        <img src={logo} width={100} alt="" />
                        <a href="https://www.facebook.com/profile.php?id=61566470032420&mibextid=ZbWKwL">
                        <LuFacebook size={24} className="cursor-pointer"/>
                    </a>
                    <a href="https://www.youtube.com/channel/UCvMVlZDtQcvciQhq4TW333A ">
                        <CiYoutube size={24} className="cursor-pointer"/>
                    </a>
                    <a href="https://www.instagram.com/ischools_media?igsh=MTU5Mnc4cnJmcWZsOQ==">
                        <FaInstagram size={24} className="cursor-pointer"/>
                    </a>
                    <a href="https://www.tiktok.com/@ischools_media?is_from_webapp=1&sender_device=pc">
                        <TbBrandTiktok size={24} className="cursor-pointer"/>
                    </a>
                    </div>
                </div>
                <div className="xl:flex hidden flex-col gap-4 pl-32">
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