import { Box } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { GraphView } from "react-digraph";
import { useQuery } from "react-query";
import { getDistributor } from "../../../../../core/api/distributors";
import { getNetworkDistributors } from "../../../../../core/api/network_distributors";
import { NetworkContext } from "./Network";

const GraphConfig = {
	NodeTypes: {
		empty: {
			// required to show empty nodes
			typeText: "None",
			shapeId: "#empty", // relates to the type property of a node
			shape: (
				<symbol viewBox="0 0 100 100" id="empty" key="0">
					<circle cx="50" cy="50" r="45"></circle>
				</symbol>
			),
		},
		custom: {
			// required to show empty nodes
			typeText: "Custom",
			shapeId: "#custom", // relates to the type property of a node
			shape: (
				<symbol viewBox="0 0 50 25" id="custom" key="0">
					<ellipse cx="50" cy="25" rx="50" ry="25"></ellipse>
				</symbol>
			),
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
			let mapDistributors: any = [];
			const fetchDistributors = async () => {
				for (let distributor of networkDistributorsQuery?.data as any) {
					let localDistributors = await getDistributor({
						id: distributor?.distributor_id,
					});

					let localDistributor = localDistributors?.[0];
					mapDistributors.push({ ...localDistributor, ...distributor });
				}
				let sampleNodes = mapDistributors?.map((distributor) => ({
					id: 1,
					title: (distributor.email as string).split("@")[0],
					x: 258.3976135253906,
					y: 331.9783248901367,
					type: "empty",
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
	}, [networkDistributorsQuery?.data]);

	const nodes = state.graph.nodes;
	const edges = state.graph.edges;
	const selected = state.selected;

	const NodeTypes = GraphConfig.NodeTypes;
	const NodeSubtypes = GraphConfig.NodeSubtypes;
	const EdgeTypes = GraphConfig.EdgeTypes;

	const handleClick = () => {};

	return (
		<Box id="graph" height="91%" onClick={handleClick} cursor="crosshair">
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
	);
};

export default NetworkVisualizer;
