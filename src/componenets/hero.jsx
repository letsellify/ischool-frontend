export default function Hero(){
    return(
        <div className="hero grid grid-cols-5 items-center h-screen mt-24">
            <div className="col-span-3 flex flex-col gap-8 px-24">
                <p className="text-[57px]">iSchools Media</p>
                <small className="text-[21px]">
                Powered by Mana-Mana School Services Limited is a pioneering
                educational content, aggregator from, and publisher for schools and 
                education-focused organizations to showcase their high-valued, 
                high-impact, and high-quality programs and events.
                </small>
                <button className="bg-gradient-to-r from-[#238949] to-[#153B66] text-white 
                font-medium py-3 px-6 rounded-full hover:from-green-600 hover:to-teal-500 w-1/3">Chat With Us</button>
            </div>
            
        </div>
    )
}