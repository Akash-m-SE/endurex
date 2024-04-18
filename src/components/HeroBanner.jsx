import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.jpg";

const HeroBanner = () => (
  <Box
    p="20px"
    position="relative"
    sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
  >
    <Typography color="#FF2625" fontSize="26px" fontWeight="600">
      Fitness Club
    </Typography>
    <Typography
      fontWeight={700}
      mb="23px"
      mt="30px"
      sx={{ fontSize: { lg: "44px", xs: "40px" } }}
    >
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontFamily="Alegreya" fontSize="22px" lineHeight="35px">
      Check out the most effective exercises suitable for you
    </Typography>

    <Stack>
      <a
        href="#exercises"
        style={{
          marginTop: "45px",
          textDecoration: "none",
          width: "200px",
          textAlign: "center",
          background: "#FF2625",
          padding: "14px",
          fontSize: "22px",
          textTransform: "none",
          color: "white",
          borderRadius: "4px",
        }}
      >
        Explore Exercises
      </a>
    </Stack>
    <Typography
      color="#FF2625"
      fontWeight={600}
      sx={{
        opacity: "0.1",
        display: { lg: "block", xs: "none" },
        fontSize: "200px",
      }}
    >
      Exercise
    </Typography>
    <img alt="hero-banner" className="hero-banner-img" src={HeroBannerImage} />
  </Box>
);

export default HeroBanner;
