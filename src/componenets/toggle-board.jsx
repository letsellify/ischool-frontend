import { CiCirclePlus } from "react-icons/ci";
import { useState } from "react";
import { FiMinus } from "react-icons/fi";

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
        <div className="xl:grid grid-cols-2 flex flex-col gap-x-40 gap-y-4 text-[20px]">
            {contents.map((content, index)=>(
            <div>
                <div 
                className="flex justify-between items-center px-6 py-6 border cursor-pointer hover:shadow-md"
                onClick={()=>handleDropdownClick(index)}>
                    <small>{content.btn}</small>
                    {index !== active ?
                    <CiCirclePlus size={32}/>
                    :
                    <FiMinus/>
                }
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