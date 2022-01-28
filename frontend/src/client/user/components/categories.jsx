import { Box } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
const images = [
  {
    imgPath:
      "https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325__340.jpg",
    label: "Wood",
  },
  {
    imgPath:
      "https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939__340.jpg",
    label: "Decorators",
  },
  {
    imgPath:
      "https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521__340.jpg",
    label: "Tools",
  },
  {
    imgPath:
      "https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681__340.jpg",
    label: "Sunmica",
  },
  {
    imgPath:
      "https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939__340.jpg",
    label: "Sunmica",
  },
  {
    imgPath:
      "https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521__340.jpg",
    label: "Tools",
  },
];
const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid #07a389",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function Categories() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          minWidth: 300,
          width: "100%",
        }}
      >
        {images.map((image) => (
          <ImageButton
            focusRipple
            key={image.label}
            style={{
              marginTop: "50px",
              width: "200px",
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.imgPath})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  textShadow: "1px 0 2px black",
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {image.label}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        ))}
      </Box>
    </>
  );
}
