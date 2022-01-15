import Paper from "@mui/material/Paper";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { Button, Stack } from "@mui/material";
const useStyle = makeStyles((theme) => ({
  input: {
    width: "90%",
    height: "35px",
    position: "relative",
    borderTop: "transparent",
    borderLeft: "transparent",
    borderRight: "transparent",
    borderRadius: "0px",
    border: "3px solid grey",
    margin: "10px !important",
    textIndent: "5px",
    fontSize: "17px",
    "&:focus": {
      borderBottom: "3px solid #00cba9",
      outline: "none",
    },
  },
}));
export default function Login() {
  const style = useStyle();
  const [user, setUser] = useState({
    userInput: "",
    password: "",
  });
  const handleChange = (name) => (event) => {
    setUser({ ...user, [name]: event.target.value });
  };
  const validation = () => {
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^(.*[a-z0-9]+@(.*[a-z]\.(.*[a-z])))$/;
    const passwordRegex =
      /^([0-9]*)(?=.*[a-z])(?=.*[!@#$%^&])(?=.*[^a-z0-9A-Z]).{8,20}$/;
    if (emailRegex.test(user.userInput)) {
      console.log("email verified");
    }
    if (phoneRegex.test(user.userInput)) {
      console.log("phone verified");
    }
    console.log(passwordRegex.test(user.password));
    console.log(user.password);
  };
  return (
    <>
      <div>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              width: 378,
              height: 438,
            },
          }}
        >
          <Paper elevation={15} style={{ borderRadius: "10px" }}>
            <h1
              style={{ color: "#00cba9", textAlign: "center", margin: "15px" }}
            >
              Login
            </h1>
            <Stack
              spacing={2}
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
                  placeholder="Phone / Email"
                  onChange={handleChange("userInput")}
                  onKeyUp={validation}
                  required
                />
              </Stack>
              <Stack
                direction="row"
                spacing={2}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <input
                  type="password"
                  className={style.input}
                  placeholder="Password"
                  required
                  onChange={handleChange("password")}
                  onKeyUp={validation}
                />
              </Stack>
              <Stack direction="row" spacing={4}>
                <Stack direction="row" spacing={1}>
                  <input type="checkbox" name="check" id="check" />
                  <label htmlFor="check" id="check">
                    Remember
                  </label>
                </Stack>
                <Stack>
                  <a style={{ textDecoration: "none" }} href="www.com">
                    Forget Password?
                  </a>
                </Stack>
              </Stack>
              <Button
                type="submit"
                variant="contained"
                style={{
                  backgroundColor: "#00cba9",
                  fontWeight: "bold",
                  fontSize: "15px",
                  bottom: -10,
                  zIndex: "2",
                }}
              >
                {" "}
                Login
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
