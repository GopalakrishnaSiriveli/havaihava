import React from 'react'
import { IoMdHome } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";
import { Flex, View, Text, Heading } from "@adobe/react-spectrum";


const SideBar = () => {
  return (
    <View padding="size-200">
      <Flex direction="column" gap="size-300">
        <Flex direction="row" gap="size-150">
          <Flex alignItems="center" gap="size-100">
            <IoMdHome size={24} color="white" />
            <Text>Home Page</Text>
          </Flex>
          <Flex alignItems="center" gap="size-100">
            <RxDashboard size={20} color="white" />
            <Text>Dashboard</Text>
          </Flex>
        </Flex>
        <Flex direction="column" gap="size-150">
          <Heading
            level={4}
            UNSAFE_style={{ fontWeight: "bold", padding: "5px" }}
          >
            Services
          </Heading>
          <Link to="/airports" className=" px-1 py-1 rounded ">
            Airports
          </Link>
          <Text UNSAFE_style={{ padding: "5px" }}>Media</Text>
        </Flex>
        <Flex direction="column" gap="size-150">
          <Heading
            level={4}
            UNSAFE_style={{ fontWeight: "bold", padding: "5px" }}
          >
            Additional
          </Heading>
          <Text UNSAFE_style={{ padding: "5px" }}>Items A</Text>
          <Text UNSAFE_style={{ padding: "5px" }}>Items B</Text>
          <Text UNSAFE_style={{ padding: "5px" }}>Items C</Text>
          <Text UNSAFE_style={{ padding: "5px" }}>Items D</Text>
          <Text UNSAFE_style={{ padding: "5px" }}>Items E</Text>
          <Text UNSAFE_style={{ padding: "5px" }}>Items F</Text>
        </Flex>
      </Flex>
    </View>
  );
};

export default SideBar;
