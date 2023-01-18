import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../component/Error/ErrorPage.js/ErrorPage";
import Layout from "../component/Layout/Layout";
import Main from "../component/Layout/Main/Main";
import Aboute from "../component/Pages/Aboute/Aboute";
import Gallery from "../component/Pages/Gallery/Gallery";
import Profile from "../component/Pages/Profile/Profile";
import ServiceDetails from "../component/Pages/Services/ServiceDetails";
import Services from "../component/Pages/Services/Services";


export const router = createBrowserRouter([

    {
        path:'/',
        element:<Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element:<Main></Main>,
            },
            {
                path:'/home',
                element:<Main></Main>,
            },           
            {
                path:'/about',
                element:<Aboute></Aboute>,
            },           
            {
                path:'/services',
                element:<Services></Services>,
            },           
            {
                path:'/profile',
                element:<Profile></Profile>,
            },           
            {
                path:'/details/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader:({params}) => fetch(`https://data-server-side-sumanta62.vercel.app/courses/${params.id}`)
            },
            {
                path:'/gallery',
                element:<Gallery></Gallery>,
            },
        ]
    }
])