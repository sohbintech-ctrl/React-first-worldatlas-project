import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom"
import { getCountryIndiData } from "../../api/PostApi";
import { Loader } from "../UI/loader";

export const CountryDetails=()=>{
     const params=useParams();
      const[country,setCountry]=useState();
      const[isPending,startTransition]=useTransition();
        
    useEffect(()=>{
       startTransition(async()=>{
             const res=await getCountryIndiData(params.id);
             if(res.status==200){
                setCountry(res.data[0]);
             }
            })
           },[])
           if(isPending) return <Loader/>
    return(
       <section className="container country-details">
        <div className="container-card bg-white-box country-card-mobile">
        {country && (
        <div className="grid grid-two-cols countrydetails-mobile">
       <div className="grid image-details">
        <img src={country.flags.svg} alt={country.flags.alt} className="flag"/>
       </div>
       <div className="country-content">
        <p className="card-title">{country.name.official}</p>
        <div className="country-info">
            <p className="countrydetails-description">
                <span className="card-description">Native Names:</span>
                {
                    Object.keys(country.name.nativeName).map((key)=>country.name.nativeName[key].common).join(",")
                }
            </p>
            <p className="countrydetails-description">
                <span className="card-description">Region:</span>
                {country.population.toLocaleString()}
            </p>
              <p className="countrydetails-description">
                <span className="card-description">Sub Regions:</span>
                {country.subregion}
            </p>
              <p className="countrydetails-description">
                <span className="card-description">Capital:</span>
                {country.capital}
            </p>
              <p className="countrydetails-description">
                <span className="card-description">Top level Domain:</span>
                {country.tld}
            </p>
                <p className="countrydetails-description">
                <span className="card-description">Currencies:</span>
                {
                    Object.keys(country.currencies).map((key)=>country.currencies[key].name).join(",")
                }
            </p>
        </div>
        </div>
        </div>
        )}
        <div className="back-btn">
            <NavLink to="/country">
                <button>Go back</button>
            </NavLink>
        </div>
        </div>
       </section>
    )
}