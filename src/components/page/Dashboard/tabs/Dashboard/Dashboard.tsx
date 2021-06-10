import React from "react";
import { Box, Divider, Text } from "@chakra-ui/layout";

const DashboardCenter: React.FC = () => {
	return (
		<Box paddingX="10" paddingY="3">
			<Text mb="2" fontSize="25px">
				Dashboard
			</Text>
			<Divider />
		</Box>
	);
};

const DashboardRight: React.FC = () => {
	return <div>Dashboard</div>;
};

export { DashboardCenter, DashboardRight };
