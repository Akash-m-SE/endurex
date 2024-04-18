import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";

const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="space-around"
    px="20px"
    sx={{
      gap: { sm: "123px", xs: "40px" },
      mt: { sm: "32px", xs: "20px" },
      justifyContent: "none",
    }}
  >
    <Link to="/">
      <img
        alt="logo"
        src={Logo}
        style={{ width: "48px", height: "48px", margin: "0px 20px" }}
      />
    </Link>
    <Stack
      alignItems="flex-end"
      direction="row"
      fontFamily="Alegreya"
      fontSize="24px"
      gap="40px"
    >
      <Link
        style={{
          textDecoration: "none",
          color: "#3A1212",
          borderBottom: "3px solid #FF2625",
        }}
        to="/"
      >
        Home
      </Link>
      <a href="#exercises" style={{ textDecoration: "none", color: "#3A1212" }}>
        Exercises
      </a>
    </Stack>
  </Stack>
);

export default Navbar;
