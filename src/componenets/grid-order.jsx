export default function Order({contents, header, btn_style}){
    
    return(
        <div className="flex flex-col gap-40">
        {contents.map((content, index)=>(

       
            <div className="grid grid-cols-2 gap-32 items-center">
                <div className={`${index % 2 === 0 && "order-1 items-center flex w-full"}`}>
                    <img src={content.image} alt="" />
                </div>
                <div className="flex flex-col gap-8 text-[20px]">
                    <p className={`text-[22px] text-${header}`}>{content.header}</p>
                    <small>{content.body}</small>
                    <div className="flex items-center gap-8">
                    <a href="#" className={btn_style}>
                        {content.btn}
                    </a>
                    <a href="#" className={`${!content.btns && "hidden" } ${btn_style}`}>
                        {content.btns}
                    </a>
                    </div>
                </div>
            </div>
             ))}
        </div>
    )
}