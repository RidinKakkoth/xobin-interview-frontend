
import { useState } from 'react';
import images from '../../assets/images';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';

const Navbar = () => {
    const [menu, setMenu] = useState("Products");
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();

 

    const handleDropdownClick = () => {
        setShowDropdown(false);
    };

    return (
        <div className='fixed w-full flex bg-white flex-col items-center md:pb-5 z-10'>
            <nav className='navbar w-[80%] py-5 px-0 flex justify-between items-center'>
                <Link to='/'>
                    <img src={images.logo} alt="logo" className="logo w-[150px]" />
                </Link>
                <ul id='navbar-menu' className="flex list-none gap-[40px] text-bluegrey text-[17px] font-medium">
                    <li
                        onMouseEnter={() => setShowDropdown(true)}
                        onMouseLeave={() => setShowDropdown(false)}
                        className="relative"
                    >
                        <Link to='#' onClick={() => setMenu("Products")} className=' py-4'>Products</Link>
                        {showDropdown && (
                            <div
                                onMouseEnter={() => setShowDropdown(true)}
                                onMouseLeave={() => setShowDropdown(false)}
                            >
                                <DropdownMenu onClick={handleDropdownClick} />
                            </div>
                        )}
                    </li>
                    <li>
                        <Link to='#' onClick={() => setMenu("Solutions")} className={menu === "Solutions" ? "active" : ""}>Solutions</Link>
                    </li>
                    <li>
                        <Link to='#' onClick={() => setMenu("Company")} className={menu === "Company" ? "active" : ""}>Company</Link>
                    </li>
                    <li>
                        <Link to='#' onClick={() => setMenu("Resources")} className={menu === "Resources" ? "active" : ""}>Resources</Link>
                    </li>
                    <li>
                        <Link to='#' onClick={() => setMenu("Pricing")} className={menu === "Pricing" ? "active" : ""}>Pricing</Link>
                    </li>
                </ul>
                <div id='navbar-right' className="flex items-center gap-10">
                    <a onClick={() => { navigate('/request-demo') }} className='text-bluegrey cursor-pointer hidden lg:block text-[17px] font-medium'>Get Started</a>
                    <button className='text-lg text-white bg-xobin_blue rounded-[4px] px-5 py-1 font-medium cursor-pointer'>Sign In</button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
