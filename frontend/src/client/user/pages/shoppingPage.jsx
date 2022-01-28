import React from "react";
import { Box } from "@mui/material";
import NavBar from "../components/NavBar";
import Carosel from "../components/carosel";
import Categories from "../components/categories";
import Cards from "../components/ProductCard";
import Footer from "../components/footer";
export default function ShoppingPage() {

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <NavBar/>
        <Carosel/>
        <Categories/>
        <Cards type="sunmica"/>
        <Cards type="sample"/>
        <Cards type="plywood"/>
        <Cards type="hardware"/>
        <Footer/>
      </Box>
    </>
  );
}
