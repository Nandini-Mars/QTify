import React, { useState, useEffect } from "react";
import "./Section.css";
import AlbumCard from ".components/Card/AlbumCard";
import axios from "axios";
import { Card, CardContent, Typography, Chip } from "@mui/material";

const URL = "https://qtify-backend-labs.crio.do/albums/top";

function TopAlbum({ showAll }) {
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

  // Limit the number of albums shown based on showAll prop
  const albumsToShow = showAll ? data : data.slice(0, 5); // Show 5 albums initially

  return (
    <div className="container">
      <div className="album-cards top-album">
        {data && data.length > 0 ? (
          albumsToShow.map((album) => (
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

const newURL = "https://qtify-backend-labs.crio.do/albums/top";

function NewAlbums({ showAll }) {
  const [data, setData] = useState([]); // Initialize data as an empty array

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch(newURL);
        const apiData = await response.json();
        console.log(apiData); // To inspect the fetched data
        setData(apiData); // Update state with the fetched data
      } catch (error) {
        console.error("Error fetching data", error); // Error handling
      }
    };
    fetchAlbums();
  }, []);

  // Limit the number of albums shown based on showAll prop
  const albumsToShow = showAll ? data : data.slice(0, 5); // Show 5 albums initially

  return (
    <div className="container">
      <div className="album-cards top-album">
        {data && data.length > 0 ? (
          albumsToShow.map((album) => (
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

const Section = () => {
  const [topToggle, setTopToggle] = useState(false); // Default is collapsed (Show All)
  const [newToggle, setNewToggle] = useState(false);

  const handleTopToggle = () => {
    setTopToggle(!topToggle);
  };

  const handleNewToggle = () => {
    setNewToggle(!newToggle);
  };

  return (
    <div>
      <div className="album">
        <h3 style={{ color: "white" }}>Top Albums</h3>
        <h4 style={{ color: "#34c94b" }} onClick={handleTopToggle}>
          {topToggle ? "Collapse All" : "Show All"}
        </h4>
      </div>
      <div>
        <TopAlbum showAll={topToggle} />
      </div>

      <div className="album">
        <h3 style={{ color: "white" }}>New Albums</h3>
        <h4 style={{ color: "#34c94b" }} onClick={handleNewToggle}>
          {newToggle ? "Collapse All" : "Show All"}
        </h4>
      </div>
      <div>
        <NewAlbums showAll={newToggle} />
      </div>
    </div>
  );
};

export default Section;
