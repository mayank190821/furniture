import React from "react";
import { Typography } from "@mui/material";
import Login from "../components/login";
import Signup from "../components/signup";
export default function AdminLoginPage() {
  
  return (
    <>
      <div
        className="mainContainer"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div
          className="cont1"
          style={{
            width: "55%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "center",
            background:
            "linear-gradient(15deg, rgb(0 0 0 / 81%), rgb(0 0 0 / 22%)), url('./images/living-room-6399504.jpg') no-repeat center center /cover",
          }}
        >
          <h1
            style={{
              fontFamily: "'Pacifico', 'cursive'",
              fontWeight: "lighter",
              fontSize: "60px",
              textAlign: "center",
              lineHeight: 1,
              //   paddingTop: "160px",
              color: "#00cba9",
              textShadow: "5px 0px 5px black",
            }}
          >
            Kakkar's Furniture
          </h1>
          <Typography
            style={{
              color: "whitesmoke",
              fontSize: "25px",
              textAlign: "center",
              textTransform: "capitalize",
              fontWeight: "bold",
              textShadow: "2px 0 15px black",
            }}
          >
            {" "}
            We serve the best Product
            <br /> Quality is the key of our Success
            <br />
          </Typography>
        </div>
        <div className="cont2" style={{ margin: "auto" }}>
          <Login />
          {/* <Signup></Signup> */}
        </div>
      </div>
    </>
  );
}
