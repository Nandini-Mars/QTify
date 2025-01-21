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
          <div style={{ backgroundColor: "white" }}>
            <Chip
              label={`${follows} follows`}
              size="small"
              style={{
                backgroundColor: "#121212",
                color: "#FFFFFF",
                marginBottom: "5px",
                marginLeft: "4px",
              }}
              className="follow-chip"
            />
          </div>
        </CardContent>
      </div>
      <Typography style={{ color: "white" }} variant="h6" component="div">
        {title}
      </Typography>
    </div>
  );
};

export default AlbumCard;
