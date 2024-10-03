import logo from "../assets/logo.png";

export default function NavBar(){
    return(
        <nav className="bg-white w-full border flex items-center justify-between px-24 py-4 fixed top-0 z-50">
      
        <div className="flex items-center">
            <img src={logo} alt="Mana-Mana Logo" className="w-36"/>
        </div>

       
        <ul className="flex items-center gap-16 text-lg">
            <li><a href="#" className="hover:text-green-600">Home</a></li>
            <li><a href="#" className="hover:text-green-600">Our Services</a></li>
            <li><a href="#" className="hover:text-green-600">Partnerships</a></li>
            <li><a href="#" className="hover:text-green-600">Programs and Events</a></li>
            <li><a href="#" className="hover:text-green-600">FAQs</a></li>
        </ul>

        <div>
            <a href="#" className="bg-gradient-to-r from-[#238949] to-[#153B66] text-white 
            font-bold py-3 px-6 rounded-full hover:from-green-600 hover:to-teal-500">
                Chat with us
            </a>
        </div>
    </nav>
    )
}