import create, { SetState, GetState } from "zustand";
import { persist } from "zustand/middleware";

type GlobalStore = {
	integrations: any;
	setIntegrations: () => void;
};

const useGlobalStore = create<GlobalStore>(
	persist(
		(set: SetState<GlobalStore>, get: GetState<GlobalStore>) => ({
			integrations: [],
			setIntegrations: () => {},
		}),
		{
			name: "global-storage", // unique name
			getStorage: () => sessionStorage, // (optional) by default the 'localStorage' is used
		}
	)
);
