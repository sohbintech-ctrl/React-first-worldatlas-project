import countryFacts from "../api/Countrydata.json";
export const About=()=>{
    return (
        <section className="about-page container">
        <div className="about-pc">
         <h2 className="about-title">
            Here are the Interesting facts
        <br/>
            we're proud of
         </h2>
         </div>

         <div className="gradient-cards grid grid-three-cols">
            {
                countryFacts.map((country)=>{
                const{id,countryName,capital,population,interestingFact}=country;
                return(
            <div className="card container-card bg-white-box" key={id}>
            <p className="card-title">{countryName}</p>
            <p className="card-mobile">
                <span className="card-description">Capital:</span>
                {capital}
            </p>
             <p className="card-mobile">
                <span className="card-description">population:</span>
                {population}
            </p>
             <p className="card-mobile">
                <span className="card-description">Interesting facts:</span>
                {interestingFact}
            </p>
            </div>
            )
            })
            }
         </div>
        </section>
    )
};