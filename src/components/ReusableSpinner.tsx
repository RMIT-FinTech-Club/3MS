import { Spinner } from "@chakra-ui/spinner";
import React from "react";

interface Props {}

const ReusableSpinner = (props: Props) => {
	return (
		<Spinner
			thickness="4px"
			speed="0.65s"
			emptyColor="gray.200"
			color="twitter.500"
			size="xl"
		/>
	);
};

export default ReusableSpinner;
