import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Songs from "../Songs/Songs";
import { useState, useEffect } from "react";
import AlbumCard from "../AlbumCard/AlbumCard";

import Grid from "@mui/material/Grid2";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

import "./SongTabs.css";

const songURL = "https://qtify-backend-labs.crio.do/songs";

export default function SongTab() {
  const [value, setValue] = React.useState("All");

  const [songData, setSongData] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      const songResponse = await fetch(songURL);
      const songAPIData = await songResponse.json();
      setSongData(songAPIData);
    };
    fetchSongs();
  }, []);

  const [swiperRef, setSwiperRef] = useState(null);

  const handleChange = (event, newValue) => {
    console.log("value:", newValue);
    setValue(newValue);
  };

  const filteredJazzSongs = songData.filter(
    (song, idx) => song.genre.label === "Jazz"
  );
  console.log("Jazz:", filteredJazzSongs);

  const filteredRockSongs = songData.filter(
    (song, idx) => song.genre.label === "Rock"
  );
  console.log("Rock:", filteredRockSongs);

  const filteredPopSongs = songData.filter(
    (song, idx) => song.genre.label === "Pop"
  );
  console.log("Pop:", filteredPopSongs);

  const filteredBluesSongs = songData.filter(
    (song, idx) => song.genre.label === "Blues"
  );
  console.log("Blues:", filteredBluesSongs);

  return (
    <div className="tabs">
      <h1>Songs</h1>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab style={{ color: "white" }} label="All" value="All" />
              <Tab style={{ color: "white" }} label="Jazz" value="Jazz" />
              <Tab style={{ color: "white" }} label="Rock" value="Rock" />
              <Tab style={{ color: "white" }} label="Pop" value="Pop" />
              <Tab style={{ color: "white" }} label="Blues" value="Blues" />
            </TabList>
          </Box>
          <div className="panelTab">
            <TabPanel value="All">
              {songData.map((song, idx) => (
                <Grid container spacing={3}>
                  <Grid size="grow">
                    <AlbumCard
                      image={song.image}
                      follows={song.likes}
                      title={song.title}
                      index={idx}
                    />
                  </Grid>
                </Grid>
              ))}
            </TabPanel>
            <TabPanel value="Jazz">
              {filteredJazzSongs.map((song, idx) => (
                <AlbumCard
                  image={song.image}
                  follows={song.likes}
                  title={song.title}
                  index={idx}
                />
              ))}
            </TabPanel>
            <TabPanel value="Rock">
              {filteredRockSongs.map((song, idx) => (
                <AlbumCard
                  image={song.image}
                  follows={song.likes}
                  title={song.title}
                  index={idx}
                />
              ))}
            </TabPanel>
            <TabPanel value="Pop">
              {filteredPopSongs.map((song, idx) => (
                <AlbumCard
                  image={song.image}
                  follows={song.likes}
                  title={song.title}
                  index={idx}
                />
              ))}
            </TabPanel>
            <TabPanel value="Blues">
              {filteredBluesSongs.map((song, idx) => (
                <AlbumCard
                  image={song.image}
                  follows={song.likes}
                  title={song.title}
                  index={idx}
                />
              ))}
            </TabPanel>
          </div>
        </TabContext>
      </Box>
    </div>
  );
}
