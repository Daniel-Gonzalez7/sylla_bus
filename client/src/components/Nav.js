import React, { useState } from "react";
import { styled, Typography } from "@mui/material/";

const NavHeader = styled(
  Typography,
  {}
)({
  fontSize: 90,
  marginLeft: 25,
});

const NavSubtitle = styled(Typography, {})({ marginLeft: 110 });

const Nav = () => {
  return (
    <>
      <NavHeader>sylla-bus</NavHeader>
      <NavSubtitle>Interactive Syllabus Generator</NavSubtitle>
      <br></br>
      <br></br>
    </>
  );
};

export default Nav;
