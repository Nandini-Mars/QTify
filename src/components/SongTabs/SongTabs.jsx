import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Songs from "../Songs/Songs";
import AlbumCard from "../AlbumCard/AlbumCard";



function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({genreList, songList}) {
  const [value, setValue] = React.useState(0);

  //  console.log("Props:", props);
  //  const arr = props;
  //  console.log("Var:", arr);
  //  console.log("Data:", arr.genreList);
  //  console.log("DataDetails:", arr.genreList.data);
  //  const genreData = props.genreList.data;

   //console.log("genreData", genreData);
   const genreData = genreList.data;
   const songData = songList;

   console.log("genre", genreData);
   console.log("song", songData);

   const handleChange = (event, newValue) => {
    setValue(newValue);
  };

   //return(<div style={{ color: "#FFFFFF" }}>Hello</div>)

   //genreData.map((genreDisplay)=>console.log(genreDisplay.label));

   /*return (
    <>
      <h1 style={{ color: "#FFFFFF" }}>Hello, here are the genres:</h1>
      {genreData && genreData.length > 0 ? (
        genreData.map((genreDisplay, index) => (
          <h2 key={index} style={{ color: "#FFFFFF" }}>
            {genreDisplay.label}
          </h2>
        ))
      ) : (
        <p>No genres available</p>
      )}
    </>
  );
  */
  return (
    <>
     
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="#FFFFFF"
          indicatorColor="#FFFFFF"
        >
                {genreData && genreData.length > 0 ? (
        genreData.map((genreDisplay, index) => (
<Tab style={{color:"#FFFFFF"}} label={genreDisplay.label} {...a11yProps(index)} />
        ))
      ) : (
        <p>No genres available</p>
      )}
          
        </Tabs>
      </Box>


{songData && songData.length > 0 ? (
        songData.map((SongDisplay, index) => (
          <CustomTabPanel value={value} style={{color:"#FFFFFF"}}  index={index}>
                      <AlbumCard
              key={SongDisplay.id}
              image={SongDisplay.image}
              title={SongDisplay.title}
              follows={SongDisplay.likes}
            />
        </CustomTabPanel>
        ))
      ) : (
        <p>No genres available</p>
      )}

    </Box>
    </>
  );

  
}