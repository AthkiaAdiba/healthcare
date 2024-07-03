import img from "../../assets/Rectangle 5.png"

const Banner = () => {
    return (
        <div className="mt-10">
            <div
                className="hero h-[500px]"
                style={{
                    backgroundImage: `url(${img})`,
                }}>
                <div className="hero-overlay bg-opacity-30 rounded-3xl"></div>
            </div>
        </div>
    );
};

export default Banner;