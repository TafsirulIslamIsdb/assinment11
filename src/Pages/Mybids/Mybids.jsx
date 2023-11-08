import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Mybidscard from "./Mybidscard";



const Mybids = () => {
    const { user } = useContext(AuthContext);
    const [alljobs, setalljobs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5001/mybids')
            .then(res => res.json())
            .then(data => setalljobs(data))



    }, [])
    const filteredJobs = alljobs.filter((job) => job.email === user.email);
    console.log("tafsirul data", filteredJobs);


    return (
        <div>
            {
                filteredJobs.map(job=><Mybidscard key={job._id} job={job}></Mybidscard>)
            }
        </div>
    );
};

export default Mybids;