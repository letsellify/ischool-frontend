import logo from "../assets/logo.png";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from "react";

export default function NavBar(){

    const [toggle, setToggle] = useState(false);

    return(
        <nav className="bg-white  w-full border flex items-center justify-between xl:px-24 py-4 fixed top-0 z-50">
      
        <div className="flex items-center">
            <img src={logo} alt="Mana-Mana Logo" className="w-36"/>
        </div>

       
        <ul className={`flex xl:flex-row flex-col xl:relative ${toggle ? "absolute xl:relative" : "xl:flex hidden"} justify-start items-start bg-white xl:max-w-fit w-full xl:h-full h-screen xl:top-0 top-24 xl:items-center gap-16 text-lg xl:border-none border px-8 xl:py-0 py-24`}>
            <li><a href="#home" className="hover:text-green-600 ">Home</a></li>
            <li><a href="#service" className="hover:text-green-600">Our Services</a></li>
            <li><a href="#partner" className="hover:text-green-600">Partnerships</a></li>
            <li><a href="#event" className="hover:text-green-600">Programs and Events</a></li>
            <li><a href="#faq" className="hover:text-green-600">FAQs</a></li>
            <div className="bg-gradient-to-r from-[#238949] to-[#153B66] text-white items-center text-center
            font-bold py-3 px-6 rounded-full w-full hover:from-green-600 hover:to-teal-500 mt-24 xl:hidden ">
                <a href="https://wa.me/2347064747942" >
                    Chat with us
                </a>
            </div>
        </ul>

        <div>
            <a href="https://wa.me/2347064747942" className="bg-gradient-to-r from-[#238949] to-[#153B66] text-white 
            font-bold py-3 px-6 rounded-full hover:from-green-600 hover:to-teal-500 xl:flex hidden">
                Chat with us
            </a>
            <div className="xl:hidden block px-8">
                {!toggle ?
                <RiMenu3Fill 
                size={32}
                onClick={()=>setToggle(true)}/>
                :
                <IoMdCloseCircle 
                size={32} 
                color="green"
                onClick={()=>setToggle(false)}/>
            }
            </div>
        </div>
    </nav>
    )
}