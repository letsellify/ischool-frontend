import ToggleBoard from "./toggle-board"
export default function Event(){
    const contents = [
        {
            btn : "Academic Achievements Showcase",
            detail : "Any event that highlights exceptional student projects, research, and innovations."
        },
        {
            btn : "Artist Showcase",
            detail : "Any event that features student artwork, music, and performances"
        },
        {
            btn : "Teacher Takeovers",
            detail : "An event that features educators sharing their teaching methods, experiences, and expertise."
        },
        {
            btn : "Workshop & Workshop Wednesdays",
            detail : "Any event that features practical skill-building workshops on topics like coding, writing, public speaking, and more."
        },
        {
            btn : "School Spotlight",
            detail : "Any event that showcases students’  unique programs, initiatives, and success stories."
        },
        {
            btn : "Mentorship Moments",
            detail : "Programs that cover inspiring stories of mentorship and its impact on students' lives, and innovations."
        },
        {
            btn : "Student Voices",
            detail : "An event that amplifies students’ thoughts, ideas, and perspectives on various but high-impact topics  "
        },
        {
            btn : "School Anniversaries and Celebrations",
            detail : "Events covering milestone events and celebrations in schools"
        },
        {
            btn : "Career Conversations",
            detail : "Days, especially where industry professionals share insights and advice with students."
        },
        {
            btn : "Educational Webinars",
            detail : "Exclusive programs that feature professionals to teach important topics and virtual excursions"
        },
        {
            btn : "Science Fairs and Competitions",
            detail : "Events that showcase student-led scientific experiments and innovations."
        },
        {
            btn : "Student Leadership Spotlight",
            detail : "Any program that highlights student leaders and their initiatives."
        },
        {
            btn : "Cultural Exchange Programs",
            detail : "Any program that highlights national or international student exchange experiences and cultural immersion"
        },
        {
            btn : "Alumni Success Stories",
            detail : "Documentaries of and inspiring stories of alumni achievements and their journeys."
        },
        {
            btn : "Debates and Discussions",
            detail : "Organized debates events and discussions on relevant topics, fostering critical thinking, problem solving, innovations, enterprise,and so on."
        },
        {
            btn : "Webinars and Open Classes",
            detail : "Exclusive programs that feature professionals to teach important topics and virtual excursions"
        },
    ] 
    return(
        <section id="event" className="flex flex-col gap-32 text-center xl:px-24 px-8 py-12 text-[20px]">
            <div className="xl:px-44 flex flex-col gap-4">
                <h1 className="text-[#238949] text-[32px]">Programs & Events</h1>
                <small>
                Here are our most preferred programs to be entertained. You can still extend an invite if your program is not
                in this category, but it’s innovative and has great values.
                </small>
            </div>
            <ToggleBoard contents={contents}/>
        </section>
    )
}