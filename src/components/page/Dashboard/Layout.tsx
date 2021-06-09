import React from "react";
import LeftArea from "./LeftArea";
import CenterArea from "./CenterArea";
import RightArea from "./RightArea";
import { Grid, GridItem, Stack } from "@chakra-ui/layout";
import { useDisclosure } from "@chakra-ui/hooks";

interface Props {}

const OPEN_OFFSET = 1;
const RATIO_TOTAL = 20;
const RATIO_LEFT = 1;
const RATIO_LEFT_OPEN = RATIO_LEFT + OPEN_OFFSET;
const RATIO_RIGHT = 5;
const RATIO_CENTER = RATIO_TOTAL - RATIO_LEFT - RATIO_RIGHT;
const RATIO_CENTER_COLLAPSE = RATIO_CENTER - OPEN_OFFSET;

const DashboardLayout = (props: Props) => {
	const { isOpen, onToggle } = useDisclosure();
	return (
		<Grid
			h="100vh"
			bg="gray.100"
			paddingX="1"
			templateRows="repeat(2, 1fr)"
			templateColumns={`repeat(${RATIO_TOTAL}, 1fr)`}
			gap={1.5}
		>
			{/* Left sidebar */}
			<GridItem
				rowSpan={2}
				colSpan={isOpen ? RATIO_LEFT_OPEN : RATIO_LEFT}
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
			>
				{/* Center area */}
				<CenterArea />
			</GridItem>
			<GridItem colSpan={RATIO_RIGHT} rowSpan={2} bg="white" mt="60px">
				{/* Right sidebar */}
				<RightArea />
			</GridItem>
		</Grid>
	);
};

export default DashboardLayout;
