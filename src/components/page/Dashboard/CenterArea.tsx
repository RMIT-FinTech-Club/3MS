import React from "react";
import useDashboardStore from "../../../core/store/useDashboardStore";
import { ContactCenter } from "./tabs/Contact/Contact";
import { DashboardCenter } from "./tabs/Dashboard/Dashboard";
import { IntegrationsCenter } from "./tabs/Integrations/Integrations";
import { NetworkCenter } from "./tabs/Network/Network";
import { NetworksCenter } from "./tabs/Network/Networks";
import { StatisticsCenter } from "./tabs/Statistics/Statistics";
import { TABS } from "./utils/leftTabs";

interface Props {}

const CenterArea = (props: Props) => {
	let route = useDashboardStore((state) => state.tab);
	switch (route) {
		case TABS.DASHBOARD:
			return <DashboardCenter />;
		case TABS.NETWORK:
			return <NetworkCenter />;
		case TABS.NETWORKS:
			return <NetworksCenter />;
		case TABS.CONTACT:
			return <ContactCenter />;
		case TABS.STATISTICS:
			return <StatisticsCenter />;
		case TABS.INTEGRATIONS:
			return <IntegrationsCenter />;
		default:
			return <></>;
	}
};

export default CenterArea;
