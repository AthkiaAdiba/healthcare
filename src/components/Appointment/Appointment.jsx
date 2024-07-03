import { MdOutlineArrowOutward } from "react-icons/md";
import img from "../../assets/Rectangle 32.png"
import logo from "../../assets/logo light.png"

const Appointment = () => {
    return (
        <div className="mt-32 lg:mt-40 mb-10">
            <div
                className="relative hero h-[500px] rounded-2xl"
                style={{
                    backgroundImage: `url(${img})`,
                }}>
                <div className="rounded-l-2xl w-full h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#020043] to-[rgba(2, 0, 67, 0.3)]">
                    <div className='space-y-7 w-full lg:w-1/2 pl-3 lg:pl-12'>
                        <h2 className='text-2xl lg:text-5xl font-bold text-white'>Get Your First Appointment at 50% Off!</h2>
                        <div>
                            <button className="mb-5 lg:mb-0 btn border-none text-black bg-[#FFC637] text-xl mr-5">Appointment <MdOutlineArrowOutward /></button>
                            <button className="btn btn-outline border-white text-white">Learn More <MdOutlineArrowOutward /></button>
                        </div>
                    </div>
                </div>
                <img className="absolute top-12 right-12" src={logo} alt="" />
            </div>
        </div>
    );
};

export default Appointment;