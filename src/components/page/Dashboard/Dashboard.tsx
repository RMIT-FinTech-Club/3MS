import React from "react";
import { useAuthStore } from "../../../core/store";
import { useHistory } from "react-router-dom";
import LeftArea from "./LeftArea";
import CenterArea from "./CenterArea";
import RightArea from "./RightArea";
import { Grid, GridItem, Stack } from "@chakra-ui/layout";
import { useDisclosure } from "@chakra-ui/hooks";
import { IconButton } from "@chakra-ui/button";
import { HamburgerIcon } from "@chakra-ui/icons";
import { MenuIcon } from "@chakra-ui/menu";

interface Props {}

const OPEN_OFFSET = 1;
const RATIO_TOTAL = 20;
const RATIO_LEFT = 1;
const RATIO_LEFT_OPEN = RATIO_LEFT + OPEN_OFFSET;
const RATIO_RIGHT = 5;
const RATIO_CENTER = RATIO_TOTAL - RATIO_LEFT - RATIO_RIGHT;
const RATIO_CENTER_COLLAPSE = RATIO_CENTER - OPEN_OFFSET;

const Dashboard = (props: Props) => {
	const { isOpen, onToggle } = useDisclosure();
	return (
		<Grid
			h="100vh"
			bg="gray.100"
			p="1"
			templateRows="repeat(2, 1fr)"
			templateColumns={`repeat(${RATIO_TOTAL}, 1fr)`}
			gap={1.5}
		>
			{/* Left sidebar */}
			<GridItem
				rowSpan={2}
				colSpan={isOpen ? RATIO_LEFT_OPEN : RATIO_LEFT}
				borderRadius="5"
				bg="white"
				mt="60px"
				p="2"
			>
				<LeftArea onToggle={onToggle} isToggled={isOpen} />
			</GridItem>
			<GridItem
				colSpan={isOpen ? RATIO_CENTER_COLLAPSE : RATIO_CENTER}
				rowSpan={2}
				bg="white"
				mt="60px"
				borderRadius="5"
			>
				{/* Center area */}
				<CenterArea />
			</GridItem>
			<GridItem
				borderRadius="5"
				colSpan={RATIO_RIGHT}
				rowSpan={2}
				bg="white"
				mt="60px"
			>
				{/* Right sidebar */}
				<RightArea />
			</GridItem>
		</Grid>
	);
};

export default Dashboard;
