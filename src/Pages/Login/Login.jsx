import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="max-w-md mx-auto mt-10 p-4">
            <h2 className="text-2xl mb-4">Login</h2>
            <form>
                <div className="mb-4">
                    <label>Email</label>
                    <input
                        type="email"
                        className="w-full border p-2"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-4">
                    <label>Password</label>
                    <input
                        type="password"
                        className="w-full border p-2"
                        placeholder="Enter your password"
                    />
                </div>
                <button className="bg-blue-500 text-white p-2 rounded">
                    Log In
                </button>
            </form>
            <div className="mt-4">
                <button className="bg-red-500 text-white p-2 rounded">
                    Sign in with Google
                </button>
            </div>
            <div className="mt-4">
                <Link to="/registration" className="text-blue-500">
                    Create an account
                </Link>
            </div>
        </div>
    );
};

export default Login;