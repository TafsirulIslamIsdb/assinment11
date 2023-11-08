import { useContext } from "react";
import {  useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const Jobdetails = () => {
    const { user } = useContext(AuthContext);
    const job = useLoaderData();
    console.log(job);
    const {  jobTitle, email, description, deadline, minPrice, maxPrice } = job || {};
    const navigate = useNavigate()

    const handleMyJobs = event => {
        event.preventDefault();

        const form = event.target;
        const Price = form.Price.value;
        const deadline = form.deadline.value;

        const email = form.email.value;
        const ownermail = form.ownermail.value;

        const newJobs = { email, deadline, ownermail, Price }

        console.log(newJobs);

        fetch('http://localhost:5001/mybids', {
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
                    navigate('/mybids');
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

        <div className=" bg-slate-500">
            <div className=" mx-auto w-96 text-white p-5  border-red-500 ">
                <h2 className="card-title">Name:{jobTitle}</h2>
                <h2 className="card-title">Deadline:{deadline}</h2>
                <h2 className="card-title">Price range:{minPrice}-{maxPrice}</h2>
                <h2 className="card-title mt-5">{description}</h2>
            </div>

            <div className="bg-slate-400 text-orange-300 p-24 w-1/2 mx-auto ">
                <form onSubmit={handleMyJobs}>

                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2 lg:w-full">
                            <label className="label">
                                <span className="label-text"> Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2 lg:w-full">
                            <label className="label">
                                <span className="label-text"> Deadline</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="deadline" defaultValue={deadline} placeholder="Product Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2 lg:w-full">
                            <label className="label">
                                <span className="label-text"> Email</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="email" defaultValue={user.email} className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2 lg:w-full">
                            <label className="label">
                                <span className="label-text"> Owner Email</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="ownermail" defaultValue={email}
                                    placeholder="Owner mail" readOnly className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>


                    <button type="submit" disabled={user.email === email ||deadline===Date.now()} 

                   
                    
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                        Add Job
                    </button>

                </form>

            </div>



        </div>



    );
};

export default Jobdetails;