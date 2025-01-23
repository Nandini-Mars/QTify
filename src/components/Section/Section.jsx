import React from 'react'
import { useState, useEffect } from 'react';
import './Section.css'
import AlbumCard from '../AlbumCard/AlbumCard.jsx';

import Grid from '@mui/material/Grid2';

const topAlbumURL = "https://qtify-backend-labs.crio.do/albums/top";

function Section() {
    const [topAlbum, setTopAlbum] = useState([]);

    useEffect(() => {
        const fetchAlbums = async () => {
          try {
            const response = await fetch(topAlbumURL);
            const apiData = await response.json();
            console.log(apiData);
            setTopAlbum(apiData);
          } catch (error) {
            console.error("Error fetching data", error);
          }
        };
        fetchAlbums();
      }, []);
      topAlbum.map((data)=>console.log(data.title));
      return (
        <div className="section">
            <div className="sub-section">
                <h3 style={{ color: "white" }}>Top Albums</h3>
                <h4 style={{ color: "#34c94b" }}>Show All</h4>
            </div>

            <div>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {topAlbum.map((album, index) => {
                    return (
                        <AlbumCard 
                            key={index}
                            image={album.image} 
                            follows={album.follows} 
                            title={album.title} 
                            index={index}
                        />
                    );
                })}

</Grid>


            </div>

        </div>
    );
}

export default Section;
