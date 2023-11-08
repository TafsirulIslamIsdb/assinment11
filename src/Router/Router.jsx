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
import Mybids from "../Pages/Mybids/Mybids";
import Bidrequest from "../Pages/Bidrequest/Bidrequest";
import Jobdetails from "../Pages/Jobdetails/Jobdetails";





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
                element:<PrivateRoute><Jobdetails></Jobdetails></PrivateRoute>, 
                loader: ({ params }) => fetch(` https://b8a11-server-side-opal.vercel.app/jobs/${params.id}`)
                
                
            }, 
            {
                path: '/update/:id',
                element:<Update></Update>, 
                loader: ({ params }) => fetch(`https://b8a11-server-side-opal.vercel.app/jobs/${params.id}`)
                
                
            }, 
            {
                path: '/mybids',
                element:<PrivateRoute><Mybids></Mybids></PrivateRoute>, 
                
                
            }, 
            {
                path: '/bidrequest',
                element:<PrivateRoute><Bidrequest></Bidrequest></PrivateRoute>, 
                
                
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