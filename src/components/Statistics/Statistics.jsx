import img1 from "../../assets/Group 15.png"
import img2 from "../../assets/Group 14.png"
import img3 from "../../assets/Group 8.png"
import img4 from "../../assets/Group 14.png"
import img5 from "../../assets/Group 16.png"

const Statistics = () => {
    return (
        <div className="mt-10">
            {/* this title for small and medium device  */}
            <h4 className="block lg:hidden mb-6 text-[#020043] text-3xl font-semibold text-center">Comprehensive Care <br /> for Every Patient</h4>
            <div className="flex flex-col md:flex-col lg:flex-row gap-0 md:gap-1 xl:gap-12">
                <img className="h-[300px] lg:h-full" src={img1} alt="" />
                <div>
                    {/* this title for large device */}
                    <h4 className="hidden lg:block mb-6 text-[#020043] text-5xl font-semibold text-center">Comprehensive Care <br /> for Every Patient</h4>
                    <div className="flex flex-col md:flex-col lg:flex-row gap-0 md:gap-1 xl:gap-10">
                        <img className="h-[300px] lg:h-full" src={img2} alt="" />
                        <div className="lg:mt-20 xl:mt-7">
                            <img className="w-full" src={img3} alt="" />
                        </div>
                        <img className="h-[300px] lg:h-full" src={img4} alt="" />
                    </div>
                </div>
                <img className="h-[300px] lg:h-full" src={img5} alt="" />
            </div>
        </div>
    );
};

export default Statistics;