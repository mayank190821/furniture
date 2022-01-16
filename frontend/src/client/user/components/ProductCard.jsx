import React from "react";
import { Box, Tabs, Tab, Card, CardMedia } from "@mui/material";
const products = [
  {
    imgPath:
      "https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325__340.jpg",
    price: "100",
  },
  {
    imgPath:
      "https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939__340.jpg",
    price: "100",
  },
  {
    imgPath:
      "https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521__340.jpg",
    price: "100",
  },
  {
    imgPath:
      "https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681__340.jpg",
    price: "100",
  },
];
export default function ProductCard() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          minWidth: 300,
          marginTop: "20px",
          width: "100%",
          // height: "15vh",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          // orientation="horizontal"
          aria-label="scrollable force tabs example"
          // sx={{ width: "100%", height: "100%" }}
          sx={{ height: "100%" }}
          scrollButtons
          allowScrollButtonsMobile
        >
          {products.map((product) => (
            <Tab label="Hello">
            </Tab>
          ))}
        </Tabs>
      </Box>
    </>
  );
}
