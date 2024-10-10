import ToggleBoard from "./toggle-board"
export default function FAQ(){

    const contents = [
        {
            btn : "What is iSchools Media?",
            detail : `iSchools Media is an educational media that provides a platform for 
                        schools and educational centers to showcase their programs and 
                        achievements, while offering engaging content and resources to 
                        students, parents, and educators.`
        },
        {
            btn : "How does iSchools Media ensure the quality of its content?",
            detail : `We have a team of experienced editors, researchers, and educators 
                    who review and verify the accuracy and quality of our content.`
        },
        {
            btn : "What type of content does iSchools Media publish?",
            detail : `We create and publish a variety of content, including videos, articles, 
                    podcasts, and social media posts, focused on education, learning, 
                    and innovation.`
        },
        {
            btn : "Is iSchools Media available globally?",
            detail : `Yes, our platform is available globally, and we welcome visitors and 
                    partners from around the world.`
        },
        {
            btn : "How can schools and educational centers partner with iSchools Media?",
            detail : `Schools and educational centers can partner with us by contacting 
                    our team to discuss content creation opportunities, sponsored 
                    content, and advertising solutions.`
        },
        {
            btn : "How can I contact iSchools Media?",
            detail : `You can contact us through our website contact form, email, or 
                    social media channels. of mentorship and its impact on students' lives, and innovations.`
        },
        {
            btn : "How can I access iSchools Media content?",
            detail : `Our content is available on our social media channels: YouTube 
                    channel, Facebook page, Instagram, and Tik-Tok.`
        },
        {
            btn : "What are the benefits of partnering with iSchools Media?",
            detail : `Depending on the partners' nature, like schools, they benefit from 
                    increased visibility, credibility, and access to our audience, as well as 
                    opportunities for content creation, sponsorship, and advertising. 
                    All other partners own a share in the revenue of the iSchools Media.`
                            },
        {
            btn : "Can I submit my own content to iSchools Media?",
            detail : `Yes, we accept content submissions from educators, students, and 
                    experts in the education field and publish the accepted content.`
        },
        {
            btn : "Can I share observations, ideas, and suggestions with iSchools Media team?",
            detail : `Yes. We welcome and appreciate unsolicited ideas, observations, 
                    and suggestions from random people. We review and contact them 
                    if necessary`
        },
    ] 
    return(
        <section id="faq" className="flex flex-col gap-32 xl:px-24 px-8 py-32 text-center">
            <p className="text-[35px] text-[#238949]">Frequently Asked Questions</p>
            <ToggleBoard contents={contents}/>
        </section>
    )
}