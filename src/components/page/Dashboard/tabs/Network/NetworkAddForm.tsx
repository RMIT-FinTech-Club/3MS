import React, { useContext } from "react";
import {
	Box,
	FormControl,
	FormLabel,
	Input,
	Button,
	InputGroup,
	InputRightElement,
	Select,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import AmwayLevels from "../../../../../constants/amway-levels.json";
import HerbalifeLevels from "../../../../../constants/herbalife_levels.json";
import { NetworkContext } from "./Network";
import { MappedMSDistributor } from "../../../../../global-types";
import { addMappedDistributor } from "../../../../../core/api/mapped_distributors";

interface Props {
	position: {
		x: number;
		y: number;
	};
}

const NetworkAddForm = (props: Props) => {
	let { network } = useContext(NetworkContext);
	const [input, setInput] = React.useState<Partial<MappedMSDistributor>>({
		distributor_id: "",
		distributor_position: "",
		email: "",
		network_id: "",
		pv: 0,
		parent: "",
	});
	const handleAddDistributor = async () => {
		await addMappedDistributor(input as any);
	};
	return (
		<Box
			m={4}
			position="absolute"
			top={props.position.y + 90}
			left={props.position.x + 80}
			height={"fit-content"}
			w="350px"
			bg="white"
			zIndex="9"
			borderRadius="5"
			boxShadow="md"
			py="3"
			px="4"
		>
			<FormControl id="email" mb={2} isRequired>
				<FormLabel>Email address</FormLabel>
				<InputGroup>
					<Input
						onChange={(e) =>
							setInput((input) => (input = { ...input, email: e.target.value }))
						}
						placeholder="Enter a valid email"
						type="email"
					/>
					<InputRightElement children={<CheckIcon color="green.500" />} />
				</InputGroup>
			</FormControl>
			<FormControl id="parent" mb={2}>
				<FormLabel>Parent</FormLabel>
				<InputGroup>
					<Input
						onChange={(e) =>
							setInput(
								(input) => (input = { ...input, parent: e.target.value })
							)
						}
						placeholder="Email of parent node"
						type="text"
					/>
					<InputRightElement children={<CheckIcon color="green.500" />} />
				</InputGroup>
			</FormControl>
			<FormControl id="pv" mb={2}>
				<FormLabel>Default PV</FormLabel>
				<Input
					onChange={(e) =>
						setInput(
							(input) => (input = { ...input, pv: parseInt(e.target.value) })
						)
					}
					placeholder="Default point value"
					type="text"
				/>
			</FormControl>
			<FormControl id="position" mb={4}>
				<FormLabel>Position</FormLabel>
				<Select
					onChange={(e) =>
						setInput(
							(input) =>
								(input = { ...input, distributor_position: e.target.value })
						)
					}
					placeholder="Unknown"
					size="md"
				>
					{network?.integration === 1
						? AmwayLevels.map((level) => <option>{level.name}</option>)
						: HerbalifeLevels.map((level) => <option>{level.name}</option>)}
				</Select>
			</FormControl>
			<Button
				w="full"
				bg="twitter.400"
				color="white"
				_hover={{
					background: "twitter.300",
				}}
				onClick={handleAddDistributor}
			>
				Add
			</Button>
		</Box>
	);
};

export default NetworkAddForm;
