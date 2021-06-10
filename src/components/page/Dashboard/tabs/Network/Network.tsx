import { AddIcon } from "@chakra-ui/icons";
import { Box, Center, Divider, Text } from "@chakra-ui/layout";
import { Flex, IconButton, Spacer } from "@chakra-ui/react";
import React, { Fragment } from "react";

const NetworkCenter: React.FC = () => {
	const handleAddNetwork = () => {};
	return (
		<Box paddingX="10" paddingY="3">
			<Flex>
				<Text mb="2" fontSize="25px">
					Network
				</Text>
				<Spacer />
				<Center>
					<IconButton
						aria-label="Search database"
						bg="transparent"
						icon={
							<Flex pl="2">
								<AddIcon />
								<Text ml="3" fontSize="14" pr="2" fontWeight="normal">
									Add
								</Text>
							</Flex>
						}
						onClick={handleAddNetwork}
					/>
				</Center>
			</Flex>
			<Divider />
		</Box>
	);
};

const NetworkRight: React.FC = () => {
	return <div>Network</div>;
};

export { NetworkCenter, NetworkRight };
