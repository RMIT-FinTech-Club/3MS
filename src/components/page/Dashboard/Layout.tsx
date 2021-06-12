import React from "react";
import LeftArea from "./LeftArea";
import CenterArea from "./CenterArea";
import RightArea from "./RightArea";
import { Grid, GridItem } from "@chakra-ui/layout";
import { useDisclosure } from "@chakra-ui/hooks";
import useDashboardStore from "../../../core/store/useDashboardStore";
import { TABS } from "./utils/leftTabs";

interface Props {}

const DashboardLayout = (props: Props) => {
	let route = useDashboardStore((state) => state.tab);
	const { isOpen, onToggle } = useDisclosure();
	let OPEN_OFFSET = 1;
	let RATIO_TOTAL = 20;
	let RATIO_LEFT = 1;
	let RATIO_RIGHT = 5;
	switch (route) {
		case TABS.DASHBOARD:
			break;
		case TABS.NETWORK:
			RATIO_RIGHT = 0;
			break;
		case TABS.CONTACT:
			break;
		case TABS.STATISTICS:
			break;
		case TABS.INTEGRATIONS:
			RATIO_RIGHT = 0;
			break;
		default:
			return <></>;
	}
	let RATIO_LEFT_OPEN = RATIO_LEFT + OPEN_OFFSET;
	let RATIO_CENTER = RATIO_TOTAL - RATIO_LEFT - RATIO_RIGHT;
	let RATIO_CENTER_COLLAPSE = RATIO_CENTER - OPEN_OFFSET;
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
				overflow="scroll"
				css={{
					"&::-webkit-scrollbar": {
						width: "4px",
					},
					"&::-webkit-scrollbar-track": {
						width: "1px",
					},
					"&::-webkit-scrollbar-thumb": {
						background: "lightgray",
						borderRadius: "24px",
					},
				}}
				colSpan={isOpen ? RATIO_CENTER_COLLAPSE : RATIO_CENTER}
				rowSpan={2}
				bg="white"
				mt="60px"
			>
				{/* Center area */}
				<CenterArea />
			</GridItem>
			{RATIO_RIGHT !== 0 && (
				<GridItem colSpan={RATIO_RIGHT} rowSpan={2} bg="white" mt="60px">
					{/* Right sidebar */}
					<RightArea />
				</GridItem>
			)}
		</Grid>
	);
};

export default DashboardLayout;
