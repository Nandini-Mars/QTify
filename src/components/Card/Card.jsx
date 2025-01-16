import React from "react";
import { Card, CardContent, Typography, Chip } from "@mui/material";
import "./CardStyle.css";
import { useEffect, useState } from "react";

const AlbumCard = ({
    image,
    follows,
    title
  }) => {
  
  return (
    <div className="container">
      <div className="album-card">
        <img className="album-image" src={image} alt={title} />
        <CardContent className="album-content">
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Chip
            label={`${follows} follows`}
            size="small"
            color="primary"
            className="follow-chip"
          />
        </CardContent>
      </div>
    </div>
  );
}

  const URL = "https://qtify-backend-labs.crio.do/albums/top";

  function TopAlbum() {
    const [data, setData] = useState();

    useEffect(() => {
        const fetchAlbums = async () => {
            try{
                const response = await fetch(URL);
                const apiData = await response.json();
                console.log(apiData);
                setData(apiData);
            }catch(error){
                console.error("Error ",error)
            }
        }
        fetchAlbums();
    }, [])

    return (
        <div className="container">
          <div className="album-card">
            {data.map((album) => (
                <AlbumCard key={album.id } image={album.image} title={album.title} follows={album.follows}/>
            ))}
          </div>
        </div>
      );
  }


export default TopAlbum;
