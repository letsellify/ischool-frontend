import green from "../assets/green_1.png";
import red from "../assets/red_1.png";
export default function Cards(){
    return(
        <div className="bg-[#FBFBFB]  px-24 py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
       
        <div className="bg-white shadow-2xl border rounded-2xl px-6 text-center py-12 ">
           
            <h2 className="text-xl font-bold mb-2">Mana-Mana School Services’ Vision</h2>
            <div className="py-8">
                <div className="items-center flex w-full justify-center">
                    <img src={green} width={100} alt="" />
                </div>
            </div>
            <p className="text-gray-600">Our vision is to bridge the value gap in the education sector globally, especially in Nigeria.</p>
        </div>

        
        <div className="bg-white shadow-2xl border rounded-2xl px-6 text-center py-12 mt-12 h-full">
          
            <h2 className="text-xl font-bold mb-2">Mana-Mana School Services’ Mission</h2>
            <div className="py-8">
                <div className="items-center flex w-full justify-center">
                    <img src={red} width={100} alt="" />
                </div>
            </div>
            <p className="text-gray-600">Our core mission is to manage and advance education-focused initiatives that can bridge the value gap in the education sector.</p>
        </div>

       
        <div className="bg-white shadow-2xl border rounded-2xl px-6 text-center py-12">
           
            <h2 className="text-xl font-bold mb-2">iSchools Media’s Vision</h2>
            <div className="py-8">
                <div className="items-center flex w-full justify-center">
                    <img src={green} width={100} alt="" />
                </div>
            </div>
            <p className="text-gray-600">Our vision is to connect educational programs and events with the right audience.</p>
        </div>

       
        <div className="bg-white shadow-2xl border rounded-2xl px-6 text-center py-12 mt-12 h-full">
            
            <h2 className="text-xl font-bold mb-2">iSchools Media’s Mission</h2>
            <div className="py-8">
                <div className="items-center flex w-full justify-center">
                    <img src={red} width={100} alt="" />
                </div>
            </div>
            <p className="text-gray-600">Our core mission is a one-stop-shop platform that gives the deserving schools, education-focused organizations, their programs, and events the publicity and reach.</p>
        </div>
    </div>
        </div>
    )
}