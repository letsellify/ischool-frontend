export default function Order({contents}){
    
    return(
        <div className="flex flex-col gap-40">
        {contents.map((content, index)=>(

       
            <div className="grid grid-cols-2 gap-32 items-center">
                <div className={`${index % 2 === 0 && "order-1 items-center flex w-full"}`}>
                    <img src={content.image} alt="" />
                </div>
                <div className="flex flex-col gap-8 text-[20px]">
                    <p className="text-[22px] text-[#238949]">{content.header}</p>
                    <small>{content.body}</small>
                    <div className="flex items-center gap-8">
                    <a href="#" className="bg-gradient-to-r from-[#238949] to-[#153B66] text-white 
                    font-normal py-3 px-6 rounded-full hover:from-green-600 hover:to-teal-500">
                        {content.btn}
                    </a>
                    <a href="#" className={`${!content.btns && "hidden" } bg-gradient-to-r from-[#238949] to-[#153B66] text-white 
                    font-normal py-3 px-6 rounded-full hover:from-green-600 hover:to-teal-500`}>
                        {content.btns}
                    </a>
                    </div>
                </div>
            </div>
             ))}
        </div>
    )
}