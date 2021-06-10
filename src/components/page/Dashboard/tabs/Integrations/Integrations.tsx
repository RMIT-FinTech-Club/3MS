import React from "react";
import {
	Box,
	Divider,
	SimpleGrid,
	StackDivider,
	Text,
	VStack,
} from "@chakra-ui/layout";
import IntegrationsCard from "./IntegrationsCard";

const property = {
	name: "Amway",
	imageUrl:
		"https://topcongty.net/upload/companies/amway-vietnam-1028532960.jpg",
	imageAlt: "Amway Logo",
	description:
		'Amway (short for "American Way") is an American multi-level marketing (MLM) company that sells health, beauty, and home care products.',
	networkCount: 10,
	model: "AMW",
};

const IntegrationsCenter: React.FC = () => {
	return (
		<Box paddingX="10" paddingY="3">
			<Text mb="2" fontSize="25px">
				Integrations
			</Text>
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
				<Box>
					<IntegrationsCard {...property} />
				</Box>
				<Box>
					<IntegrationsCard {...property} />
				</Box>
			</SimpleGrid>
		</Box>
	);
};

const IntegrationsRight: React.FC = () => {
	return <div>Integrations</div>;
};

export { IntegrationsCenter, IntegrationsRight };
