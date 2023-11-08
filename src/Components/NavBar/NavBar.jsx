import { Link } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";

const NavBar = () => {
    const navLink = <>
        <li><Link className="btn btn-outline" to="/">Home</Link></li>
        <li><Link className="btn btn-outline" to="/">All Food Items</Link></li>
        <li><Link className="btn btn-outline" to="/">Blog</Link></li>
    </>
    return (
        <div className="navbar bg-[#93B1A6] h-16 md:h-28 w-[425px] md:w-full">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <div className="px-6 hidden lg:flex">
                    <ul className="flex gap-6 px-1">
                        {navLink}
                    </ul>
                </div>
            </div>
            <div className="navbar-center h-10 md:h-28">
                <img className="w-16 md:w-32 md:h-full" src={`https://i.ibb.co/XF3Y6xF/canva-modern-restaurant-bar-and-grill-food-logo-q-G0-Jgcwrq-HQ-removebg-preview.png`} alt="" />
            </div>
            <div className="navbar-end md:pr-6">
                <a className="btn border border-black">Login <BiLogIn className="text-xl"></BiLogIn></a>
            </div>
        </div>
    );
};

export default NavBar;