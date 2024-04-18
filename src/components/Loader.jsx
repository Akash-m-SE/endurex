import React from "react";
import { Stack } from "@mui/material";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => (
  <Stack
    alignItems="center"
    direction="row"
    justifyContent="center"
    width="100%"
  >
    <InfinitySpin color="grey" />
  </Stack>
);

export default Loader;
