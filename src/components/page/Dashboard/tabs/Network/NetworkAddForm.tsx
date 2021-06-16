import React from "react";
import { Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

interface Props {
	position: {
		x: number;
		y: number;
	};
}

const NetworkAddForm = (props: Props) => {
	return (
		<Box
			m={4}
			position="absolute"
			top={props.position.y + 90}
			left={props.position.x + 80}
			height={"fit-content"}
			w="350px"
			bg="white"
			zIndex="9"
			borderRadius="5"
			boxShadow="md"
			py="3"
			px="4"
		>
			<FormControl id="email" mb={2} isRequired>
				<FormLabel>Email address</FormLabel>
				<Input placeholder="Enter a valid email" type="email" />
			</FormControl>
			<FormControl id="parent" mb={2}>
				<FormLabel>Parent</FormLabel>
				<Input placeholder="Email of parent node" type="text" />
			</FormControl>
			<FormControl id="pv" mb={2}>
				<FormLabel>Default PV</FormLabel>
				<Input placeholder="Default point value" type="text" />
			</FormControl>
			<FormControl id="position" mb={4}>
				<FormLabel>Position</FormLabel>
				<Input placeholder="Position in the MLM network" type="text" />
			</FormControl>
			<Button
				w="full"
				bg="twitter.400"
				color="white"
				_hover={{
					background: "twitter.300",
				}}
			>
				Add
			</Button>
		</Box>
	);
};

export default NetworkAddForm;
