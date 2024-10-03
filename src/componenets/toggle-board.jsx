import { CiCirclePlus } from "react-icons/ci";
import { useState } from "react";
export default function ToggleBoard({contents}){
    const [active, setActive] = useState(null);
    const handleDropdownClick = (id) => {
        if (active === id) {
            setActive(null);
        } else {
            setActive(id); 
        }
      };
    return(
        <div className="grid grid-cols-2 gap-x-40 gap-y-4 text-[20px]">
            {contents.map((content, index)=>(
            <div>
                <div 
                className="flex justify-between items-center px-6 py-6 border cursor-pointer hover:shadow-md"
                onClick={()=>handleDropdownClick(index)}>
                    <small>{content.btn}</small>
                    <CiCirclePlus size={32}/>
                </div>
                {index === active &&
                <div className="p-4 shadow-md">
                    <small>{content.detail}</small>
                </div>
                }
            </div>
            ))}
        </div>
    )
}