import logo from "../../assets/logo dark.png"
import { MdOutlineArrowOutward } from "react-icons/md";

const Navbar = () => {

    const links = <>
        <li><a>Home</a></li>
        <li><a>Services</a></li>
        <li><a>Blog</a></li>
        <li><a>About Us</a></li>
    </>
    return (
        <div className="mt-8">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="text-lg text-[#343268] menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                            <li><a className="btn text-[#343268] text-xl border border-[#343268]">Appointment<MdOutlineArrowOutward /></a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><img src={logo} className="" alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="text-xl text-[#343268] menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="hidden md:block lg:block">
                        <a className="btn text-[#343268] text-xl border border-[#343268]">Appointment<MdOutlineArrowOutward /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;