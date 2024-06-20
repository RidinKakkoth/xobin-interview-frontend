import { useState } from 'react';
import images from '../../assets/images';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState("Products");

    return (
        <div className='fixed w-full flex  bg-white  flex-col items-center md:pb-5'>
            <nav className='navbar w-[80%] py-5 px-0 flex justify-between items-center'>
                <Link to='/'>
                    <img src={images.logo} alt="logo" className="logo w-[150px]" />
                </Link>
                <ul id='navbar-menu' className="flex list-none gap-[40px] text-bluegrey text-[17px] font-medium">
                    <li>
                        <Link to='/' onClick={() => setMenu("Products")} className={menu === "Products" ? "active" : ""}>Products</Link>
                    </li>
                    <li>
                        <a href='#' onClick={() => setMenu("Solutions")} className={menu === "Solutions" ? "active" : ""}>Solutions</a>
                    </li>
                    <li>
                        <a href='#' onClick={() => setMenu("Company")} className={menu === "Company" ? "active" : ""}>Company</a>
                    </li>
                    <li>
                        <a href='#' onClick={() => setMenu("Resources")} className={menu === "Resources" ? "active" : ""}>Resources</a>
                    </li>
                    <li>
                        <a href='#' onClick={() => setMenu("Pricing")} className={menu === "Pricing" ? "active" : ""}>Pricing</a>
                    </li>
                </ul>
                <div id='navbar-right' className="flex items-center gap-10">
                    <a className='text-bluegrey hidden lg:block text-[17px] font-medium'>Get Started</a>
                    <button className='text-lg text-white bg-xobin_blue rounded-[4px] px-[30px] py-[10px] font-medium cursor-pointer'>Sign In</button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
