import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <Box className="mainPage">
      404 Page Not Found
      <Link to="/">
        {" "}
        <Text style={{ color: "red" }}> Back to Home page</Text>
      </Link>
    </Box>
  );
}

export default PageNotFound;
