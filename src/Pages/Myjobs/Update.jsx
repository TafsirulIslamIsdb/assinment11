import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {

    const jobs = useLoaderData();
    const { _id,email, jobTitle, description,  minPrice, maxPrice } = jobs;
    console.log(email);

    const handleUpdatejobs = event => {
        event.preventDefault();

        const form = event.target;

        const email = form.employerEmail.value;
        const jobTitle = form.jobTitle.value;
        const description = form.description.value;
        const category = form.category.value;
        const minPrice = form.minPrice.value;
        const maxPrice = form.maxPrice.value;

        const updatedjob = {  email, jobTitle, description, category, minPrice, maxPrice }

        console.log(updatedjob);
        fetch(` http://localhost:5001/jobs/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedjob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'jobs Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }
    return (
        <div className="bg-slate-600">
        <div className="max-w-md text-center  mx-auto">
            <h1 className="text-2xl font-bold mb-4">Update Job</h1>
            <form  onSubmit={handleUpdatejobs}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-white">Email of the employer:</label>
                    <input
                        type="text"
                        name="employerEmail"
                        defaultValue={email}
                         readOnly

                        className="mt-1 p-2 rounded border border-gray-300 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-white">Job title:</label>
                    <input
                        type="text"
                        name="jobTitle"
                        defaultValue={jobTitle}
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
                        defaultValue={description}

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

                        defaultValue={minPrice}
                        className="mt-1 p-2 rounded border border-gray-300 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-white">Maximum price:</label>
                    <input
                        type="number"
                        name="maxPrice"
                        defaultValue={maxPrice}

                        className="mt-1 p-2 rounded border border-gray-300 w-full"
                    />
                </div>
                <div>
                    <button type="submit" className="bg-blue-400 text-white p-2 rounded hover:bg-blue-600">
                        UpdateJob
                    </button>
                </div>
            </form>
        </div>

    </div>
    );
};

export default Update;