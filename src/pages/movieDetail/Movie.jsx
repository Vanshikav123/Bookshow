import React, {useEffect, useState} from "react"
import "./Movie.css"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
const Movie = () => {
    const [currentMovieDetail, setMovie] = useState()
    const { id } = useParams()

    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [])

    const getData = () => {
        fetch(`https://api.tvmaze.com/shows/${id}`) 
        .then(res => res.json())
        .then(data => setMovie(data))
      //  .then(data=> console.log(data))
    }

    return (
        <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={currentMovieDetail && currentMovieDetail.image && currentMovieDetail.image.original} style={{opacity: 0.4}} />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={currentMovieDetail && currentMovieDetail.image && currentMovieDetail.image.medium} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name" style={{textDecoration:"none",color:'black'}}>{currentMovieDetail && currentMovieDetail.name}</div>
                        <div className="movie__tagline"style={{textDecoration:"none",color:'black'}}>{currentMovieDetail && currentMovieDetail.type}</div>
                        <div className="movie__rating" style={{textDecoration:"none",color:'black'}}>
                            {currentMovieDetail && currentMovieDetail.rating.average} <i class="fas fa-star" />
                           
                        </div>  
                    </div>
                    <div className="movie__detailRightBottom">
                      
                        <div style={{textDecoration:"none", color:"black" ,fontWeight: 'bold', marginTop: '20px'}}>{currentMovieDetail && currentMovieDetail.summary}</div>
                    </div>
                    
                </div>
            </div>
            <div className="movie__links">
            <button className="button"><Link to="/book"> Book the show Now</Link></button>
            </div>
      </div>     
            
    )
}

export default Movie;
