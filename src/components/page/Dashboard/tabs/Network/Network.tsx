import React, { Provider } from "react";
import { useParams } from "react-router-dom";
import { getNetwork } from "../../../../../core/api/networks";
import NetworkToolbar from "./NetworkToolbar";
import { useQuery } from "react-query";
import { MSDistributor, MSNetwork } from "../../../../../global-types";
import NetworkVisualizer from "./NetworkVisualizer";
import {
	Grid,
	GridItem,
	Flex,
	Spacer,
	Box,
	Center,
	Text,
	Badge,
	Divider,
	Image,
	Img,
} from "@chakra-ui/react";
import { getIntegrations } from "../../../../../core/api/integrations";
import NetworkChart from "./NetworkChart";

interface Props {}

interface NetworkState {
	toolId: number;
	distributors: MappedMSDistributor[] | null;
}

interface MappedMSDistributor extends MSDistributor {
	position: string;
	network_id: string;
}

let NetworkContext = React.createContext<{
	network: MSNetwork | null;
	networkState: NetworkState;
	setNetworkState: React.Dispatch<React.SetStateAction<NetworkState>> | null;
}>({
	network: null,
	networkState: {
		toolId: 1,
		distributors: null,
	},
	setNetworkState: null,
});

const NetworkCenter = (props: Props) => {
	let { networkId } = useParams<{ networkId: string }>();
	let [networkState, setNetworkState] = React.useState<NetworkState>({
		toolId: 1,
		distributors: null,
	});
	let networkQuery = useQuery(
		"network",
		async () => await getNetwork({ id: networkId })
	);
	if (networkQuery.isError) {
		console.error(networkQuery.error);
	}

	return (
		<NetworkContext.Provider
			value={{
				network: networkQuery.data?.[0],
				networkState,
				setNetworkState,
			}}
		>
			<NetworkToolbar />
			<NetworkVisualizer />
		</NetworkContext.Provider>
	);
};

const NetworkRight = (props: Props) => {
	let { networkId } = useParams<{ networkId: string }>();
	let networkQuery = useQuery(
		"network",
		async () => await getNetwork({ id: networkId })
	);
	let network: MSNetwork | null = networkQuery.data?.[0];
	let integrationsQuery = useQuery(
		"integrations",
		async () => await getIntegrations()
	);
	if (integrationsQuery.isError) {
		console.error(integrationsQuery.error);
	}
	let integration = integrationsQuery.data?.filter(
		(integration) => integration.id === network?.integration
	)[0];

	return (
		<Grid
			templateColumns="repeat(1, 1fr)"
			templateRows="repeat(3, 1fr)"
			height="100%"
			gap={2}
		>
			<GridItem p={5} colSpan={1} rowSpan={1} bg="white">
				<Flex>
					<Text fontSize="xl" fontWeight="semibold">
						{network?.title}
					</Text>
					<Spacer />
					<Center>
						{network?.badges.map((badge) => (
							<Badge
								borderRadius="full"
								mr="1"
								px="2"
								colorScheme="teal"
								height="fit-content"
							>
								{badge}
							</Badge>
						))}
					</Center>
				</Flex>
				<Text mt="2" fontSize="small">
					{network?.description}
				</Text>
				<Divider my="3" />
				<Flex>
					<Box>
						<Text mt="2" fontSize="md" fontWeight="semibold">
							{integration?.name}
						</Text>
						<Text mt="2" fontSize="small">
							{integration?.description}
						</Text>
					</Box>
					<Center ml={2}>
						<Img src={integration?.imageUrl} />
					</Center>
				</Flex>
			</GridItem>
			<GridItem p={5} colSpan={1} rowSpan={2} bg="white">
				<Text fontSize="xl" fontWeight="semibold">
					Statistics
				</Text>
				<Flex>
					<Text mt="2" fontSize="sm">
						Number of distributors
					</Text>
					<Spacer />
					<Text mt="2" fontSize="sm">
						{network?.distributorCount}
					</Text>
				</Flex>
				<Flex>
					<Text mt="2" fontSize="sm">
						Average Point Value (PV)
					</Text>
					<Spacer />
					<Text mt="2" fontSize="sm">
						{network?.totalPv}
					</Text>
				</Flex>
				<Divider my={4} />
				<Text fontSize="xl" fontWeight="semibold">
					Annual Rate of Profit
				</Text>
				<Center mt={2}>
					<NetworkChart />
				</Center>
			</GridItem>
		</Grid>
	);
};

export { NetworkCenter, NetworkRight, NetworkContext };
