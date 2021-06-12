import React from "react";
import useDashboardStore from "../../../core/store/useDashboardStore";
import { ContactRight } from "./tabs/Contact/Contact";
import { DashboardRight } from "./tabs/Dashboard/Dashboard";
import { IntegrationsRight } from "./tabs/Integrations/Integrations";
import { NetworkRight } from "./tabs/Network/Networks";
import { StatisticsRight } from "./tabs/Statistics/Statistics";
import { TABS } from "./utils/leftTabs";

interface Props {}

const RightArea = (props: Props) => {
	let route = useDashboardStore((state) => state.tab);
	switch (route) {
		case TABS.DASHBOARD:
			return <DashboardRight />;
		case TABS.NETWORK:
			return <NetworkRight />;
		case TABS.CONTACT:
			return <ContactRight />;
		case TABS.STATISTICS:
			return <StatisticsRight />;
		case TABS.INTEGRATIONS:
			return <IntegrationsRight />;
		default:
			return <></>;
	}
};

export default RightArea;
