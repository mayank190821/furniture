import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Stack } from "@mui/material";
import { Box, Card, CardMedia } from "@mui/material";
import { makeStyles } from "@mui/styles";
const products = [
  {
    imgPath:
      "https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325__340.jpg",
    price: "100",
    desc: "Demo",
    name:"sunmica",
  },
  {
    imgPath:
      "https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939__340.jpg",
    price: "100",
    desc: "Demo",
    name:"sunmica",
  },
  {
    imgPath:
      "https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521__340.jpg",
    desc: "Demo",
    price: "100",
    name:"sunmica",
  },
  {
    imgPath:
      "https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681__340.jpg",
    price: "100",
    desc: "Demo",
    name:"sunmica",
  },
  {
    imgPath:
      "https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939__340.jpg",
    price: "100",
    desc: "Demo",
    name:"sunmica",
  },
  {
    imgPath:
      "https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939__340.jpg",
    price: "100",
    desc: "Demo",
    name:"sunmica",
  },
  {
    imgPath:
      "https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939__340.jpg",
    price: "100",
    desc: "Demo",
    name:"sunmica",
  },
  {
    imgPath:
      "https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939__340.jpg",
    price: "100",
    desc: "Demo",
    name:"sunmica",
  },
];
const useStyles = makeStyles((theme) => ({
  onHover: {
    position: "relative",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
}));
export default function ProductCard({type}) {
  const style = useStyles();
  return (
    <>
      <Box
        style={{
          // border: "1px solid red",
          // border:"0.5px solid grey",
          height: "fit-content",
          marginTop: "10vh",
          // marginBottom: "15vh",
          boxShadow: "0 0 10px 2px #80808042",
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap !important",
        }}
      >
        <Stack
          style={{
            borderBottom: "1px solid #80808042",
            margin: "0 15px",
            display: "flex",
            justifyContent: "space-between",
          }}
          direction="row"
        >
          <h2 style={{ color: "#07a389" }}>{(type)?type:"Sunmica"}</h2>
          <div style={{display:"flex", alignItems:"center"}}>

          <Button style={{ color: "#07a389" }}>View All</Button>
          </div>
        </Stack>
        <Stack direction="row" spacing={2} style={{ overflowX: "scroll" }}>
          {products.map((product) => (
            <div style={{ margin: "10px" }}>
              <Card
                sx={{ width: "fit-content !important" }}
                className={style.onHover}
              >
                <CardActionArea sx={{ width: "250px !important" }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.imgPath}
                    alt="kakkar's furniture"
                    sx={{ width: "250px !important" }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      color="#07a389"
                      style={{textAlign:"center"}}
                    >
                      {product.name}
                    </Typography>
                    <Typography
                      component="div"
                      color="text.secondary"
                      style={{textAlign:"center",fontStyle:"italic",textTransform:"capitalize"}}
                    >
                      Shop Now!<br/>Rs. {product.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          ))}
        </Stack>
      </Box>
    </>
  );
}
