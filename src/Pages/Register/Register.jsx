

const Register = () => {
    
    return (
        <div className="max-w-md mx-auto mt-10 p-4">
            <h2 className="text-2xl mb-4">Registration</h2>
            <form >
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
                        className="w-full border p-2"
                        placeholder="Enter your password"
                    />
                </div>
                <div className="mb-4">
                    <label>Photo URL</label>
                    <input
                        type="text"
                        name="photoURL"
                        className="w-full border p-2"
                        placeholder="Enter your photo URL"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;