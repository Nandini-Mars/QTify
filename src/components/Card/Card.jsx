import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Chip } from "@mui/material";
import "./CardStyle.css";

// AlbumCard component
const AlbumCard = ({ image, follows, title }) => {
  return (
    <div>
      <div className="album-card">
        <img className="album-image" src={image} alt={title} />
        <CardContent className="album-content">
          <Chip
            label={`${follows} follows`}
            size="small"
            color="primary"
            className="follow-chip"
          />
        </CardContent>
      </div>
      <Typography variant="h6" component="div">
        {title}
      </Typography>
    </div>
  );
};

const URL = "https://qtify-backend-labs.crio.do/albums/top";

function TopAlbum() {
  const [data, setData] = useState([]); // Initialize data as an empty array

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch(URL);
        const apiData = await response.json();
        console.log(apiData); // To inspect the fetched data
        setData(apiData); // Update state with the fetched data
      } catch (error) {
        console.error("Error fetching data", error); // Error handling
      }
    };
    fetchAlbums();
  }, []);

  return (
    <div className="container">
      {/* Ensure this div is wrapping the list of albums */}
      <div className="album-cards top-album">
        {data && data.length > 0 ? (
          data.map((album) => (
            <AlbumCard
              key={album.id}
              image={album.image}
              title={album.title}
              follows={album.follows}
            />
          ))
        ) : (
          <Typography variant="h6" color="textSecondary">
            No albums available
          </Typography>
        )}
      </div>
    </div>
  );
}

export default TopAlbum;
