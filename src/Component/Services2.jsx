import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Services2 = () => {
    const [alljobs, setalljobs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5001/jobs')
            .then(res => res.json())
            .then(data => setalljobs(data))



    }, [])
    const filteredJobs = alljobs.filter((job) => job.category === 'Graphics Design');
    console.log("tafsirul data", filteredJobs);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredJobs.map(job => <div key={job._id} >
            <div className="card  bg-sky-300 shadow-xl">

                <div className="card-body items-center text-center">
                    <div className="h-40 ">
                        <h2 className="card-title">Title:{job.jobTitle}</h2>
                        <h2 className="card-title">Deadline:{job.deadline}</h2>
                        <h2 className="card-title">Price range:{job.minPrice}-{job.maxPrice}</h2>
                        <h2 className="card-title mt-5">{job.description}</h2>
                    </div>


                    <div className="card-actions">
                        <Link to={`/jobsdetails/${job._id}`}> <button className="btn btn-primary">Bid Now</button></Link>
                    </div>
                </div>
            </div>

        </div>)}
    </div>
    );
};

export default Services2;