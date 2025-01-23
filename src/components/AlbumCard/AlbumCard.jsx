import React from 'react'
import './AlbumCard.css'

import { useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


// function FetchData(){
//     const [topAlbum, setTopAlbum] = useState([]);
//     //const [newAlbum, setNewAlbum] = useState([]);
// }

function AlbumCard({ image, follows, title, index }) {

      return (
        <>
            <div>
            <Card key={index} sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title={title}
      />
                  <CardContent>
    <Stack direction="row" spacing={1}>
      <Chip style={{backgroundColor:"#121212", color:"#FFFFFF"}} label={follows} />
    </Stack>

                  </CardContent>
                  <div className='title'>
                  <Typography className='title' style={{backgroundColor:"#121212", color:"#FFFFFF"}} component="div">
          {title}
        </Typography>
                  </div>
                </Card>
            </div>
        </>
      );
    }

export default AlbumCard;
