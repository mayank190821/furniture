import Paper from "@mui/material/Paper";
import React from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { Button, Stack } from "@mui/material";
const useStyle = makeStyles((theme) => ({
  input: {
    width: "40%",
    height: "35px",
    position: "relative",
    borderTop: "transparent",
    borderLeft: "transparent",
    borderRight: "transparent",
    borderRadius: "0px",
    border: "3px solid grey",
    margin: "10px !important",
    fontSize: "17px",
    "&:focus": {
      borderBottom: "3px solid #00cba9",
      outline: "none",
    },
  },
  inputAdd: {
    width: "85%",
    height: "35px",
    position: "relative",
    borderTop: "transparent",
    borderLeft: "transparent",
    borderRight: "transparent",
    borderRadius: "0px",
    border: "3px solid grey",
    margin: "10px !important",
    fontSize: "17px",
    "&:focus": {
      borderBottom: "3px solid #00cba9",
      outline: "none",
    },
  },
}));
export default function Login() {
  const style = useStyle();
  return (
    <>
      <div>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              width: 458,
              height: 528,
            },
          }}
        >
          <Paper elevation={15} style={{borderRadius:"10px"}}>
            <h1
              style={{ color: "#00cba9", textAlign: "center", margin: "15px" }}
            >
              SignUp
            </h1>
            <Stack
              spacing={1}
              direction="column"
              style={{
                alignItems: "center",
                width: "100%",
                height: "100%",
                position: "relative",
              }}
            >
              <Stack
                direction="row"
                spacing={1}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <input
                  type="text"
                  className={style.input}
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className={style.input}
                  placeholder="Last Name"
                />
              </Stack>
              <Stack
                direction="row"
                spacing={1}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <input
                  type="text"
                  className={style.input}
                  placeholder="Phone Number"
                />
                <input
                  type="email"
                  className={style.input}
                  placeholder="Email"
                />
              </Stack>
              <input
                type="text"
                className={style.inputAdd}
                placeholder="Address"
              />
              <Stack
                direction="row"
                spacing={2}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <input
                  type="password"
                  className={style.input}
                  placeholder="password"
                />
                <input
                  type="password"
                  className={style.input}
                  placeholder="confirm password"
                />
              </Stack>
              <Button
                type="submit"
                variant="contained"
                style={{ backgroundColor: "#00cba9", fontWeight:"bold", fontSize:"15px", bottom:-10 }}
              >
                {" "}
                Sign up
              </Button>
              <svg
                viewBox="0 0 640 325"
                style={{ position: "absolute", bottom: 35 }}
              >
                <path
                  fill="#00cba9"
                  fill-opacity="1"
                  d="M0,224L80,192C160,160,320,96,480,101.3C640,107,800,181,960,208C1120,235,1280,213,1360,202.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                ></path>
              </svg>
            </Stack>
          </Paper>
        </Box>
      </div>
    </>
  );
}
