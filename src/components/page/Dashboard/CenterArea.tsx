import React from "react";
import useDashboardStore from "../../../core/store/useDashboardStore";
import { ContactCenter } from "./tabs/Contact/Contact";
import { DashboardCenter } from "./tabs/Dashboard/Dashboard";
import { NetworkCenter } from "./tabs/Network/Network";
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
		case TABS.CONTACT:
			return <ContactCenter />;
		case TABS.STATISTICS:
			return <StatisticsCenter />;
		default:
			return <></>;
	}
};

export default CenterArea;
