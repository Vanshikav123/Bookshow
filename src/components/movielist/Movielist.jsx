import React, {useEffect, useState} from "react"
import "./Movielist.css"
import { useParams } from "react-router-dom"
import Card from "../card/Card"

const MovieList = () => {
    
    const [showList, setshowList] = useState([])
    const {type} = useParams()

    useEffect(() => {
       
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
       
        fetch("https://api.tvmaze.com/search/shows?q=show")
        .then(res => res.json())
        .then(data => setshowList(data))
    }

    return (
        <div className="movie__list">
            <h2 className="list__title">SHOWS</h2>
            <div className="list__cards">
                {
                    showList.map(shows => (
                        <Card shows={shows} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList
