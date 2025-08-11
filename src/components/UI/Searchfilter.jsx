export const SearchFilter=({search,setSearch,filter,setFilter,countries,setCountries})=>{
    const handleInputChange=(e)=>{
        e.preventDefault();
        setSearch(e.target.value);
    }
    const handleSelectChange=(e)=>{
        e.preventDefault();
        setFilter(e.target.value);
    }
    const sortCountries=(value)=>{
        const sortCountry=[...countries].sort((a,b)=>{
            return value=="asc"     
            ?a.name.common.localeCompare(b.name.common)
            :b.name.common.localeCompare(a.name.common);
        });
    setCountries(sortCountry);
    }
    return(
       <section className="grid grid-two-cols container searchfilter-section">
        <div className="searchfilter-responsive-mobile">
        <input type="text" placeholder="search" value={search} onChange={handleInputChange} className="searchfilter-input"/>
        </div>  
        <div className="grid grid-three-cols">
        
        <div>
            <button onClick={()=>sortCountries("asc")} className="btn-order">Asc</button> 
        </div>
        <div>
            <button onClick={()=>sortCountries("des")} className="btn-order">Des</button>
        </div>

       
        <div className="searchfilter">
            <select value={filter} onChange={handleSelectChange} className="searchfilter-select">
                <option value="all">All</option>
                <option value="Africa">Africa</option>
                <option value="America">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>   
            </select>
        </div>
        </div>
       </section>
    )
}