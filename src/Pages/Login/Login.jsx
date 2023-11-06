import { useContext, useState } from "react";
import {  NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {
    const [Ssuccess, setSsuccess] = useState('')
    const { signIn,handelwithpopup} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handellogin=e=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email,password);
        signIn(email, password)
        .then(result => {
            console.log(result.user);
            setSsuccess(
                Swal.fire({
                    icon: "success",
                    title: "Good job",
                    text: "User Login Successfully",
                    footer: '<a href="">Why do I have this issue?</a>',
                })
            )
            navigate(location?.state ? location.state : '/');

        })
        .catch(error => {
            console.error(error);
        })

    }
    return (
        <div className="max-w-md mx-auto mt-10 bg-slate-600 text-white text-center p-4">
            <h2 className="text-2xl mb-4">Login</h2>
            <form onSubmit={handellogin}>
                <div className="mb-4">
                    <label>Email</label>
                    <input
                        type="email" name="email"
                        className="w-full border p-2"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-4">
                    <label>Password</label>
                    <input
                        type="password" name="password"
                        className="w-full border text-black p-2"
                        placeholder="Enter your password"
                    />
                </div>
                <input type="submit" value="Login" placeholder="Email" className="mb-4 w-1/2 py-2 px-4 btn btn-secondary" />
                
            </form>
            <div className="mt-4">
                <button onClick={handelwithpopup} className="bg-red-500 text-white p-2 rounded">
                    Sign in with Google
                </button>
            </div>
            {
                    Ssuccess && <p>{Ssuccess}</p>

                } 

                <div className='p-5 font-semibold'>
                    <p>If you are new in here? <NavLink to="/register" className='text-blue-700'>Pleace Register</NavLink></p>
                </div>
        </div>
    );
};

export default Login;