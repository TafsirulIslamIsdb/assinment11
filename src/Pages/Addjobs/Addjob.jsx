import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";


const Addjob = () => {
    const {usermail}=useContext(AuthContext)
    console.log(usermail);

    const handleAddJobs = event => {
        event.preventDefault();

        const form = event.target;
        const employerEmail = form.employerEmail.value;
        console.log(employerEmail);
        const jobTitle = form.jobTitle.value;
        const description = form.description.value;
        const category = form.category.value;
        const minPrice = form.minPrice.value;
        const maxPrice = form.maxPrice.value;

        const newJobs = {employerEmail , jobTitle, description, category, minPrice, maxPrice }

        console.log(newJobs);

        fetch(' http://localhost:5001/addjobs', {
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
                    Swal.fire({
                        title: 'Success!',
                        text: 'Jobs Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'yes'
                    })
                }
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