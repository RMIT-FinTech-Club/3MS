import React from "react";
import { Box, Center, Divider, SimpleGrid, Text } from "@chakra-ui/layout";
import IntegrationsCard from "./IntegrationsCard";
import { getIntegrations } from "../../../../../core/api/integrations";
import { useQuery, useQueryClient } from "react-query";
import { Skeleton } from "@chakra-ui/skeleton";
import { Spinner } from "@chakra-ui/spinner";

const IntegrationsCenter: React.FC = () => {
	const queryClient = useQueryClient();

	const query = useQuery(
		"integrations",
		async () => {
			return await getIntegrations();
		},

		{
			staleTime: 10000,
		}
	);

	console.log(query);

	return (
		<Box paddingX="10" paddingY="3">
			<Text mb="2" fontSize="25px">
				Integrations
			</Text>
			<Divider mb="5" />
			{query.isLoading || query.isFetching ? (
				<Center h="2xl">
					<Spinner
						thickness="4px"
						speed="0.65s"
						emptyColor="gray.200"
						color="twitter.500"
						size="xl"
					/>
				</Center>
			) : (
				<SimpleGrid
					columns={{
						xl: 4,
						lg: 3,
						md: 2,
						sm: 1,
					}}
					spacing={2}
				>
					{query.data?.map((integration: any) => (
						<Box>
							<IntegrationsCard {...integration} key={integration.name} />
						</Box>
					))}
				</SimpleGrid>
			)}
		</Box>
	);
};

const IntegrationsRight: React.FC = () => {
	return <div>Integrations</div>;
};

export { IntegrationsCenter, IntegrationsRight };
