import ToggleBoard from "./toggle-board"
export default function FAQ(){

    const contents = [
        {
            btn : "What is iSchools Media?",
            detail : "Any event that highlights exceptional student projects, research, and innovations."
        },
        {
            btn : "How does iSchools Media ensure the quality of its content?",
            detail : "Any event that features student artwork, music, and performances"
        },
        {
            btn : "What type of content does iSchools Media publish?",
            detail : "An event that features educators sharing their teaching methods, experiences, and expertise."
        },
        {
            btn : "Is iSchools Media available globally?",
            detail : "Any event that features practical skill-building workshops on topics like coding, writing, public speaking, and more."
        },
        {
            btn : "How can schools and educational centers partner with iSchools Media?",
            detail : "Any event that showcases students’  unique programs, initiatives, and success stories."
        },
        {
            btn : "How can I contact iSchools Media?",
            detail : "Programs that cover inspiring stories of mentorship and its impact on students' lives, and innovations."
        },
        {
            btn : "How can I access iSchools Media content?",
            detail : "An event that amplifies students’ thoughts, ideas, and perspectives on various but high-impact topics  "
        },
        {
            btn : "What are the benefits of partnering with iSchools Media?",
            detail : "Events covering milestone events and celebrations in schools"
        },
        {
            btn : "Can I submit my own content to iSchools Media?",
            detail : "Days, especially where industry professionals share insights and advice with students."
        },
        {
            btn : "Can I share observations, ideas, and suggestions with iSchools Media team?",
            detail : "Exclusive programs that feature professionals to teach important topics and virtual excursions"
        },
    ] 
    return(
        <section id="faq" className="flex flex-col gap-32 xl:px-24 px-8 py-32 text-center">
            <p className="text-[35px] text-[#238949]">Frequently Asked Questions</p>
            <ToggleBoard contents={contents}/>
        </section>
    )
}