import { User } from "@supabase/gotrue-js";
import create, { SetState, GetState } from "zustand";
import { persist } from "zustand/middleware";
import { TABS } from "../../components/page/Dashboard/utils/leftTabs";

type DashboardStore = {
	tab: string;
	switchTab: (tabName: string) => void;
};

const useDashboardStore = create<DashboardStore>(
	persist(
		(set: SetState<DashboardStore>, get: GetState<DashboardStore>) => ({
			tab: TABS.DASHBOARD,
			switchTab: (tabName) => {
				let tab = get().tab;
				if (tabName != tab) {
					set({ tab: tabName });
				}
			},
		}),
		{
			name: "dashboard-storage", // unique name
			getStorage: () => sessionStorage, // (optional) by default the 'localStorage' is used
		}
	)
);

export default useDashboardStore;
