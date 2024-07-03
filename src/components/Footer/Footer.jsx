import logo from "../../assets/logo light.png"
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";


const Footer = () => {
    return (
        <div className="mt-28">
            <footer className="footer bg-[#020043] text-white p-10">
                <aside>
                    <img src={logo} alt="" />
                    <p className="mb-3 mt-3">
                        123 Main Street Anytown, USA
                        <br />
                        Postal Code: 12345
                    </p>
                    <p>
                        Support: support@gmail.com
                        <br />
                        Available: 10:00am to 07:00pm
                    </p>
                </aside>
                <nav>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Success Page</a>
                    <a className="link link-hover">Terms and Condition</a>
                </nav>
                <nav>
                    <a className="link link-hover">Services</a>
                    <a className="link link-hover">Scheduling</a>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">Patient Portal</a>
                </nav>
                <nav>
                    <a className="link link-hover">Follow Us</a>
                    <p className="mb-5 link link-hover flex items-center gap-3"><FaFacebook/><FaInstagram/><GrLinkedin/><FaYoutube/></p>
                    <a className="link link-hover">@docplus 2024</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;