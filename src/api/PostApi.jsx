import axios from "axios";

const api=axios.create({
    baseURL:"https://restcountries.com/v3.1/", 
})

//HTTP GET METHOD
export const getCountryData=()=>{
    return api.get("all?fields=name,population,region,capital,flags");
}
//HTTP GET METHOD for individual Data...
export const getCountryIndiData=(name)=>{
    return api.get(`/name/${name}?fulltext=true&fields=name,population,region,subregion,capital,tld,currencies,borders,flags`);
}

