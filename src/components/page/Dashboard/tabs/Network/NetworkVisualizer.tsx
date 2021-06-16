import { Box } from "@chakra-ui/react";
import React, { useContext, useEffect, Fragment } from "react";
import { GraphView } from "react-digraph";
import { useQuery } from "react-query";
import { getDistributor } from "../../../../../core/api/distributors";
import { getNetworkDistributors } from "../../../../../core/api/network_distributors";
import { MappedMSDistributor } from "../../../../../global-types";
import { NetworkContext } from "./Network";
import NetworkScoreboard from "./NetworkScoreboard";
import NetworkAddForm from "./NetworkAddForm";

let shape = (
	<symbol viewBox="0 0 100 100" id="empty" key="0">
		<circle cx="50" cy="50" r="45"></circle>
	</symbol>
);

const GraphConfig = {
	NodeTypes: {
		Unknown: {
			// required to show empty nodes
			typeText: "Unknown",
			shapeId: "#empty", // relates to the type property of a node
			shape,
		},
		Platinum: {
			// required to show empty nodes
			typeText: "Platinum",
			shapeId: "#empty", // relates to the type property of a node
			shape,
		},
		Bronze: {
			// required to show empty nodes
			typeText: "Bronze",
			shapeId: "#empty", // relates to the type property of a node
			shape,
		},
	},
	NodeSubtypes: {},
	EdgeTypes: {
		emptyEdge: {
			// required to show empty edges
			shapeId: "#emptyEdge",
			shape: (
				<symbol viewBox="0 0 50 50" id="emptyEdge" key="0">
					<circle cx="25" cy="25" r="8" fill="currentColor">
						{" "}
					</circle>
				</symbol>
			),
		},
	},
};

const NODE_KEY = "id";

const NetworkVisualizer: React.FC = () => {
	let [graphConfig, setGraphConfig] = React.useState(GraphConfig);
	const [isAddFormOpened, setIsAddFormOpened] = React.useState<boolean>(false);
	const [isSetPosition, SetIsSetPosition] = React.useState<boolean>(true);
	let sample = {
		nodes: [],
		edges: [
			// {
			// 	source: 1,
			// 	target: 2,
			// 	type: "emptyEdge",
			// },
			// {
			// 	source: 2,
			// 	target: 3,
			// 	type: "emptyEdge",
			// },
		],
	};
	const graphViewContainer = React.useRef(null);
	const [position, setPosition] = React.useState<{
		x: number;
		y: number;
	}>({
		x: 0,
		y: 0,
	});
	const [state, setState] = React.useState<{
		graph: {
			nodes: any[];
			edges: any[];
		};
		selected: any;
	}>({
		graph: sample,
		selected: {},
	});
	let { network, networkState, setNetworkState } = useContext(NetworkContext);
	let networkDistributorsQuery = useQuery(
		"networkDistributors",
		async () =>
			await getNetworkDistributors({
				network_id: network?.network_id,
			}),
		{
			staleTime: 5000,
		}
	);
	useEffect(() => {
		if (networkDistributorsQuery?.data instanceof Array) {
			let mapDistributors: MappedMSDistributor[] = [];
			const fetchDistributors = async () => {
				for (let distributor of networkDistributorsQuery?.data as any) {
					let localDistributors = await getDistributor({
						id: distributor?.distributor_id,
					});

					let localDistributor = localDistributors?.[0];
					mapDistributors.push({ ...localDistributor, ...distributor });
				}
				let sampleNodes = mapDistributors?.map((distributor) => ({
					id: distributor.distributor_id,
					title: (distributor.email as string).split("@")[0],
					x: 258.3976135253906,
					y: 331.9783248901367,
					type: distributor.distributor_position,
				}));

				setState(
					(state) =>
						(state = {
							...state,
							graph: {
								...state.graph,
								nodes: sampleNodes,
							},
						})
				);
				setNetworkState?.(
					(state) => (state = { ...state, distributors: mapDistributors })
				);
			};
			fetchDistributors();
		}
	}, [networkDistributorsQuery?.data, setNetworkState]);

	const nodes = state.graph.nodes;
	const edges = state.graph.edges;
	const selected = state.selected;

	const NodeTypes = graphConfig.NodeTypes;
	const NodeSubtypes = graphConfig.NodeSubtypes;
	const EdgeTypes = graphConfig.EdgeTypes;

	const handleClick = () => {
		setIsAddFormOpened((isOpened) => (isOpened = !isOpened));
		SetIsSetPosition((isSetPosition) => (isSetPosition = !isSetPosition));
	};

	const handleMouseMove = (e) => {
		setPosition(
			(position) =>
				(position = {
					x: e.nativeEvent.offsetX,
					y: e.nativeEvent.offsetY,
				})
		);
	};

	return (
		<Fragment>
			<NetworkScoreboard networkState={networkState} />
			{isAddFormOpened && <NetworkAddForm position={position} />}
			<Box
				id="graph"
				height="91%"
				onMouseMove={isSetPosition ? handleMouseMove : () => {}}
				onClick={networkState.toolId === 2 ? handleClick : () => {}}
				cursor={networkState.toolId === 2 ? "crosshair" : "move"}
			>
				<GraphView
					ref={graphViewContainer}
					nodeKey={NODE_KEY}
					nodes={nodes}
					edges={edges}
					selected={selected}
					nodeTypes={NodeTypes}
					nodeSubtypes={NodeSubtypes}
					edgeTypes={EdgeTypes}
					allowMultiselect={true} // true by default, set to false to disable multi select.
					onSelect={(e) => {
						console.log(e);
					}}
					onCreateNode={() => {}}
					onUpdateNode={() => {}}
					onDeleteSelected={() => {}}
					onCreateEdge={() => {}}
					onSwapEdge={() => {}}
				/>
			</Box>
		</Fragment>
	);
};

export default NetworkVisualizer;
