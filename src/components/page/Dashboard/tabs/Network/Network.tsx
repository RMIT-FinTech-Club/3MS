import React, { Provider } from "react";
import { useParams } from "react-router-dom";
import { getNetwork } from "../../../../../core/api/networks";
import NetworkToolbar from "./NetworkToolbar";
import { useQuery } from "react-query";
import { MSNetwork } from "../../../../../global-types";
import NetworkVisualizer from "./NetworkVisualizer";

interface Props {}

let NetworkContext = React.createContext<MSNetwork | null>(null);

const NetworkCenter = (props: Props) => {
	let { networkId } = useParams<{ networkId: string }>();
	let networkQuery = useQuery(
		"network",
		async () => await getNetwork({ id: networkId })
	);

	return (
		<NetworkContext.Provider value={networkQuery.data?.[0]}>
			<NetworkToolbar />
			<NetworkVisualizer />
		</NetworkContext.Provider>
	);
};

const NetworkRight = (props: Props) => {
	return <div>Network</div>;
};

export { NetworkCenter, NetworkRight, NetworkContext };
