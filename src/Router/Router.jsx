import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/Shared/ErrorPage";
import Home from "../Pages/Home/Home";
import Addjob from "../Pages/Addjobs/Addjob";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Myjobs from "../Pages/Myjobs/Myjobs";
import Update from "../Pages/Myjobs/Update";
import PrivateRoute from "./PrivateRouter";





const router = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>, 
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:<Home></Home>, 
                
                
            }, 
            {
                path: '/addjobs',
                element:<PrivateRoute><Addjob></Addjob></PrivateRoute>, 
                
                
            }, 
            {
                path: '/myjobs',
                element:<PrivateRoute><Myjobs></Myjobs></PrivateRoute>, 
                
                
            }, 
            {
                path: '/jobsdetails/:id',
                element:<PrivateRoute><Myjobs></Myjobs></PrivateRoute>, 
                
                
            }, 
            {
                path: '/update/:id',
                element:<Update></Update>, 
                loader: ({ params }) => fetch(`http://localhost:5001/jobs/${params.id}`)
                
                
            }, 
            {
                path: '/mybids',
                element:<PrivateRoute><Myjobs></Myjobs></PrivateRoute>, 
                
                
            }, 
            {
                path: '/bidrequest',
                element:<PrivateRoute><Myjobs></Myjobs></PrivateRoute>, 
                
                
            }, 

            {
                path: '/login',
                element:<Login></Login>, 
                
                
            }, 
            {
                path: '/register',
                element:<Register></Register>, 
                
                
            }, 
           
          
        ]
    }    
]);

export default router;