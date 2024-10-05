import one from "../assets/partner_1.png";
import two from "../assets/partner_2.png";
import three from "../assets/partner_3.png";
import four from "../assets/partner_4.png";
import Order from "./grid-order";
export default function Partner(){

    const contents = [
        {
            image : one,
            header : "Invite Us",
            body : `Are you a school or organization looking to host high-impact, high-value, and high-quality education focused
                    programs and events in line with ours? Invite us to offer
                    you video production, editing, and publication services at zero cost.`,
            btn : "Become a Partner",
            link: "https://forms.gle/pR2fTNTuk4qP5XLNA"
        },
        {
            image : two,
            header : "Submit Your Content",
            body : `Do you have already recorded content with high-quality, and you want us to publish it? Contact us, and we will review it. If it meets our standards, we will publish it at zero cost. You will get increased visibility and recognition of values.`,
            btn : "Become a Partner",
            link: "https://forms.gle/pR2fTNTuk4qP5XLNA"
        },
        {
            image : three,
            header : "Advertise With Us",
            body : `Want a perfect place to advertise to a large audience of education policy makers and administrators, students, and their parents, teachers, and education enthusiasts? iSchools Media is a perfect destination.`,
            btn : "Become a Partner",
            link: "https://forms.gle/pR2fTNTuk4qP5XLNA"
        },
        {
            image : four,
            header : "Advertise With Us",
            body : `Want a perfect place to advertise to a large audience of education policy makers and administrators, students, and their parents, teachers, and education enthusiasts? iSchools Media is a perfect destination.`,
            btn : "Become a Partner",
            link: "https://forms.gle/pR2fTNTuk4qP5XLNA"
        },
    ]
    return(
        <div className="xl:px-24 px-8 py-32 bg-[#238949] text-white flex flex-col gap-32">
            <div className="text-center xl:px-44 flex flex-col gap-4">
                <p className="text-[35px]">Be Our Partners</p>
                <small>
                Join the creative economy forces with iSchools Media to shape the future of education and inspire
                a love of learning. We are open to partnerships, especially with the under listed people, organizations,
                and institutions that advance our defined programs and events at iSchool Media. Being our partner equates
                being a shareholder. Amazing!
                </small>
            </div>
            <Order contents={contents} header="white" 
            btn_style="bg-[#DB2E2D] text-white font-normal py-3 px-6 rounded-full hover:from-red-500 hover:to-red-300"/>
        </div>
    )
}