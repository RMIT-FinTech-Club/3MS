import React, { Profiler } from "react";
import { Box, Center, Divider, Text } from "@chakra-ui/layout";
import { Flex, Spacer } from "@chakra-ui/react";
import NetworkCard from "./NetworkCard";
import { SimpleGrid } from "@chakra-ui/react";
import NetworkCreation from "./NetworkCreation";
import { getNetworks } from "../../../../../core/api/networks";
import { useQuery } from "react-query";
import ReusableSpinner from "../../../../ReusableSpinner";

let onRenderCallback = (
	id, // the "id" prop of the Profiler tree that has just committed
	actualDuration // time spent rendering the committed update
) => {
	console.log(id + "re-render : " + actualDuration);
};

const NetworksCenter: React.FC = () => {
	let query = useQuery("networks", async () => await getNetworks(), {
		cacheTime: 20000,
	});
	return query.isLoading || query.isFetching ? (
		<Center h="2xl">
			<ReusableSpinner />
		</Center>
	) : (
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
				{query?.data?.map((p) => (
					<Profiler id={p.network_id} onRender={onRenderCallback}>
						<Box>
							<NetworkCard {...p} />
						</Box>
					</Profiler>
				))}
			</SimpleGrid>
		</Box>
	);
};

const NetworksRight: React.FC = () => {
	return <div>Network</div>;
};

export { NetworksCenter, NetworksRight };
