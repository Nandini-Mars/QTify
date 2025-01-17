import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Chip } from "@mui/material";
import "./AlbumCard.css";

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
      <Typography style={{ color: "white" }} variant="h6" component="div">
        {title}
      </Typography>
    </div>
  );
};

export default AlbumCard;
