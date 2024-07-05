import React from "react";
import { Flex, View, Image } from "@adobe/react-spectrum";
 // Adjust the path to your image
 // Adjust the path to your profile image

const Navbar = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      UNSAFE_style={{ padding: "16px", backgroundColor: "grey" }}
    >
      <h1>Hava Havai</h1>
      
    </Flex>
  );
};

export default Navbar;
