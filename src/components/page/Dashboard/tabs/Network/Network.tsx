import React from "react";
import { useParams } from "react-router-dom";

interface Props {}

const Network = (props: Props) => {
	let { networkId } = useParams<{ networkId: string }>();
	return <div>Network</div>;
};

export default Network;
