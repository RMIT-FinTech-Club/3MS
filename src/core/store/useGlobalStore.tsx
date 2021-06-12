import create, { SetState, GetState } from "zustand";
import { persist } from "zustand/middleware";
import { MSNetwork } from "../../global-types";

type GlobalStore = {
	integrations: any;
	setIntegrations: (data: any) => void;
	network: MSNetwork | null;
	setNetwork: (data: MSNetwork) => void;
};

const useGlobalStore = create<GlobalStore>(
	persist(
		(set: SetState<GlobalStore>, get: GetState<GlobalStore>) => ({
			integrations: [],
			setIntegrations: (data) => {
				set({ integrations: data });
			},
			network: null,
			setNetwork: (data) => {
				set({ network: data });
			},
		}),
		{
			name: "global-storage", // unique name
			getStorage: () => sessionStorage, // (optional) by default the 'localStorage' is used
		}
	)
);

export default useGlobalStore;
