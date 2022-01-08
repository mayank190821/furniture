import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useTheme } from "@mui/material/styles";
import React from "react";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
      "https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325__340.jpg",
  },
  {
    imgPath:
      "https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939__340.jpg",
  },
  {
    imgPath:
      "https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521__340.jpg",
  },
  {
    imgPath:
      "https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681__340.jpg",
  },
];
export default function Carosel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <>
      <Box
        sx={{
          maxWidth: "100%",
          position: "relative",
          flexGrow: 1,
          marginTop: "15px",
        }}
      >
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 450,
                    display: "block",
                    maxWidth: "100%",
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.imgPath}
                  alt="img"
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={0}
          sx={{
            background: "none",
            right: "0",
            position: "absolute",
            zIndex: "20",
            top: "0",
            left: 0,
            alignItem: "center",
            width: "inherit",
          }}
          backButton={
            <Button
              sx={{
                left: "0",
                marginleft: "10px",
                alignItems: "center",
                background: "#07a389",
                color: "white",
              }}
              size="large"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </Button>
          }
          nextButton={
            <Button
              size="large"
              sx={{
                alignItems: "center",
                right: "0",
                background: "#07a389",
                color: "white",
              }}
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
        />

        <MobileStepper
          steps={maxSteps}
          position="satic"
          flexGrow={1}
          sx={{
            background: "none",
            justifyContent: "center",
          }}
          activeStep={activeStep}
        />
      </Box>
    </>
  );
}
