import { Box, Divider, Text } from "@chakra-ui/layout";
import React from "react";

const ContactCenter: React.FC = () => {
	return (
		<Box paddingX="10" paddingY="5">
			<Text mb="2" fontSize="25px">
				Contact
			</Text>
			<Divider />
		</Box>
	);
};

const ContactRight: React.FC = () => {
	return <div>Contact</div>;
};

export { ContactCenter, ContactRight };
