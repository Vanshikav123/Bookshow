import React, { useEffect, useState } from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "../../components/movielist/Movielist";
const Home = () => {
    const [popularShows,setpopularShows]=useState([])
    
    
    
    
    //api call to render the home page
   useEffect(()=>{
    fetch("https://api.tvmaze.com/search/shows?q=show")
    .then(res=>res.json())
.then(data=>setpopularShows(data))
  // .then(data=>console.log(data))

   },[])


    return (
        <>
     <div className="poster">
        <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
        >
            {
                       popularShows && popularShows.map(shows => (
                           //<span>{shows.show.name }</span>
                           <Link style={{textDecoration:"none",color:"white"}} to={`/shows/${shows.show.id}`} >
                                <div className="posterImage">
                                <img src={shows && shows.show.image && shows.show.image.original} />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{ shows && shows.show.name}</div>
                                    <div className="posterImage__runtime">
                                        {  shows && shows.show.type}
                                        <span className="posterImage__rating">
                                            {  shows && shows.show.rating.average}
                                            <i className="fas fa-star"></i>{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{  shows && shows.show.summary}</div>
                                </div>
                            </Link>
                        ))
                    }

        </Carousel>
        <MovieList/>
     </div>
        </>
    )
   
 
}

export default Home
