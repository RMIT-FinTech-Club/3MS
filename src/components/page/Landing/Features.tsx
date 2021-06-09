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
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";

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
						icon={<Icon as={FcAssistant} w={10} h={10} />}
						title={"Lifetime Support"}
						text={
							"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
						}
					/>
					<Feature
						icon={<Icon as={FcDonate} w={10} h={10} />}
						title={"Unlimited Donations"}
						text={
							"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
						}
					/>
					<Feature
						icon={<Icon as={FcInTransit} w={10} h={10} />}
						title={"Instant Delivery"}
						text={
							"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
						}
					/>
				</SimpleGrid>
			</Container>
		</Box>
	);
}
