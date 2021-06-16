import React from "react";
import { Button, IconButton } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { useDisclosure } from "@chakra-ui/hooks";
import { Input } from "@chakra-ui/input";
import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/modal";
import { Box, Flex, HStack, Text } from "@chakra-ui/layout";
import { AddIcon } from "@chakra-ui/icons";
import { Textarea } from "@chakra-ui/textarea";
import useGlobalStore from "../../../../../core/store/useGlobalStore";
import { Img } from "@chakra-ui/image";
import { Tooltip } from "@chakra-ui/tooltip";
import { MSNetwork } from "../../../../../global-types";
import { addNewNetwork } from "../../../../../core/api/networks";
import { useAuthStore } from "../../../../../core/store";
import { v4 as uuidv4 } from "uuid";
import { getDistributor } from "../../../../../core/api/distributors";
import { addNetworkDistributors } from "../../../../../core/api/network_distributors";
import { useToast } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

interface Props {}

const NetworkCreation = (props: Props) => {
	let currentUser = useAuthStore((state) => state.currentUser);
	let setNetwork = useGlobalStore((state) => state.setNetwork);
	const toast = useToast();
	const history = useHistory();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [networkInput, setNetworkInput] = React.useState<MSNetwork>({
		network_id: "",
		badges: [],
		rating: 0,
		point: 0,
		revenue: 0,
		title: "",
		totalPv: 0,
		description: "",
		integration: 0,
		distributorCount: 0,
	});
	let integrations = useGlobalStore((state) => state.integrations);
	const [integrationId, setIntegrationId] = React.useState(1);

	const handleAddNetwork = async () => {
		let integrationModel = integrationId === 1 ? "AMW" : "HBL";
		let distributor = await getDistributor({
			id: currentUser?.id as string,
		});
		let network = await addNewNetwork({
			...networkInput,
			network_id: uuidv4(),
			badges: [integrationModel],
			integration: integrationId,
			distributorCount: networkInput.distributorCount + 1,
		});
		if (distributor?.length > 0 && network?.length > 0) {
			await addNetworkDistributors({
				distributor_id: distributor[0]?.distributor_id,
				network_id: network[0]?.network_id,
				distributor_position: "Unknown",
				pv: 0,
			});
			setNetwork(networkInput);
			toast({
				title: "Network created: " + network[0]?.network_id,
				description: "We've created the network for you.",
				status: "success",
				duration: 9000,
				isClosable: true,
			});
			history.push(`/dashboard/networks/${network[0]?.network_id}`);
		} else {
			toast({
				title: "Distributor or Network not found",
				description: "Something went wrong!",
				status: "error",
				duration: 9000,
				isClosable: true,
			});
		}
	};

	return (
		<>
			<IconButton
				aria-label="Search database"
				bg="transparent"
				onClick={onOpen}
				icon={
					<Flex pl="2">
						<AddIcon />
						<Text ml="3" fontSize="14" pr="2" fontWeight="normal">
							Add
						</Text>
					</Flex>
				}
			/>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Create a new network</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<FormControl>
							<FormLabel>Name</FormLabel>
							<Input
								onChange={(e) =>
									setNetworkInput(
										(input) =>
											(input = {
												...input,
												title: e.target.value,
											})
									)
								}
								placeholder="Your network name."
							/>
						</FormControl>
						<FormControl mt={4}>
							<FormLabel>Description</FormLabel>
							<Textarea
								onChange={(e) =>
									setNetworkInput(
										(input) =>
											(input = {
												...input,
												description: e.target.value,
											})
									)
								}
								placeholder="More information about the network."
							/>
						</FormControl>
						<FormControl mt={4}>
							<FormLabel>Integration</FormLabel>
						</FormControl>
						<HStack spacing={1}>
							{integrations.map((integration) => (
								<Tooltip hasArrow label={integration.name} bg="twitter.600">
									<Box
										h="60px"
										w="60px"
										cursor="pointer"
										overflow="hidden"
										_hover={{
											bg: "gray.400",
										}}
										bg={
											integrationId === integration.id ? "gray.400" : "gray.200"
										}
										borderRadius="10px"
										p="1"
										onClick={() => setIntegrationId(integration.id)}
									>
										<Img
											src={integration.imageUrl}
											objectFit="cover"
											borderRadius="8px"
										/>
									</Box>
								</Tooltip>
							))}
						</HStack>
					</ModalBody>
					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={handleAddNetwork}>
							Add
						</Button>
						<Button onClick={onClose}>Cancel</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default NetworkCreation;
