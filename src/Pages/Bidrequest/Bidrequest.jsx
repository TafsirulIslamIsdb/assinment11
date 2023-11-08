import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Bidrequestcard from "./Bidrequestcard";


const Bidrequest = () => {
    const { user } = useContext(AuthContext);
    const [alljobs, setalljobs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5001/mybids')
            .then(res => res.json())
            .then(data => setalljobs(data))



    }, [])
    const filteredJobs = alljobs.filter((job) => job.ownermail === user.email);
    console.log("tafsirul data", filteredJobs);
    return (
        <div>
            {
                filteredJobs.map(job=><Bidrequestcard key={job._id} job={job}></Bidrequestcard>)
            }
        </div>
    );
};

export default Bidrequest;