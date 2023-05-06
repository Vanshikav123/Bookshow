import React,{useEffect,useState} from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./Card.css"
import { Link } from "react-router-dom";

const Card =({shows}) =>{
    const [isLoading,setIsLoading]=useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        },1500)
    },[])
    return (
        <>
        {
            isLoading
            ?
            <div className="cards">
                <SkeletonTheme color='#202020' highlightColor="#444">
                    <Skeleton height={300} duration={2}/>
                </SkeletonTheme>
            </div>
            :
            <Link to={`/shows/${shows.show.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className="cards">
                <img className="cards__img" src={shows && shows.show.image && shows.show.image.original} />
                <div className="cards__overlay">
                    <div className="card__title">{shows && shows.show.name}</div>
                    <div className="card__runtime">
                        { shows && shows.show.type}
                        <span className="card__rating">{ shows && shows.show.rating.average}<i className="fas fa-star" /></span>
                    </div>
                    <div className="card__description">{ shows && shows.show.summary.slice(0,118)+"..." }</div>
                </div>
            </div>
        </Link>
        }
        </>
    )
}
export default Card;