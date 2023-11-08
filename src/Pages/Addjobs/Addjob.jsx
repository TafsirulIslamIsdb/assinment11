import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
//import { Navigate } from "react-router-dom";
//import { Navigate } from "react-router-dom";


const Addjob = () => {
    const { user } = useContext(AuthContext);

    const navigate=useNavigate()
    
   

    const handleAddJobs = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.employerEmail.value;
       // console.log(email);
        const jobTitle = form.jobTitle.value;
        const description = form.description.value;
        const category = form.category.value;
        const deadline = form.deadline.value;

        const minPrice = form.minPrice.value;
        const maxPrice = form.maxPrice.value;

        const newJobs = {email , jobTitle, description, deadline,category, minPrice, maxPrice }

        console.log(newJobs);

        fetch('https://b8a11-server-side-opal.vercel.app/jobs', {
            method: 'POST',
            headers: {
                
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJobs)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    navigate( '/myjobs');
                    Swal.fire({
                        title: 'Success!',
                        text: 'Jobs Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'yes'
                    })
                  
                }
                
               // Navigate( location?.state ? location.state :'/myjobs');
            })
    }
    return (

        <div className="bg-slate-600">
            <div className="max-w-md text-center  mx-auto">
                <h1 className="text-2xl font-bold mb-4">Add Job</h1>
                <form  onSubmit={handleAddJobs}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-white">Email of the employer:</label>
                        <input
                            type="text"
                            name="employerEmail"
                            value={user?.email}
                             readOnly

                            className="mt-1 p-2 rounded border border-gray-300 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-white">Job title:</label>
                        <input
                            type="text"
                            name="jobTitle"


                            className="mt-1 p-2 rounded border border-gray-300 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-white">Deadline:</label>
                        <input
                            type="date"
                            name="deadline"


                            className="mt-1 p-2 rounded border border-gray-300 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-white">Description:</label>
                        <textarea
                            name="description"


                            className="mt-1 p-2 rounded border border-gray-300 w-full h-32"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-white">Category:</label>
                        <select
                            name="category"


                            className="mt-1 p-2 rounded border border-gray-300 w-full"
                        >
                            <option >Select Category</option>
                            <option >Web Development</option>
                            <option >Digital Marketing</option>
                            <option >Graphics Design</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-white">Minimum price:</label>
                        <input
                            type="number"
                            name="minPrice"


                            className="mt-1 p-2 rounded border border-gray-300 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-white">Maximum price:</label>
                        <input
                            type="number"
                            name="maxPrice"


                            className="mt-1 p-2 rounded border border-gray-300 w-full"
                        />
                    </div>
                    <div>
                        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                            Add Job
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Addjob;