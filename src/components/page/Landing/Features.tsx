import { ReactElement } from "react";
import {
	Box,
	SimpleGrid,
	Icon,
	Text,
	Stack,
	Flex,
	Container,
	Heading,
} from "@chakra-ui/react";
import {  FcBusiness, FcCollaboration, FcStatistics } from "react-icons/fc";

interface FeatureProps {
	title: string;
	text: string;
	icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
	return (
		<Stack>
			<Flex
				w={16}
				h={16}
				align={"center"}
				justify={"center"}
				color={"white"}
				rounded={"full"}
				bg={"gray.100"}
				mb={1}
			>
				{icon}
			</Flex>
			<Text fontWeight={600}>{title}</Text>
			<Text color={"gray.600"}>{text}</Text>
		</Stack>
	);
};

export default function Features() {
	return (
		<Box>
			<Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
				<Stack spacing={0} align={"center"}>
					<Heading mb="2">Features</Heading>
					<Text>Cutting edge technologies deliver impeccable features</Text>
				</Stack>
				<SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
					<Feature
						icon={<Icon as={FcCollaboration} w={10} h={10} />}
						title={"Graph View"}
						text={
							"Very simple and user-friendly Tree representing the down-line members.In the form of a tree, it is easy to understand MLM structure."
						}
					/>
					<Feature
						icon={<Icon as={FcBusiness} w={10} h={10} />}
						title={"Multiple MLM Models"}
						text={
							"By integrating several MLM models into our product, the 3ML Management System provides customers with the option that suits their needs to manage their own businesses."
						}
					/>
					<Feature
						icon={<Icon as={FcStatistics} w={10} h={10} />}
						title={"Detail Report"}
						text={
							"With our Report module, Admin can monitor all member transactions and all the users have access to check their own income and revenue."
						}
					/>
				</SimpleGrid>
			</Container>
		</Box>
	);
}
