import { useContext, useEffect, useState} from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Distenctjob from "./Distenctjob";


const Myjobs = () => {
    const { user } = useContext(AuthContext);
   // console.log('tafsir',user.email);
    const [myjobs, setmyjobs] = useState([]);

   // const url =`http://localhost:5001/myjobs?email=${user.email}`;
    useEffect(()=>{
        fetch(`http://localhost:5001/jobs?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setmyjobs(data))
    }, [user?.email])
    
console.log(myjobs);
    return (
        <div className="gap-5">
            
            {
                myjobs.map(job=><Distenctjob 
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