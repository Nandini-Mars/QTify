import React from "react";
import { Card, CardContent, Typography, Chip } from "@mui/material";
import "./Card.css";

const AlbumCard = () => {
  // Dummy data
  const album = {
    name: "Dummy Album",
    follows: 3500,
    imageUrl: "https://via.placeholder.com/500", // Dummy image URL
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
