import React from "react";
import { AddIcon } from "@chakra-ui/icons";
import { Box, Center, Divider, Text } from "@chakra-ui/layout";
import { Flex, IconButton, Spacer } from "@chakra-ui/react";
import NetworkCard from "./NetworkCard";
import { SimpleGrid } from "@chakra-ui/react";
import NetworkCreation from "./NetworkCreation";

const property = [
	{
		distributorsCount: 3,
		totalPv: 2300,
		badges: [
			{
				name: "Amway",
				color: "twitter",
			},
		],
		title: "RMIT FinTech Club",
		formattedPrice: "$1,900.00",
		reviewCount: 34,
		rating: 4,
	},
	{
		distributorsCount: 3,
		totalPv: 2300,
		badges: [
			{
				name: "Amway",
				color: "twitter",
			},
		],
		title: "RMIT FinTech Club",
		formattedPrice: "$1,900.00",
		reviewCount: 34,
		rating: 4,
	},
	{
		distributorsCount: 3,
		totalPv: 2300,
		badges: [
			{
				name: "Amway",
				color: "twitter",
			},
		],
		title: "RMIT FinTech Club",
		formattedPrice: "$1,900.00",
		reviewCount: 34,
		rating: 4,
	},
];

const NetworkCenter: React.FC = () => {
	return (
		<Box paddingX="10" paddingY="3">
			<Flex>
				<Text mb="2" fontSize="25px">
					Network
				</Text>
				<Spacer />
				<Center>
					<NetworkCreation />
				</Center>
			</Flex>
			<Divider mb="5" />
			<SimpleGrid
				columns={{
					xl: 4,
					lg: 3,
					md: 2,
					sm: 1,
				}}
				spacing={2}
			>
				{property.map((p) => (
					<Box>
						<NetworkCard {...p} />
					</Box>
				))}
			</SimpleGrid>
		</Box>
	);
};

const NetworkRight: React.FC = () => {
	return <div>Network</div>;
};

export { NetworkCenter, NetworkRight };
