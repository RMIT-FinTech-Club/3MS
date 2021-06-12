import React from "react";
import { Box, Center, Divider, Text } from "@chakra-ui/layout";
import { Flex, Spacer } from "@chakra-ui/react";
import NetworkCard from "./NetworkCard";
import { SimpleGrid } from "@chakra-ui/react";
import NetworkCreation from "./NetworkCreation";

const NetworkCenter: React.FC = () => {
	let networks = [];
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
				{networks.map((p) => (
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
