export default function Hero(){
    return(
        <section id="home" className="hero xl:grid flex  xl:grid-cols-5 items-center xl:h-screen xl:py-4 py-32 mt-24">
            <div className="col-span-3 flex flex-col gap-8 xlpx-24 px-8">
                <p className="text-[25px] xl:text-[57px]">iSchools Media</p>
                <small className="xl:text-[21px] text-[14px]">
                Powered by Mana-Mana School Services Limited is a pioneering
                educational content aggregator, and publisher for schools and 
                education-focused organizations to showcase their high-valued, 
                high-impact, and high-quality programs and events.
                </small>
                <a href="https://wa.me/2347064747942" className="bg-gradient-to-r from-[#238949] to-[#153B66] text-white 
                font-medium py-3 px-6 rounded-full hover:from-green-600 text-center hover:to-teal-500 xl:w-1/3 w-1/2">Chat With Us</a>
            </div>
            
        </section>
    )
}