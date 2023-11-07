import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/Shared/ErrorPage";
import Home from "../Pages/Home/Home";
import Addjob from "../Pages/Addjobs/Addjob";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Myjobs from "../Pages/Myjobs/Myjobs";
import Update from "../Pages/Myjobs/Update";





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
                element:<Addjob></Addjob>, 
                
                
            }, 
            {
                path: '/myjobs',
                element:<Myjobs></Myjobs>, 
                
                
            }, 
            {
                path: '/update/:id',
                element:<Update></Update>, 
                loader: ({ params }) => fetch(`http://localhost:5001/jobs/${params.id}`)
                
                
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