import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/gym-logo.png";

const Footer = () => (
  <Box bgcolor="#FFF3F4" mt="80px">
    <Stack
      flexWrap="wrap"
      gap="40px"
      pt="24px"
      px="40px"
      sx={{ alignItems: "center" }}
    >
      <img alt="logo" src={Logo} style={{ width: "100px", height: "100px" }} />
    </Stack>

    <Typography
      mt="41px"
      pb="40px"
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      textAlign="center"
      variant="h5"
    >
      Made with ❤️
    </Typography>
  </Box>
);

export default Footer;
