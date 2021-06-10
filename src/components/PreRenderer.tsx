import React from "react";
import { useQuery, useQueryClient } from "react-query";
import { getIntegrations } from "../core/api/integrations";
import useGlobalStore from "../core/store/useGlobalStore";

interface Props {
	component: () => JSX.Element;
	fetchedData?: {
		hasIntegrations?: boolean;
		hasNetworks?: boolean;
		hasNetwork?: boolean;
	};
}

const PreRenderer: React.FC<Props> = (props) => {
	const queryClient = useQueryClient();
	const globalStore = useGlobalStore();

	console.log(globalStore);

	React.useEffect(() => {
		const fetch = async () => {
			if (props.fetchedData?.hasIntegrations) {
				let integrations = await getIntegrations();
				globalStore.setIntegrations(integrations);
			}
			if (props.fetchedData?.hasNetwork) {
			}
			if (props.fetchedData?.hasNetworks) {
			}
		};
		fetch();
	}, []);

	return props.component();
};

export default PreRenderer;
