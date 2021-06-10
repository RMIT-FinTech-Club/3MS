import {
	Box,
	Flex,
	Text,
	IconButton,
	Button,
	Stack,
	Collapse,
	Icon,
	Link,
	Popover,
	PopoverTrigger,
	PopoverContent,
	useColorModeValue,
	useBreakpointValue,
	useDisclosure,
} from "@chakra-ui/react";
import {
	HamburgerIcon,
	CloseIcon,
	ChevronDownIcon,
	ChevronRightIcon,
} from "@chakra-ui/icons";
import { useAuthStore } from "../core/store";
import { useHistory } from "react-router-dom";
import useDashboardStore from "../core/store/useDashboardStore";
import { TABS } from "./page/Dashboard/utils/leftTabs";

function Navbar() {
	const { isOpen, onToggle } = useDisclosure();
	const history = useHistory();
	const switchTab = useDashboardStore((state) => state.switchTab);
	const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
	const authUser = useAuthStore((state) => state.currentUser);
	const unauthenticated = useAuthStore((state) => state.unauthenticated);
	const handleLogout = () => {
		unauthenticated();
		switchTab(TABS.DASHBOARD);
		history.push("/");
	};

	return (
		<Box>
			<Flex
				bg={useColorModeValue("white", "gray.800")}
				color={useColorModeValue("gray.600", "white")}
				minH={"60px"}
				w="full"
				py={{ base: 2 }}
				px={{ base: 6 }}
				borderBottom={1}
				borderStyle={"solid"}
				borderColor={useColorModeValue("gray.200", "gray.900")}
				align={"center"}
				position="absolute"
			>
				<Flex
					flex={{ base: 1, md: "auto" }}
					ml={{ base: -2 }}
					display={{ base: "flex", md: "none" }}
				>
					<IconButton
						onClick={onToggle}
						icon={
							isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
						}
						variant={"ghost"}
						aria-label={"Toggle Navigation"}
					/>
				</Flex>
				<Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
					<Text
						textAlign={useBreakpointValue({ base: "center", md: "left" })}
						fontFamily={"heading"}
						color={useColorModeValue("gray.800", "white")}
						as="a"
						href="/"
					>
						3MS
					</Text>

					<Flex display={{ base: "none", md: "flex" }} ml={10}>
						<DesktopNav />
					</Flex>
				</Flex>
				{!isLoggedIn ? (
					<Stack
						flex={{ base: 1, md: 0 }}
						justify={"flex-end"}
						direction={"row"}
						spacing={6}
					>
						<Button
							as={"a"}
							fontSize={"sm"}
							fontWeight={400}
							variant={"link"}
							href={"/login"}
						>
							Sign In
						</Button>
						<Button
							as={"a"}
							display={{ base: "none", md: "inline-flex" }}
							fontSize={"sm"}
							fontWeight={600}
							color={"white"}
							bg={"twitter.400"}
							href={"/register"}
							_hover={{
								bg: "twitter.300",
							}}
						>
							Sign Up
						</Button>
					</Stack>
				) : (
					<>
						<Text mr="5">{authUser?.email}</Text>
						<Button
							as={"a"}
							display={{ base: "none", md: "inline-flex" }}
							fontSize={"sm"}
							fontWeight={600}
							color={"white"}
							bg={"red.400"}
							onClick={handleLogout}
							_hover={{
								bg: "red.300",
							}}
						>
							Log out
						</Button>
					</>
				)}
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<MobileNav />
			</Collapse>
		</Box>
	);
}

const DesktopNav = () => {
	return (
		<Stack direction={"row"} spacing={4}>
			{NAV_ITEMS.map((navItem) => (
				<Box key={navItem.label}>
					<Popover trigger={"hover"} placement={"bottom-start"}>
						<PopoverTrigger>
							<Link
								p={2}
								href={navItem.href ?? "#"}
								fontSize={"sm"}
								fontWeight={500}
								// color={useColorModeValue("gray.600", "gray.200")}
								_hover={{
									textDecoration: "none",
									// color: useColorModeValue("gray.800", "white"),
								}}
							>
								{navItem.label}
							</Link>
						</PopoverTrigger>

						{navItem.children && (
							<PopoverContent
								border={0}
								boxShadow={"xl"}
								// bg={useColorModeValue("white", "gray.800")}
								p={4}
								rounded={"xl"}
								minW={"sm"}
							>
								<Stack>
									{navItem.children.map((child) => (
										<DesktopSubNav key={child.label} {...child} />
									))}
								</Stack>
							</PopoverContent>
						)}
					</Popover>
				</Box>
			))}
		</Stack>
	);
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
	return (
		<Link
			href={href}
			role={"group"}
			display={"block"}
			p={2}
			rounded={"md"}
			_hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
		>
			<Stack direction={"row"} align={"center"}>
				<Box>
					<Text
						transition={"all .3s ease"}
						_groupHover={{ color: "pink.400" }}
						fontWeight={500}
					>
						{label}
					</Text>
					<Text fontSize={"sm"}>{subLabel}</Text>
				</Box>
				<Flex
					transition={"all .3s ease"}
					transform={"translateX(-10px)"}
					opacity={0}
					_groupHover={{ opacity: "100%", transform: "translateX(0)" }}
					justify={"flex-end"}
					align={"center"}
					flex={1}
				>
					<Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
				</Flex>
			</Stack>
		</Link>
	);
};

const MobileNav = () => {
	return (
		<Stack
			bg={useColorModeValue("white", "gray.800")}
			p={4}
			display={{ md: "none" }}
		>
			{NAV_ITEMS.map((navItem) => (
				<MobileNavItem key={navItem.label} {...navItem} />
			))}
		</Stack>
	);
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Stack spacing={4} onClick={children && onToggle}>
			<Flex
				py={2}
				as={Link}
				href={href ?? "#"}
				justify={"space-between"}
				align={"center"}
				_hover={{
					textDecoration: "none",
				}}
			>
				<Text
					fontWeight={600}
					color={useColorModeValue("gray.600", "gray.200")}
				>
					{label}
				</Text>
				{children && (
					<Icon
						as={ChevronDownIcon}
						transition={"all .25s ease-in-out"}
						transform={isOpen ? "rotate(180deg)" : ""}
						w={6}
						h={6}
					/>
				)}
			</Flex>

			<Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
				<Stack
					mt={2}
					pl={4}
					borderLeft={1}
					borderStyle={"solid"}
					borderColor={useColorModeValue("gray.200", "gray.700")}
					align={"start"}
				>
					{children &&
						children.map((child) => (
							<Link key={child.label} py={2} href={child.href}>
								{child.label}
							</Link>
						))}
				</Stack>
			</Collapse>
		</Stack>
	);
};

interface NavItem {
	label: string;
	subLabel?: string;
	children?: Array<NavItem>;
	href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
	{
		label: "About us",
		children: [
			{
				label: "Explore Design Work",
				subLabel: "Trending Design to inspire you",
				href: "#",
			},
			{
				label: "New & Noteworthy",
				subLabel: "Up-and-coming Designers",
				href: "#",
			},
		],
	},
	{
		label: "Features",
		children: [
			{
				label: "Job Board",
				subLabel: "Find your dream design job",
				href: "#",
			},
			{
				label: "Freelance Projects",
				subLabel: "An exclusive list for contract work",
				href: "#",
			},
		],
	},
	{
		label: "Pricing",
		href: "#",
	},
	{
		label: "Partner",
		href: "#",
	},
];

export default Navbar;
