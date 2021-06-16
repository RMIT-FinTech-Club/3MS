import { MappedMSDistributor } from "../../global-types";
import { addNewDistributor } from "./distributors";
import { addNetworkDistributors } from "./network_distributors";

const addMappedDistributor = async (
	dto: Omit<MappedMSDistributor, "children">
) => {
	addNewDistributor({
		distributor_id: dto.distributor_id,
		email: dto.email,
	});
	addNetworkDistributors({
		distributor_position: dto.distributor_position,
		distributor_id: dto.distributor_id,
		network_id: dto.network_id,
		pv: dto.pv,
		parent: dto.parent,
	});
};

export { addMappedDistributor };
