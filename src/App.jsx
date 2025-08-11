import "./App.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { About } from "./pages/About";
import { Contact } from "./pages/contact";
import { Country } from "./pages/country";
import { Home } from "./pages/Home";
import { Applayout } from "./components/layout/Applayout";
import { ErrorPage } from "./pages/Errorpage";
import { CountryDetails } from "./components/layout/CountryDetails";

const router= createBrowserRouter([
  {
    path:"/",
    element:<Applayout/>,
    errorElement:<ErrorPage/>,
    children:[
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"about",
    element:<About/>
  },
  {
    path:"contact",
    element:<Contact/>
  },
  {
    path:"country",
    element:<Country/>
  }, 
    {
    path:"country/:id",
    element:<CountryDetails/>
  }, 
  ]}
]);
export const App=()=>{
  return(
    <RouterProvider router={router}></RouterProvider>
  );
};