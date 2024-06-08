import React from "react";
import logo from "../assets/Logo.svg";
import {Link} from 'react-router-dom';
import {toast} from 'react-hot-toast';

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setLoggedIn = props.setLoggedIn;

    return (
        <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto h-full">
            <Link to="/">
                <img src={logo} alt="Logo" width={160} height={32} loadimg="lazy" />
            </Link>

            <nav className="flex gap-x-6 text-white">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
                <ul>
                    <li><Link to="/about">About</Link></li>
                </ul>
                <ul>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>

            {/* Login -- Signup -- Logout -- Dashboard */}
            
            <div className="flex items-center gap-x-4">
                { !isLoggedIn &&
                    <Link to="/login">
                        <button className="bg-richblack-800 text-richblack-100
                         py-[8px] px-[12px] rounded-[8px] border-richblack-700">Login</button>
                    </Link>
                }
                { !isLoggedIn &&
                    <Link to="/signup">
                        <button className="bg-richblack-800 text-richblack-100
                    py-[8px] px-[12px] rounded-[8px] border-richblack-700">Signup</button>
                    </Link>
                }
                {/* Logout click krne par jate to home pr h na */}
                { isLoggedIn &&
                    <Link to="/">  
                        <button onClick={ () => {
                        setLoggedIn(false);
                        toast.success("Logged out");
                        }} className="bg-richblack-800 text-richblack-100
                        py-[8px] px-[12px] rounded-[8px] border-richblack-700">logout</button>
                    </Link>
                }
                { isLoggedIn &&
                    <Link to="/dashboard">
                        <button className="bg-richblack-800 text-richblack-100
                         py-[8px] px-[12px] rounded-[8px] border-richblack-700">dashboard</button>
                    </Link>
                }
            </div>

        </div>
    )
}

export default Navbar;
