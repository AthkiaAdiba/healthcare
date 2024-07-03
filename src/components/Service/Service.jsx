import { MdOutlineArrowOutward } from "react-icons/md";
import img1 from "../../assets/Rectangle 27-2.png"
import img2 from "../../assets/Rectangle 27-1.png"
import img3 from "../../assets/Rectangle 27.png"

const Service = () => {
    return (
        <div className="mt-28 mb-20 bg-[#FFFFF5] p-10 rounded-xl">
            <div>
                <div className="flex flex-col md:flex-row lg:flex-row gap-5 lg:gap-20">
                    {/* first div */}
                    <div className="space-y-7 flex-1">
                        <p className="w-24 text-lg bg-[#FFFFF5] p-4 rounded-full border border-[#343268]">Service</p>
                        <h4 className="text-[#343268] text-4xl font-semibold">Empowering Health, <br /> Enriching Lives</h4>
                        <p className="text-[#343268] text-lg">We are committed to providing high-quality, <br /> compassionate care to every patient we serve. <br /> Whatever your healthcare needs may be, you can trust <br /> us to be your partner in health and wellness.</p>
                        <a className="btn text-black bg-[#FFC637] text-xl">Appointment<MdOutlineArrowOutward /></a>
                    </div>
                    {/* second div */}
                    <div className="flex-1">
                        <img className="rounded-xl w-full h-full" src={img1} alt="" />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row lg:flex-row gap-16 mt-16">
                    {/* third div */}
                    <div className="flex-1">
                        <img className="rounded-xl w-full" src={img2} alt="" />
                    </div>
                    {/* fourth div */}
                    <div className="flex-1">
                        <img className="rounded-xl h-full" src={img3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;