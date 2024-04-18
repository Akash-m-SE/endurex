import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Box, Typography } from "@mui/material";

import ExerciseCard from "./ExerciseCard";
import BodyPart from "./BodyPart";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography className="right-arrow" onClick={() => scrollPrev()}>
      <img alt="right-arrow" src={LeftArrowIcon} />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography className="left-arrow" onClick={() => scrollNext()}>
      <img alt="right-arrow" src={RightArrowIcon} />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map((item) => (
      <Box
        itemId={item.id || item}
        key={item.id || item}
        m="0 40px"
        title={item.id || item}
      >
        {bodyParts ? (
          <BodyPart bodyPart={bodyPart} item={item} setBodyPart={setBodyPart} />
        ) : (
          <ExerciseCard exercise={item} />
        )}
      </Box>
    ))}
  </ScrollMenu>
);

export default HorizontalScrollbar;
