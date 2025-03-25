import React, { useEffect, useState } from "react";
import './TitleCards.css';
import cards_data from "../../assets/cards/Cards_data";
import { useRef } from "react";
import { Link } from "react-router";


function TitleCards({title,category}){
    const cardsRef = useRef();
const [apiData, setApiData] = useState([])

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMGZmNmVmNWFiZTM2Yjg1ZWNhMWVjMDAzMTMxZTNkMSIsIm5iZiI6MTc0MjM4NTI0Mi4yOTcsInN1YiI6IjY3ZGFiMDVhMmJlYTk3NWY4ZGE2ZGQ0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6a4QcfeyhEyLbfAmcDjg9u_S3ueIiOEnAO0vH-TgqUw'
        }
      };
      
    
    const handleWheel = (e) =>{
        e.preventDefault();
        cardsRef.current.scrollLeft += e.deltaY;
    }
    useEffect(() =>{
        fetch(`https://api.themoviedb.org/3/movie/${category? category : "now_playing"}? language=en-US&page=1`, options)
        .then(res => res.json())
        .then(res => setApiData(res.results))

        cardsRef.current.addEventListener('wheel',handleWheel)
    },[]);

return(
    <div className="title-cards">
        <h2> {title ? title : "Popular on netflix"}</h2>
        <div className="card-list" ref={cardsRef}>
            {apiData.map((card,index) =>{
                return <Link to={`/player/${card.id}`} className="card" key={index}>
                    <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" />
                    <p>{card.original_title}</p>
                </Link>
            })};
        </div>
    </div>
)
}
export default TitleCards