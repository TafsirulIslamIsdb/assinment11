
import { NavLink } from 'react-router-dom';
import erp from '../../assets/Screenshot_1.png'
const ErrorPage = () => {
    return (
        <div className='h-screen flex justify-center items-center '>
           
           
           <img src={erp} alt="" />
           
           <button className='btn btn-primary'><NavLink to="/">Go Home</NavLink></button>
        </div>
    );
};

export default ErrorPage;