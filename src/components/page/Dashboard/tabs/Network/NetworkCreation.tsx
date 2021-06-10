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
import { Flex, Text } from "@chakra-ui/layout";
import { AddIcon } from "@chakra-ui/icons";
import { Textarea } from "@chakra-ui/textarea";

interface Props {}

const NetworkCreation = (props: Props) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

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
							<Input placeholder="Your network name." />
						</FormControl>
						<FormControl mt={4}>
							<FormLabel>Description</FormLabel>
							<Textarea placeholder="More information about the network." />
						</FormControl>
						<FormControl mt={4}>
							<FormLabel>Integration</FormLabel>
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="blue" mr={3}>
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
