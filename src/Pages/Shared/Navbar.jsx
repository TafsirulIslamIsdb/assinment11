 //import { useContext } from "react";
import {  NavLink } from "react-router-dom";
import logo from '../../assets/As11 (1).png'
//import { AuthContext } from "../providers/AuthProvider";
 

const Navbar = () => {

    

    //  const { user, logOut } = useContext(AuthContext);
    

    //  const handleSignOut = () => {
    //     logOut()
    //         .then()
    //         .catch()
    // }


    const navLinks = <>
        <li className="text-slate-300-500"><NavLink to="/">Home</NavLink></li>
        <li className="text-slate-300-500"><NavLink to="/addjobs">AddJobs</NavLink></li>
        <li className="text-slate-300-500"><NavLink to="/myjobs">My Posted Jobs</NavLink></li>
        <li className="text-slate-300-500"><NavLink to="/mybids">My Bids</NavLink></li>
        <li className="text-slate-300-500"><NavLink to="bidrequest">Bid Request</NavLink></li>
        <li className="text-slate-300-500"><NavLink to="/login">Login</NavLink></li>
        <li className="text-slate-300-500"><NavLink to="/register">Register</NavLink></li>
    </>

    return (
        <div className="navbar bg-sky-800 text-white p-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex">
                    <img className="w-14 rounded-full" src={logo} alt="" />
                    <a className="btn btn-ghost normal-case text-xl">Express Skill</a>

                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">

                 {/* {
                    user ?
                        <div className="flex gap-1 items-center">

                            <h2>{user?.displayName}</h2>
                            
                            <img className="rounded-full w-9 h-9" src={user?.photoURL} alt="" />
                            <button onClick={handleSignOut} className="btn">Sign Out</button>
                        </div>
                        :
                        <Link to="/login">
                            <button className="btn">Login</button>
                        </Link>
                }  */}
            </div>
        </div>
    );
};

export default Navbar;