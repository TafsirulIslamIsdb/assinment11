import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { NavLink, useLocation, useNavigate } from "react-router-dom";


const Register = () => {
    const [Eerror, setEerror] = useState('')
    const { createUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    const handelregister=e=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name=form.get('name')
        const email = form.get('email');        
        const password = form.get('password');
        const photoURL =form.get('photoURL')
        
        console.log(name,email,password,photoURL);
        setEerror('')
        if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
            setEerror('Password is not match the criteria')
            return
        }
        createUser(email, password)
        .then(result => {
            console.log(result.user)
            navigate(location?.state ? location.state : '/');
        })
        .catch(error => {
            console.error(error)
        })
       

    }
    
    return (
        <div className="max-w-md mx-auto mt-10 bg-slate-600 text-white text-center p-4">
            <h2 className="text-2xl mb-4">Registration</h2>
            <form  onSubmit={handelregister}>
                <div className="mb-4">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        className="w-full border p-2"
                        placeholder="Enter your name"
                    />
                </div>
                <div className="mb-4">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        className="w-full border p-2"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-4">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        className="w-full border text-black p-2"
                        placeholder="Enter your password"
                    />
                </div>
                <div className="mb-4">
                    <label>Photo URL</label>
                    <input
                        type="text"
                        name="photoURL"
                        className="w-full border text-black p-2"
                        placeholder="Enter your photo URL"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Register
                </button>
            </form>
            {
                    Eerror && <p className="text-red-800">{Eerror}</p>
                }
                {/* {
                    Ssuccess && <p>{Ssuccess}</p>
                } */} 
            
            <div className='p-5 font-semibold'>
                <p>If already have an ccount? <NavLink to="/login" className='text-blue-700'>Pleace Login</NavLink></p>
            </div>
        </div>
    );
};

export default Register;