import React from "react";
import {
	Box,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	Table,
	Flex,
	Spacer,
	Center,
	IconButton,
} from "@chakra-ui/react";
import { NetworkState } from "./Network";
import { FcViewDetails } from "react-icons/fc";

interface Props {
	networkState: NetworkState;
}

const NetworkScoreboard = (props: Props) => {
	const [open, setOpen] = React.useState<boolean>(false);
	let distributors = props.networkState.distributors;
	return (
		<Box
			m={4}
			position="absolute"
			top="110px"
			height={"fit-content"}
			bg="white"
			zIndex="10"
			borderRadius="5"
			boxShadow="md"
			py="2"
			px="2"
		>
			<Flex>
				<Center>
					<IconButton
						colorScheme="transparent"
						aria-label="Call Sage"
						fontSize="20px"
						icon={<FcViewDetails />}
						onClick={() => setOpen((open) => (open = !open))}
					/>
				</Center>
				<Spacer />
				{open && (
					<Table size="sm">
						<Thead>
							<Tr>
								<Th>Email</Th>
								<Th>Position</Th>
								<Th>Nodes</Th>
								<Th isNumeric>Point Value (PV)</Th>
								<Th isNumeric>Revenue</Th>
							</Tr>
						</Thead>
						<Tbody>
							{distributors?.map((distributor) => (
								<Tr
									_hover={{
										cursor: "pointer",
										background: "gray.100",
									}}
								>
									<Td>{distributor.email}</Td>
									<Td>{distributor.distributor_position}</Td>
									<Td>{distributor.children ? distributor.children : 0}</Td>
									<Td isNumeric>{distributor.pv}</Td>
									<Td isNumeric>0</Td>
								</Tr>
							))}
						</Tbody>
					</Table>
				)}
			</Flex>
		</Box>
	);
};

export default NetworkScoreboard;
