// Sample card from Airbnb
import React from "react";
import { Badge, Box, Center } from "@chakra-ui/layout";
import { Img } from "@chakra-ui/image";

interface Props {
	name: string;
	imageUrl: string;
	imageAlt: string;
	description: string;
	networkCount: number;
	model: string;
}

const IntegrationsCard = (props: Props) => {
	return (
		<Box
			minH="400px"
			borderWidth="1px"
			borderRadius="lg"
			overflow="hidden"
			cursor="pointer"
			_hover={{
				borderColor: "gray.400",
			}}
		>
			<Box p="6">
				<Center>
					<Img
						src={props.imageUrl}
						alt={props.imageAlt}
						fallbackSrc="https://via.placeholder.com/150"
					/>
				</Center>
				<Box d="flex" alignItems="baseline">
					<Badge borderRadius="full" mr="1" px="2" colorScheme="teal">
						{props.model}
					</Badge>
					<Box
						color="gray.500"
						fontWeight="semibold"
						letterSpacing="wide"
						fontSize="xs"
						textTransform="uppercase"
						ml="2"
					>
						{props.networkCount} networks used
					</Box>
				</Box>

				<Box
					mt="1"
					fontWeight="semibold"
					as="h4"
					lineHeight="tight"
					isTruncated
				>
					{props.name}
				</Box>

				<Box>{props.description}</Box>
			</Box>
		</Box>
	);
};

export default IntegrationsCard;
