import React from "react";
import useDashboardStore from "../../../core/store/useDashboardStore";
import { TABS } from "./utils/leftTabs";

interface Props {}

const CenterArea = (props: Props) => {
	let route = useDashboardStore((state) => state.tab);
	switch (route) {
		case TABS.DASHBOARD:
			return <>Dashboard</>;
		case TABS.NETWORK:
			return <>Network</>;
		case TABS.CONTACT:
			return <>Contact</>;
		case TABS.STATISTICS:
			return <>Statistics</>;
		default:
			return <></>;
	}
};

export default CenterArea;
