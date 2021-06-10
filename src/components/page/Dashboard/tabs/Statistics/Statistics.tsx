import { Box, Divider, Text } from "@chakra-ui/layout";
import React from "react";

const StatisticsCenter: React.FC = () => {
	return (
		<Box paddingX="10" paddingY="3">
			<Text mb="2" fontSize="25px">
				Statistics
			</Text>
			<Divider />
		</Box>
	);
};

const StatisticsRight: React.FC = () => {
	return <div>Statistics</div>;
};

export { StatisticsCenter, StatisticsRight };
