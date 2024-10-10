import student from "../assets/student.png";
import app from "../assets/appStore.png";
import play from "../assets/playStore.png";
import one from "../assets/group_1.png";
import two from "../assets/group_2.png";
import three from "../assets/group_3.png";
import Order from "./grid-order";
import { LuFacebook } from "react-icons/lu";
import { CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { TbBrandTiktok } from "react-icons/tb";


export default function Info(){
    const contents = [
        {
            image : one,
            header : "Invite Us",
            body : `Are you a school or organization looking to host high-impact, high-value, and high-quality education focused
                    programs and events in line with ours? Invite us to offer
                    you video production, editing, and publication services at zero cost.`,
            btn : "Invite Us Now",
            link : "https://forms.gle/yGUAYH1sYN1nKmN67"
        },
        {
            image : two,
            header : "Submit Your Content",
            body : `Do you have already recorded content with high-quality, and you want us to publish it? Contact us, and we will review it. If it meets our standards, we will publish it at zero cost. You will get increased visibility and recognition of values.`,
            btn : "Submit Here",
            link : "https://forms.gle/5Jg7nnpCjtZ3Hn5F8"
        },
        {
            image : three,
            header : "Advertise With Us",
            body : `Want a perfect place to advertise to a large audience of education policy makers and administrators, students, and their parents, teachers, and education enthusiasts? iSchools Media is a perfect destination.`,
            btn : "Book a Slot Now",
            btns : "Chat With Us",
            link : "https://wa.me/2347064747942"
        },
    ]
    return(
    <section id="service" className="xl:px-24 px-8 py-32 flex flex-col gap-40">
        <div className="xl:grid grid-cols-2 flex flex-col gap-8 items-center text-[20px]">
            <div className="w-full">
                <img src={student} alt="" />
            </div>
            <div className="flex flex-col gap-8">
                <p className="text-[22px] text-[#238949]">Explore  Our Platform</p>
                <small>
                Discover a wealth of inspiring content from schools and
                organizations offering innovative education-focused
                programs and events
                </small>
                <div className="flex items-4 items-center gap-4">
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
                <small>Don’t forget to subscribe and follow us</small>
                <div className="flex flex-col gap-2 text-center items-center w-fit">
                    <small>Coming Soon</small>
                    <div className="flex items-center gap-4">
                        <img src={app} alt="" />
                        <img src={play} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <Order contents={contents} header="[#238949]" 
        btn_style="bg-gradient-to-r from-[#238949] to-[#153B66] text-white 
        font-normal py-3 px-6 rounded-full hover:from-green-600 hover:to-teal-500"/>
    </section>
    )
}