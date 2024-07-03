import img1 from "../../assets/Ellipse 10.png"
import img2 from "../../assets/Ellipse 10 (1).png"
import img3 from "../../assets/Ellipse 10 (2).png"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';


const Testimonial = () => {
    return (
        <div className="space-y-6">
            <p className="w-32 text-lg bg-[#FFFFF5] p-4 rounded-full border border-[#343268]">Testimonial</p>
            <h4 className="text-[#343268] text-4xl font-semibold">What they say about us</h4>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 1,
                    },

                    // when window width is >= 640px
                    640: {
                        slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 2,
                    },
                    // when window width is >= 1024px
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper pb-12"
            >
                <SwiperSlide>
                    <div className="p-6 rounded shadow-md text-[#020043] bg-[#FFFFF5]">
                        <h4 className="mb-2 text-xl font-semibold">Expertise and Compassion Combined</h4>
                        <p>I can not thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
                        <div className="flex items-center mt-4 space-x-4">
                            <img src={img1} alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                            <div>
                                <p className=""><span className="text-lg font-semibold">Sarah D,</span> IT professional</p>
                                <div className="rating rating-sm">
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-6"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-6 rounded shadow-md text-[#020043] bg-[#FFFFF5]">
                        <h4 className="mb-2 text-xl font-semibold">Life-Saving Care, Life-Changing Experience</h4>
                        <p>My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.</p>
                        <div className="flex items-center mt-4 space-x-4">
                            <img src={img2} alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                            <div>
                                <p className=""><span className="text-lg font-semibold">Michael R,</span> Business Executive</p>
                                <div className="rating rating-sm">
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-6"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-6 rounded shadow-md text-[#020043] bg-[#FFFFF5]">
                        <h4 className="mb-2 text-xl font-semibold">A Partner in Health and
                            Wellness</h4>
                        <p>As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they have become my trusted partner in health and</p>
                        <div className="flex items-center mt-4 space-x-4">
                            <img src={img3} alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                            <div>
                                <p className=""><span className="text-lg font-semibold">David S,</span> Lawyer</p>
                                <div className="rating rating-sm">
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-6"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-6 rounded shadow-md text-[#020043] bg-[#FFFFF5]">
                        <h4 className="mb-2 text-xl font-semibold">What they say about us</h4>
                        <p>I can not thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
                        <div className="flex items-center mt-4 space-x-4">
                            <img src={img1} alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                            <div>
                                <p className=""><span className="text-lg font-semibold">Sarah D,</span> IT professional</p>
                                <div className="rating rating-sm">
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-6"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-6 rounded shadow-md text-[#020043] bg-[#FFFFF5]">
                        <h4 className="mb-2 text-xl font-semibold">Life-Saving Care, Life-Changing Experience</h4>
                        <p>My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.</p>
                        <div className="flex items-center mt-4 space-x-4">
                            <img src={img2} alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                            <div>
                                <p className=""><span className="text-lg font-semibold">Michael R,</span> Business Executive</p>
                                <div className="rating rating-sm">
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-6"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Testimonial;