import React, { useContext } from "react";
import {
	Box,
	useColorModeValue,
	Flex,
	HStack,
	IconButton,
	Spacer,
	Tooltip,
} from "@chakra-ui/react";
import { BreadcrumbItem, BreadcrumbLink, Breadcrumb } from "@chakra-ui/react";
import {
	AddIcon,
	ChevronRightIcon,
	SearchIcon,
	ViewIcon,
} from "@chakra-ui/icons";
import { useHistory } from "react-router-dom";
import useDashboardStore from "../../../../../core/store/useDashboardStore";
import { TABS } from "../../utils/leftTabs";
import { NetworkContext } from "./Network";
import { MSNetwork } from "../../../../../global-types";
import { FcCursor } from "react-icons/fc";
interface CustomButtonProps {
	key: number;
	label: string;
	isSelected?: boolean;
	icon: any;
	onClickHandler: () => void;
}

const CustomButton = (props: CustomButtonProps) => {
	return (
		<Tooltip label={props.label} aria-label="A tooltip">
			<IconButton
				size="sm"
				colorScheme={props.isSelected ? "twitter" : "gray"}
				aria-label="Add"
				icon={props.icon}
				onClick={props.onClickHandler}
			/>
		</Tooltip>
	);
};

const NetworkToolbar = () => {
	const history = useHistory();
	const [selectedTool, setSelectedTool] = React.useState<number>(1);
	let switchTab = useDashboardStore((state) => state.switchTab);
	let network: MSNetwork | null = useContext(NetworkContext);

	const tools: CustomButtonProps[] = [
		{
			key: 1,
			icon: <ViewIcon />,
			isSelected: false,
			label: "View",
			onClickHandler: () => {},
		},
		{
			key: 2,
			icon: <AddIcon />,
			isSelected: false,
			label: "Add",
			onClickHandler: () => {},
		},
		{
			key: 3,
			icon: <SearchIcon />,
			isSelected: false,
			label: "Search",
			onClickHandler: () => {},
		},
	];

	const _networkLayout = {
		_breadcrumb: (
			<Breadcrumb
				spacing="8px"
				separator={<ChevronRightIcon color="gray.500" />}
			>
				<BreadcrumbItem>
					<BreadcrumbLink
						onClick={() => {
							history.push("/");
							switchTab(TABS.NETWORKS);
						}}
					>
						Network
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbItem isCurrentPage>
					<BreadcrumbLink href="#">{network?.title}</BreadcrumbLink>
				</BreadcrumbItem>
			</Breadcrumb>
		),
	};

	return (
		<Box zIndex="10">
			<Flex
				bg={useColorModeValue("white", "gray.800")}
				color={useColorModeValue("gray.600", "white")}
				minH={"57px"}
				py={{ base: 2 }}
				px={{ base: 4 }}
				borderBottom={1}
				borderStyle={"solid"}
				borderColor={useColorModeValue("gray.200", "gray.900")}
				align={"center"}
			>
				<Box>{_networkLayout._breadcrumb}</Box>
				<Spacer />
				<Box>
					<HStack spacing={1}>
						{tools.map((tool) => (
							<CustomButton
								key={tool.key}
								label={tool.label}
								isSelected={tool.key == selectedTool}
								icon={tool.icon}
								onClickHandler={() => {
									setSelectedTool(tool.key);
									tool.onClickHandler();
								}}
							/>
						))}
					</HStack>
				</Box>
			</Flex>
		</Box>
	);
};

export default NetworkToolbar;
