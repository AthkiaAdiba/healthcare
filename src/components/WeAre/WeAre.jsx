import { MdOutlineArrowOutward } from "react-icons/md";
import img from "../../assets/Rectangle 24.png"

const WeAre = () => {
    return (
        <div className="mt-36 mb-10">
            <div className="flex flex-col-reverse md:flex-row lg:flex-row gap-16">
                <div className="flex-1 space-y-0 md:space-y-4 lg:space-y-7">
                    <p className="w-36 text-lg bg-[#FFFFF5] p-4 rounded-full border border-[#343268]">Who We Are</p>
                    <h4 className="text-[#343268] text-4xl font-semibold">We Help To Get Soultions</h4>
                    <p className="text-[#343268] text-lg">We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.</p>
                    <a className="btn text-black bg-[#FFC637] text-xl">Learn More<MdOutlineArrowOutward /></a>
                </div>
                <div className="flex-1">
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <div className="w-full lg:w-72 lg:-translate-y-24 lg:-translate-x-14 space-y-1 rounded-xl bg-[#343268] p-4 text-white">
                        <h4 className="font-medium text-2xl">Our mission is simple</h4>
                        <p>To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeAre;