import one from "../assets/partner_1.png";
import two from "../assets/partner_2.png";
import three from "../assets/partner_3.png";
import four from "../assets/partner_4.png";
import Order from "./grid-order";
export default function Partner(){

    const contents = [
        {
            image : one,
            header : "Schools & Educational Centers",
            body : `You are our primary focus. All schools from primary, secondary, and tertiary, as well as organizations with education-focused programs and events around the world who are fit to drive success for mutual benefits, are invited to partner iSchools Media.`,
            btn : "Become a Partner",
            link: "https://forms.gle/pR2fTNTuk4qP5XLNA"
        },
        {
            image : two,
            header : "Media Organizations",
            body : `If you own a standard audio-visual media studio with the right mix of staffing like videographers, photographers, and editors who can deliver high-quality videos for programs and events, we are open to partnerships with you.`,
            btn : "Become a Partner",
            link: "https://forms.gle/pR2fTNTuk4qP5XLNA",
        },
        {
            image : three,
            header : "Creative Teams",
            body : `The creative team is a group of individuals with skillsets and audio-visual instruments to produce high-quality videos. The team must not be a corporation but bond by agreement to work together. iSchools Media is open to partnerships with any creative team and willing to provide mentorship. Form one and partner us.`,
            btn : "Become a Partner",
            link: "https://forms.gle/pR2fTNTuk4qP5XLNA"
        },
        {
            image : four,
            header : "Program Partners",
            body : `Are you a high-level personality in the education industry? A professional in the creative industry? An experienced program manager or business administration and management specialists? Do you believe you have values, ideas, and skillsets to promote our core mission and vision? We are open to partnerships with you.`,
            btn : "Become a Partner",
            link: "https://forms.gle/pR2fTNTuk4qP5XLNA"
        },
    ]
    return(
        <section id="partner" className="xl:px-24 px-8 py-32 bg-[#238949] text-white flex flex-col gap-32">
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
        </section>
    )
}