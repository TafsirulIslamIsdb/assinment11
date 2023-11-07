import { Link } from "react-router-dom";


const Jobcard = ({ job }) => {
    const { _id, jobTitle, email,description, deadline, minPrice, maxPrice } = job || {};
    console.log(job);
    return (
        <div >
            <div className="card  bg-sky-300 shadow-xl">
               
                <div className="card-body items-center text-center">
                    <div className="h-40 ">
                    <h2 className="card-title">Title:{jobTitle}</h2>
                    <h2 className="card-title">Deadline:{deadline}</h2>
                    <h2 className="card-title">Price range:{minPrice}-{maxPrice}</h2>
                    <h2 className="card-title mt-5">{description}</h2>
                    </div>
                   
                    
                    <div className="card-actions">
                    <Link to={`/jobsdetails/${_id,email}`}> <button className="btn btn-primary">Bid Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobcard;
{/* <Link to={`/update/${_id}`}>
                            <button className="btn btn-secondary">Update</button>
                        </Link> */}
//const { _id, email, jobTitle, description, category, minPrice, maxPrice } = job || {};
// Job title
// ○ Deadline
// ○ Price range
// ○ Short description
// ○ Bid now Button
