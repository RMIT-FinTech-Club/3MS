import React from "react";
import { Box, Divider, SimpleGrid, Text } from "@chakra-ui/layout";
import IntegrationsCard from "./IntegrationsCard";
import { getIntegrations } from "../../../../../core/api/integrations";
import { useQuery, useQueryClient } from "react-query";
import useGlobalStore from "../../../../../core/store/useGlobalStore";

const IntegrationsCenter: React.FC = () => {
	let integrations = useGlobalStore((state) => state.integrations);
	const integrationsComponent = integrations?.map((integration: any) => (
		<Box>
			<IntegrationsCard {...integration} key={integration.name} />
		</Box>
	));

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
				{integrationsComponent}
			</SimpleGrid>
		</Box>
	);
};

const IntegrationsRight: React.FC = () => {
	return <div>Integrations</div>;
};

export { IntegrationsCenter, IntegrationsRight };
