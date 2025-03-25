import React, { useEffect, useState } from "react";
import './Player.css'
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router";
const Player = () =>{
 const [apiData, setApiData] = useState({name:"",
    key:"",
    published_at:"",
    type:""
})
const {id} = useParams()
const navigate = useNavigate()
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMGZmNmVmNWFiZTM2Yjg1ZWNhMWVjMDAzMTMxZTNkMSIsIm5iZiI6MTc0MjM4NTI0Mi4yOTcsInN1YiI6IjY3ZGFiMDVhMmJlYTk3NWY4ZGE2ZGQ0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6a4QcfeyhEyLbfAmcDjg9u_S3ueIiOEnAO0vH-TgqUw'
        }
      };
      useEffect(() =>{
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(res => res.json())
        .then(res => setApiData(res.results[0]))
        .catch(err => console.error(err));
      },[
      
      ])
  

    return (

        <div className="player">
            <img src= {back_arrow_icon} alt="" onClick={() =>{navigate(-2)}}/>
            <iframe src={`https://www.youtube.com/embed/${apiData.key}`} width= "90%" height= "90%" title="trailer" frameborder="0" allowfullscreen></iframe>

            <div className="player-info">
                <p>{apiData.published_at.slice(0,10)}</p>
                <p>{apiData.name}</p>
                <p>{apiData.type}</p>
            </div>
        </div>
    )
}
export default Player