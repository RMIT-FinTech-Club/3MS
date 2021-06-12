import React from "react";
import { Box, useColorModeValue, Flex } from "@chakra-ui/react";

interface Props {}

const NetworkToolbar = (props: Props) => {
	return (
		<Box>
			<Flex
				bg={useColorModeValue("white", "gray.800")}
				color={useColorModeValue("gray.600", "white")}
				minH={"57px"}
				py={{ base: 2 }}
				px={{ base: 4 }}
				borderBottom={1}
				borderStyle={"solid"}
				borderColor={useColorModeValue("gray.200", "gray.900")}
				align={"center"}
			>
				Toolbar
			</Flex>
		</Box>
	);
};

export default NetworkToolbar;
