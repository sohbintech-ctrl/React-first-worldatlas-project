import { FaLongArrowAltRight } from "react-icons/fa";
export const HeroSection=()=>{
    return(
        <main className="main-section">
        <div className="container grid grid-two-cols hero-mobile">
            <div className="main-content">
            <h1 className="heading-home">Explore the World,One Country at a Time.</h1>
            <p className="paragraph">Discover the history,culture, and beauty of every nation. Sort,search, and filter through countries to find the details you need</p>
            <button className="navbar-button">Start exploring<FaLongArrowAltRight/></button>
            </div>
            <div className="main-image">
                <img src="/images/world.png" alt="worldatlas" className="banner-image"/>
            </div>
        </div>
        </main>
    )
};