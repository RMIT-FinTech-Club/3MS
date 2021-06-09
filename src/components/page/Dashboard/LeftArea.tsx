import { IconButton } from "@chakra-ui/button";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Stack, Text } from "@chakra-ui/layout";
import React, { Fragment } from "react";
import {
	FaChalkboard,
	FaChartBar,
	FaDashcube,
	FaNetworkWired,
	FaUserFriends,
} from "react-icons/fa";

interface Props {
	onToggle: any;
	isToggled: boolean;
}

const TABS = {
	DASHBOARD: "DASHBOARD",
	NETWORK: "NETWORK",
	STATISTICS: "STATISTICS",
	CONTACT: "CONTACT",
};

const LeftArea = (props: Props) => {
	const handleSwitchTab = (tabName: string) => {
		setTabSelected((tab) => (tab = tabName));
	};
	const [tabSelected, setTabSelected] = React.useState<string>(TABS.DASHBOARD);
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
							<Text ml="3" fontSize="14" fontWeight="normal" color="gray.500">
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
							<Text ml="3" fontSize="14" fontWeight="normal" color="gray.500">
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
							<Text ml="3" fontSize="14" fontWeight="normal" color="gray.500">
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
							<Text ml="3" fontSize="14" fontWeight="normal" color="gray.500">
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
