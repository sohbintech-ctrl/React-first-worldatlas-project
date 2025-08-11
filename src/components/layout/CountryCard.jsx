import {NavLink} from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
export const CountryCard=({country})=>{
    const{capital,population,name,region,flags}=country;
    return(
        <li>
        <div className="container-card container-card-mobile bg-white-box"> 
           <img src={flags.svg}alt="flags" className="image-mobile"/>

           <div className="country-info">
            <p className="card-title card-title-country">{name.common.length>10?name.common.slice(0,10)+"...":name.common}</p>
            <p className="card-mobile-country">
                <span className="card-description">Population:</span>
                {population.toLocaleString()}
            </p>
            <p className="card-mobile-country">
                <span className="card-description">Region:</span>
                {region}
            </p>
            <p className="card-mobile-country">
                <span className="card-description">Capital</span>
                {capital[0]}
            </p>
            <NavLink to={`/country/${name.common}`}>
                <button className="country-button">Read more <FaLongArrowAltRight /></button>
            </NavLink>
           </div>
        </div>
        </li>
    )
} 