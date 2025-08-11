import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";

import footerApi from "../../api/footerApi.json";
export const Footer=()=>{
    const iconMap={
    MdPlace:<MdPlace/>,
    IoCallSharp:<IoCallSharp/>,
    TbMailPlus: <TbMailPlus />
    }
    return (
        <footer>
            <div className="container grid grid-three-cols footer-container1 footer-mobile">
               {
                footerApi.map((Data,index)=>{
                const{icon,title,address,phone,email}=Data;
                return( 
                <div className="footer-display" key={index}>
                <div>
                <p className="iconMap">{iconMap[icon]}</p>
                </div>
                 <div key={index}>
                  <div className="footer-all">
                  <p className="footer-all">{title}</p>
                  <p className="footer-color">{address}</p>  
                  <p className="footer-color">{phone}</p>
                  <p className="footer-color">{email}</p>
                  </div>
                 </div>
                  </div>

                )
                })
               }
            </div>
            
            <div className="footer2">
            <div className="container grid grid-two-cols footer-mobile">
            <div className="copyright-area">
            <p className="footer-color">
                Copyright &copy:2025, All Right Reserved{" "}
            </p> 
            </div>

            <div className="footer-menu footer2-mobile">
            <ul className="footer-section">
             <li>
                 <NavLink  className="footer-color" to="/">Home</NavLink>
            </li>
             <li>
                 <NavLink className="footer-color">Social</NavLink>
             </li>
             <li>
                <NavLink className="footer-color">Source Code</NavLink>
             </li>
             <li>
                <NavLink className="footer-color" to="/contact">Contact</NavLink>
            </li>
            </ul>
            </div>
            </div>
            </div>
        </footer> 
    )
};