import React from "react";
import { Box } from "@mui/material";
import NavBar from "../components/NavBar";
import Carosel from "../components/carosel";
import Categories from "../components/categories";
import Cards from "../components/ProductCard";
export default function ShoppingPage() {

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <NavBar/>
        <Carosel/>
        <Categories/>
        <Cards/>
      </Box>
    </>
  );
}
