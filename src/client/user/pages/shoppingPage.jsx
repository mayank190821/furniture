import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
// import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import {makeStyles} from "@mui/styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.45),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.55),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const useStyle = makeStyles((theme)=>({
    button:{
        "&:hover":{
            color:"black",
            background:"#66ffb8 !important"
        }
    }
}));

export default function ShoppingPage() {
    const style = useStyle();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: "#07a389" }}>
          <Toolbar>
            <Typography
              //   sx={{flexGrow:1}}
              variant="h5"
              noWrap
              component="div"
              sx={{
                flexGrow: 0.5,
                textShadow: "1px 0 5px black",
                display: { xs: "none", sm: "block" },
                fontWeight: "lighter",
                fontFamily: "'Pacifico', 'cursive'",
              }}
            >
              Kakkar's Furniture
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                sx={{ color: "black" }}
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Button  className={style.button}variant="contained" sx={{ backgroundColor:"white",color:"#07a389",fontWeight:"bold",marginLeft: "auto", marginRight:"15px" }}>
              Login
            </Button>
            <IconButton sx={{color:"white", margin:"0 35px" }} aria-label="add to shopping cart">
              <AddShoppingCartIcon /> 
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
