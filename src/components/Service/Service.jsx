import { MdOutlineArrowOutward } from "react-icons/md";
import img1 from "../../assets/Rectangle 27-2.png"
import img2 from "../../assets/Rectangle 27-1.png"
import img3 from "../../assets/Rectangle 27.png"

const Service = () => {
    return (
        <div className="mt-10 mb-28 bg-[#FFFFF5] p-2 lg:p-10 rounded-xl">
            <div>
                {/* first row */}
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
                        <div className="w-full lg:w-72 md:-translate-y-40 lg:-translate-y-40 lg:translate-x-5 space-y-1 rounded-xl md:bg-opacity-80 lg:bg-opacity-80 bg-[#343268] p-4 text-white">
                            <h4 className="font-medium text-2xl">Advanced Technology</h4>
                            <p>Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision.</p>
                        </div>
                    </div>
                </div>
                {/* second row */}
                <div className="flex flex-col md:flex-row lg:flex-row gap-16 mt-16">
                    {/* third div */}
                    <div className="flex-1">
                        <img className="rounded-xl w-full" src={img2} alt="" />
                        <div className="md:absolute lg:absolute w-full md:w-72 lg:w-72 md:-translate-y-40 lg:-translate-y-40 lg:translate-x-5 space-y-1 rounded-xl md:bg-opacity-80 lg:bg-opacity-80 bg-[#343268] p-4 text-white">
                            <h4 className="font-medium text-2xl">Online Doctor Meet</h4>
                            <p>Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision.</p>
                        </div>
                    </div>
                    {/* fourth div */}
                    <div className="flex-1">
                        <img className="rounded-xl" src={img3} alt="" />
                        <div className="md:absolute lg:absolute w-full md:w-72 lg:w-72 md:-translate-y-40 lg:-translate-y-48 lg:translate-x-5 space-y-1 rounded-xl md:bg-opacity-80 lg:bg-opacity-80 bg-[#343268] p-4 text-white">
                            <h4 className="font-medium text-2xl">Consultancy your health</h4>
                            <p>Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;