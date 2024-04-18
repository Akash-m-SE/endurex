import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    <img alt={exercise.name} loading="lazy" src={exercise.gifUrl} />
    <Stack direction="row">
      <Button
        sx={{
          ml: "21px",
          color: "#fff",
          background: "#FFA9A9",
          fontSize: "14px",
          borderRadius: "20px",
          textTransform: "capitalize",
        }}
      >
        {exercise.bodyPart}
      </Button>
      <Button
        sx={{
          ml: "21px",
          color: "#fff",
          background: "#FCC757",
          fontSize: "14px",
          borderRadius: "20px",
          textTransform: "capitalize",
        }}
      >
        {exercise.target}
      </Button>
    </Stack>
    <Typography
      color="#000"
      fontWeight="bold"
      ml="21px"
      mt="11px"
      pb="10px"
      sx={{ fontSize: { lg: "24px", xs: "20px" } }}
      textTransform="capitalize"
    >
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;
