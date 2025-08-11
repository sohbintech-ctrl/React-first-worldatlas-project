import { Outlet } from "react-router-dom";
import { Footer } from "../UI/footer";
import { Header } from "../UI/header";

export const Applayout=()=>{
    return(
    <>
    <Header/>
    <Outlet/>
    <Footer/>
   </>
    )
};