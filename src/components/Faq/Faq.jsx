

const Faq = () => {
    return (
        <div className="mt-32 mb-10 space-y-5">
            <p className="w-20 text-lg bg-[#FFFFF5] p-3 rounded-full border border-[#343268]">Faq</p>
            <h4 className="text-[#343268] text-4xl font-semibold">Frequently Asked Question</h4>
            {/* first question */}
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium bg-[#FFFFF5]"> What are your office hours?</div>
                <div className="collapse-content bg-white">
                    <p>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                </div>
            </div>
            {/* second question */}
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium bg-[#FFFFF5]">How can I schedule an appointment?</div>
                <div className="collapse-content bg-white">
                    <p>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                </div>
            </div>
            {/* third question */}
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium bg-[#FFFFF5]">Do you accept insurance?</div>
                <div className="collapse-content bg-white">
                    <p>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                </div>
            </div>
            {/* fourth question */}
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium bg-[#FFFFF5]">What should I bring to my appointment?</div>
                <div className="collapse-content bg-white">
                    <p>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                </div>
            </div>
            {/* fifth question */}
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium bg-[#FFFFF5]">Do you offer telemedicine appointments?</div>
                <div className="collapse-content bg-white">
                    <p>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;