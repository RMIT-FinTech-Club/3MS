import React from "react";
import { useParams } from "react-router-dom";
import { getNetwork } from "../../../../../core/api/networks";
import Navbar from "../../../../Navbar";
import NetworkToolbar from "./NetworkToolbar";
import { useQuery } from "react-query";

interface Props {}

const NetworkCenter = (props: Props) => {
	let { networkId } = useParams<{ networkId: string }>();
	let networkQuery = useQuery(
		"network",
		async () => await getNetwork({ id: networkId })
	);

	console.log(networkQuery);

	return (
		<div>
			<NetworkToolbar />
		</div>
	);
};

const NetworkRight = (props: Props) => {
	let { networkId } = useParams<{ networkId: string }>();
	return <div>Network</div>;
};

export { NetworkCenter, NetworkRight };
