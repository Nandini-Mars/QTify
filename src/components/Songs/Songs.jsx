import React, { useState, useEffect } from "react";
import AlbumCard from "../AlbumCard/AlbumCard.jsx";
import { Typography } from "@mui/material";
import { Autocomplete, TextField, createFilterOptions } from '@mui/material';

import { Swiper, SwiperSlide } from "swiper/react";

import SongTabs from "../SongTabs/SongTabs.jsx";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/bundle'; 
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const Songs = () => {

    const [song, setSong] = useState({});
    const [genre, setGenre] = useState("");

    const songsURL = "https://qtify-backend-labs.crio.do/songs";

    const genresURL = "https://qtify-backend-labs.crio.do/genres";

    useEffect(() => {
        const fetchSongs = async () => {
            const response = await fetch(songsURL);
            const data = await response.json();
            //console.log(data);
            setSong(data);
        }
        fetchSongs();
    },[])

    useEffect(()=>{
        const fetchGenre = async () => {
            const genreResponse = await fetch(genresURL);
            const genreData = await genreResponse.json();
          // console.log(genreData);
            setGenre(genreData);
        }
        fetchGenre();
    },[])

    // const genreList = () => {
    //     console.log("hi");
    //     console.log(genre);
    //     setGenre(genre);
    // }

    return(<div>
        <h3 style={{ color: "white" }}>Songs</h3>
        <SongTabs genreList={genre} songList={song} />       
    </div>)

}

export default Songs;