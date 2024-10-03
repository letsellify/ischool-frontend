import ToggleBoard from "./toggle-board"
export default function Event(){
    const contents = [
        {
            btn : "Academic Achievements Showcase",
            detail : "Any event that highlights exceptional student projects, research, and innovations."
        },
        {
            btn : "Academic Achievements Showcase",
            detail : "Any event that highlights exceptional student projects, research, and innovations."
        },
        {
            btn : "Academic Achievements Showcase",
            detail : "Any event that highlights exceptional student projects, research, and innovations."
        },
        {
            btn : "Academic Achievements Showcase",
            detail : "Any event that highlights exceptional student projects, research, and innovations."
        },
        {
            btn : "Academic Achievements Showcase",
            detail : "Any event that highlights exceptional student projects, research, and innovations."
        },
    ] 
    return(
        <div className="flex flex-col gap-8 text-center px-24 py-12">
            <h1>Programs & Events</h1>
            <small>
            Here are our most preferred programs to be entertained. You can still extend an invite if your program is not
            in this category, but it’s innovative and has great values.
            </small>
            <ToggleBoard contents={contents}/>
        </div>
    )
}