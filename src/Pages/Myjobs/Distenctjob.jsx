
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Distenctjob = ({ job,  myjobs ,setmyjobs,}) => {
    const { _id, email, jobTitle, description, category, minPrice, maxPrice } = job || {};

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(` http://localhost:5001/jobs/${_id}`, {
                    
                    method: 'DELETE'
                   
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                            )
                            const remaining = myjobs.filter(job => job._id !== _id);
                            setmyjobs(remaining);
                        }
                    })

            }
        })
    }


    return (
        <div className=" flex mx-auto text-white shadow-xl bg-sky-950">
            <div className="flex justify-between w-full border p-3">
                <div className=" text-left p-3">
                    <p> <span className="mr-2">Title:</span>{jobTitle}</p>
                    <p> <span className="mr-2">Email:</span>{email}</p>
                    <p> <span className="mr-2">Description:</span>{description}</p>
                    <p> <span className="mr-2">Catagory:</span>{category}</p>
                    <p> <span className="mr-2">Maxsalary:</span>{minPrice}</p>
                    <p> <span className="mr-2">Minsalary:</span>{maxPrice}</p>


                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">

                        <Link to={`/update/${_id}`}>
                            <button className="btn btn-secondary">Update</button>
                        </Link>
                        <button className="btn bg-orange-500" onClick={() => handleDelete(_id)}>Delete</button>

                       
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Distenctjob;