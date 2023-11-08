

const Bidrequestcard = ({job}) => {
    console.log(job);
    const  { email, deadline, ownermail, Price } =job;
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            
                            <th>Email</th>
                            <th>Deadline</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr className="bg-base-200">
                            <th>1</th>
                            <td>{ownermail}</td>
                            <td>{deadline}</td>
                            <td>{Price}</td>
                            <td>Pending</td>
                            <td>
                                 <button className="btn btn-secondary">Aecept</button>
                                 <button className="btn btn-secondary">Reject</button>
                                 
                                  </td>
                        </tr>
                        
                            
                       
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bidrequestcard;