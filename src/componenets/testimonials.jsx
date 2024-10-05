import zeroless from "../assets/roundZeroless.png";
import letsellify from "../assets/roundLetsellify.png";
import mana from "../assets/roundMana.png";
export default function Testimonials(){

    const contents = [
        {
            body : `iSchools Media is beyond entertainment. It 
            is an institution of teaching and learning. It 
            is an empowerment scheme. It is
            revolutionary in education nitch of content 
            creation.`,
            image : mana,
            name : "Abdulkadir S. Abdulkadir",
            position : "Executive Director ",
            company : "Mana-Mana School Services Limited"
        },
        {
            body : `iSchool Media has beautifully involved and engaged everyone in their business equation 
            with mutual benefits. As a partner, I can attest that iSchools Media is a perfect place for the distribution of education related vibes.`,
            image : zeroless,
            name : "Muhammad Sadiq Yinti",
            position : "Co-Founder/CEO",
            company : "Zeroless Multipurpose Limited"
        },
        {
            body : `iSchools Media is much more than content creation.
            It is set to explore creative economy and advance
            educational creatives in a business mannered ways
            which combine technology, business, and creatives
            works.`,
            image : letsellify,
            name : "Ahmad Buba",
            position : "Co-founder/CTO",
            company : "Letsellify Technologies Limited"
        }
    ]
    return(
        <div className="flex flex-col gap-32 xl:px-24 px-8 py-32">
            <div className="text-center">
                <p className="text-[#238949] text-[25px]">Testimonial</p>
                <p className="text-[31px]">Hear What People Are Saying About Us</p>
            </div>
            <div className="xl:grid grid-cols-3 flex flex-col gap-12">
                {
                    contents.map((content, index)=>(
                        <div className="p-12 flex flex-col gap-12 shadow-sm">
                            <small>{content.body}</small>
                            <div className="flex gap-4 items-center">
                                <img src={content.image} alt="" />
                                <div className="flex flex-col gap-2">
                                    <h4>{content.name}</h4>
                                    <small>{content.position}</small>
                                    <small>{content.company}</small>
                                    <small>Partner</small>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}