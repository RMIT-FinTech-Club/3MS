import React from "react";
import { useAuthStore } from "../../../core/store";
import { useHistory } from "react-router-dom";
import LeftArea from "./LeftArea";
import CenterArea from "./CenterArea";
import RightArea from "./RightArea";
import { Grid, GridItem } from "@chakra-ui/layout";
import { useDisclosure } from "@chakra-ui/hooks";

interface Props {}

const OPEN_OFFSET = 2;
const RATIO_TOTAL = 22;
const RATIO_LEFT = 1;
const RATIO_LEFT_OPEN = RATIO_LEFT + OPEN_OFFSET;
const RATIO_RIGHT = 5;
const RATIO_CENTER = RATIO_TOTAL - RATIO_LEFT - RATIO_RIGHT;
const RATIO_CENTER_COLLAPSE = RATIO_CENTER - OPEN_OFFSET;

const Dashboard = (props: Props) => {
	const history = useHistory();
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
			{isOpen ? (
				<GridItem
					rowSpan={2}
					borderRadius="5"
					colSpan={RATIO_LEFT_OPEN}
					bg="white"
					mt="60px"
				>
					<button onClick={onToggle}>Open</button>
					<LeftArea />
				</GridItem>
			) : (
				<GridItem
					rowSpan={2}
					colSpan={RATIO_LEFT}
					borderRadius="5"
					bg="white"
					mt="60px"
				>
					<button onClick={onToggle}>Open</button>
					<LeftArea />
				</GridItem>
			)}

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
