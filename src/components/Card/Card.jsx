import React from "react";
import { Card, CardContent, Typography, Chip } from "@mui/material";
import "./CardStyle.css";

const AlbumCard = () => {
  // Dummy data
  const album = {
    name: "Dummy Album",
    follows: 3500,
    imageUrl: "https://qtify-backend-labs.crio.do/albums/top", // Dummy image URL
  };

  return (
    <div className="container">
      <div className="album-card">
        <img className="album-image" src={album.imageUrl} alt={album.name} />
        <CardContent className="album-content">
          <Typography variant="h6" component="div">
            {album.name}
          </Typography>
          <Chip
            label={`${album.follows} follows`}
            size="small"
            color="primary"
            className="follow-chip"
          />
        </CardContent>
      </div>
    </div>
  );
};

export default AlbumCard;
