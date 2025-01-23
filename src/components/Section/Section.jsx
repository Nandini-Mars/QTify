import React, { useState, useEffect } from "react";
import "./Section.css";
import AlbumCard from "../AlbumCard/AlbumCard.jsx";

import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const topAlbumURL = "https://qtify-backend-labs.crio.do/albums/top";
const newAlbumURL = "https://qtify-backend-labs.crio.do/albums/new";

function Section() {
  const [topAlbum, setTopAlbum] = useState([]);
  const [topToggle, setTopToggle] = useState(false);
  const [newAlbum, setNewAlbum] = useState([]);

  const [newToggle, setNewToggle] = useState(false);
  const [swiperRef, setSwiperRef] = useState(null);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch(topAlbumURL);
        const apiData = await response.json();
        setTopAlbum(apiData);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchAlbums();
  }, []);

  useEffect(() => {
    const fetchNewAlbums = async () => {
      try {
        const response = await fetch(newAlbumURL);
        const newApiData = await response.json();
        setNewAlbum(newApiData);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchNewAlbums();
  }, []);

  const handleTopToggle = () => {
    setTopToggle((prevState) => !prevState); // Toggle between true/false
  };
  const handleNewToggle = () => {
    setNewToggle((prevState) => !prevState); // Toggle between true/false
  };

  return (
    <>
    <div className="section">
      <div className="sub-section">
        <h3 style={{ color: "white" }}>Top Albums</h3>
        <h4
          style={{ color: "#34c94b", cursor: "pointer" }}
          onClick={handleTopToggle}
        >
          {topToggle ? "Collapse All" : "Show All"}
        </h4>
      </div>

      {/* Conditionally render Swiper component or Grid based on topToggle state */}
      {topToggle ? (
        // Show Swiper/Carousel when topToggle is true
        <div
          style={{ marginTop: "50px", marginLeft: "80px", marginRight: "8px" }}
        >
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={6} // Show 4 slides at once
            centeredSlides={true}
            spaceBetween={6} // Reduced space between slides
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4, // Show 4 slides on larger screens
              },
            }}
          >
            {/* Map each album into a SwiperSlide */}
            {topAlbum.map((album, index) => (
              <SwiperSlide key={index}>
                <AlbumCard
                  image={album.image}
                  follows={album.follows}
                  title={album.title}
                  index={index}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        // Show Grid when topToggle is false (collapsed state)
        <div
          style={{ marginTop: "50px", marginLeft: "80px", marginRight: "8px" }}
        >
          <Grid container spacing={10}>
            {topAlbum.slice(0).map((album, index) => (
              <Grid item xs={12} sm={6} md={3} lg={3} key={index}>
                <AlbumCard
                  image={album.image}
                  follows={album.follows}
                  title={album.title}
                  index={index}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
    <div className="section">
      <div className="sub-section">
        <h3 style={{ color: "white" }}>New Albums</h3>
        <h4
          style={{ color: "#34c94b", cursor: "pointer" }}
          onClick={handleNewToggle}
        >
          {newToggle ? "Collapse All" : "Show All"}
        </h4>
      </div>

      {/* Conditionally render Swiper component or Grid based on newToggle state */}
      {newToggle ? (
        // Show Swiper/Carousel when newToggle is true
        <div
          style={{ marginTop: "50px", marginLeft: "80px", marginRight: "8px" }}
        >
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={6} // Show 4 slides at once
            centeredSlides={true}
            spaceBetween={6} // Reduced space between slides
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4, // Show 4 slides on larger screens
              },
            }}
          >
            {/* Map each album into a SwiperSlide */}
            {newAlbum.map((album, index) => (
              <SwiperSlide key={index}>
                <AlbumCard
                  image={album.image}
                  follows={album.follows}
                  title={album.title}
                  index={index}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        // Show Grid when newToggle is false (collapsed state)
        <div
          style={{ marginTop: "50px", marginLeft: "80px", marginRight: "8px" }}
        >
          <Grid container spacing={10}>
            {newAlbum.slice(0).map((album, index) => (
              <Grid item xs={12} sm={6} md={3} lg={3} key={index}>
                <AlbumCard
                  image={album.image}
                  follows={album.follows}
                  title={album.title}
                  index={index}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
    </>

    
  );
}

export default Section;
