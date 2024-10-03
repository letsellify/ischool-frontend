import zeroless from "../assets/zeroless.png";
import letsellify from "../assets/letsellify.png";
import logo from "../assets/logo.png"
export default function Motion() {
  const images = [
    zeroless,
    letsellify,
    logo
  ];

   
  return (
    <div className="wrapper w-full overflow-hidden border flex items-center justify-center pt-32" >
        <div
        className="slider overflow-hidden w-full text-center"
      >
        <p className="text-[32px] text-[#238949]">Our Partners</p>
          <div className="slider-track w-full flex justify-between items-center text-center relative text-[18px] font-[700] py-8">
            {images.map((image, index) => (
                <div key={index} className="w-full text-center justify-center flex gap-2 items-center">
                  <img src={image} alt="" />
                </div>
            ))}
          </div>
        </div>
    </div>
  );
}
