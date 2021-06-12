// Sample card from Airbnb
import React from "react";
import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box } from "@chakra-ui/layout";
import { MSNetwork } from "../../../../../global-types";

const NetworkCard = (props: MSNetwork) => {
	return (
		<Box
			maxW="sm"
			borderWidth="1px"
			borderRadius="lg"
			overflow="hidden"
			cursor="pointer"
			_hover={{
				borderColor: "gray.400",
			}}
		>
			<Box p="6">
				<Box d="flex" alignItems="baseline">
					{props.badges.map((badge) => (
						<Badge borderRadius="full" mr="1" px="2" colorScheme="teal.400">
							{badge}
						</Badge>
					))}
					<Box
						color="gray.500"
						fontWeight="semibold"
						letterSpacing="wide"
						fontSize="xs"
						textTransform="uppercase"
						ml="2"
					>
						{props.distributorCount} distributors &bull; {props.totalPv} PV
					</Box>
				</Box>

				<Box
					mt="1"
					fontWeight="semibold"
					as="h4"
					lineHeight="tight"
					isTruncated
				>
					{props.title}
				</Box>

				<Box>Revenue: ${props.revenue}</Box>
				<Box d="flex" mt="2" alignItems="center">
					{Array(5)
						.fill("")
						.map((_, i) => (
							<StarIcon
								key={i}
								color={i < props.rating ? "facebook.300" : "gray.300"}
							/>
						))}
					<Box as="span" ml="2" color="gray.600" fontSize="sm">
						{props.point} rating point
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default NetworkCard;
