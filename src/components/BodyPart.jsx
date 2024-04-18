import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    alignItems="center"
    className="bodyPart-card"
    justifyContent="center"
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
    }}
    sx={
      bodyPart === item
        ? {
            borderTop: "4px solid #FF2625",
            background: "#fff",
            borderBottomLeftRadius: "20px",
            width: "270px",
            height: "282px",
            cursor: "pointer",
            gap: "47px",
          }
        : {
            background: "#fff",
            borderBottomLeftRadius: "20px",
            width: "270px",
            height: "282px",
            cursor: "pointer",
            gap: "47px",
          }
    }
    type="button"
  >
    <img alt="dumbbell" src={Icon} style={{ width: "40px", height: "40px" }} />
    <Typography
      color="#3A1212"
      fontFamily="Alegreya"
      fontSize="24px"
      fontWeight="bold"
      textTransform="capitalize"
    >
      {" "}
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;
