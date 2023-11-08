import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Distenctjob from "./Distenctjob";


const Myjobs = () => {
    const { user } = useContext(AuthContext);
    const [myjobs, setmyjobs] = useState([]);

    // const url =`https://b8a11-server-side-opal.vercel.app/myjobs?email=${user.email}`;
    useEffect(() => {
        fetch(`https://b8a11-server-side-opal.vercel.app/jobs?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setmyjobs(data))
    }, [user?.email])
    const filteredJobs = myjobs.filter((job) => job.email === user.email);
    console.log(filteredJobs);
    return (
        <div className="gap-5">

            {
                filteredJobs.map(job => <Distenctjob
                    key={job._id}
                    job={job}
                    myjobs={myjobs}
                    setmyjobs={setmyjobs}

                ></Distenctjob>)
            }
        </div>
    );
};

export default Myjobs;