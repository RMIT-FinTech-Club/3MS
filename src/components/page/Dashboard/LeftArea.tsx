import { IconButton } from "@chakra-ui/button";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Stack, Text } from "@chakra-ui/layout";
import React, { Fragment } from "react";
import {
	FaChalkboard,
	FaChartBar,
	FaNetworkWired,
	FaUserFriends,
} from "react-icons/fa";
import useDashboardStore from "../../../core/store/useDashboardStore";
import { TABS } from "./utils/leftTabs";

interface Props {
	onToggle: any;
	isToggled: boolean;
}

const LeftArea = (props: Props) => {
	const dashboardStore = useDashboardStore();
	const [tabSelected, setTabSelected] = React.useState<string>(
		dashboardStore.tab
	);
	const handleSwitchTab = (tabName: string) => {
		setTabSelected((tab) => (tab = tabName));
		dashboardStore.switchTab(tabName);
	};
	return (
		<Stack>
			<IconButton
				aria-label="Search database"
				bg="gray.100"
				icon={<HamburgerIcon />}
				onClick={props.onToggle}
			/>
			<IconButton
				aria-label="Search database"
				bg={tabSelected == TABS.DASHBOARD ? "twitter.100" : "transparent"}
				icon={
					<Fragment>
						<FaChalkboard />
						{props.isToggled ? (
							<Text ml="3" fontSize="14" fontWeight="normal">
								Dashboard
							</Text>
						) : (
							<></>
						)}
					</Fragment>
				}
				onClick={() => handleSwitchTab(TABS.DASHBOARD)}
			/>
			<IconButton
				aria-label="Search database"
				bg={tabSelected == TABS.NETWORK ? "twitter.100" : "transparent"}
				icon={
					<Fragment>
						<FaNetworkWired />
						{props.isToggled ? (
							<Text ml="3" fontSize="14" fontWeight="normal">
								Network
							</Text>
						) : (
							<></>
						)}
					</Fragment>
				}
				onClick={() => handleSwitchTab(TABS.NETWORK)}
			/>
			<IconButton
				aria-label="Search database"
				bg={tabSelected == TABS.STATISTICS ? "twitter.100" : "transparent"}
				icon={
					<Fragment>
						<FaChartBar />
						{props.isToggled ? (
							<Text ml="3" fontSize="14" fontWeight="normal">
								Statistics
							</Text>
						) : (
							<></>
						)}
					</Fragment>
				}
				onClick={() => handleSwitchTab(TABS.STATISTICS)}
			/>
			<IconButton
				aria-label="Search database"
				bg={tabSelected == TABS.CONTACT ? "twitter.100" : "transparent"}
				icon={
					<Fragment>
						<FaUserFriends />
						{props.isToggled ? (
							<Text ml="3" fontSize="14" fontWeight="normal">
								Contact
							</Text>
						) : (
							<></>
						)}
					</Fragment>
				}
				onClick={() => handleSwitchTab(TABS.CONTACT)}
			/>
		</Stack>
	);
};

export default LeftArea;
