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
        <div className="xl:grid grid-cols-2 flex flex-col gap-x-40 gap-y-4 2x:text-[20px] text-[12px]">
            {contents.map((content, index)=>(
            <div>
                <div 
                className="flex justify-between items-center gap-2 xl:px-6 px-3 py-6 border cursor-pointer hover:shadow-md"
                onClick={()=>handleDropdownClick(index)}>
                    <small>{content.btn}</small>
                    {index !== active ?
                    <CiCirclePlus/>
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