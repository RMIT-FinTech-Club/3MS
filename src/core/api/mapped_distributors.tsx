import { MappedMSDistributor } from "../../global-types";
import { supabase } from "../config/supabase-client";
import { addNewDistributor, getDistributor } from "./distributors";
import {
	addNetworkDistributors,
	getNetworkDistributors,
} from "./network_distributors";

const getMappedDistributors = async (dto: { distributor_id: string }) => {
	let { data, error } = await supabase
		.from("NetworkDistributors")
		.select("*")
		.eq("distributor_id", dto.distributor_id);

	if (error) {
		throw new Error(error.message);
	}
	return data as any[];
};

const addMappedDistributor = async (
	dto: Omit<MappedMSDistributor, "children">
) => {
	// addNewDistributor({
	// 	distributor_id: dto.distributor_id,
	// 	email: dto.email,
	// });
	// addNetworkDistributors({
	// 	distributor_position: dto.distributor_position,
	// 	distributor_id: dto.distributor_id,
	// 	network_id: dto.network_id,
	// 	pv: dto.pv,
	// 	parent: dto.parent,
	// });
	let parent = await getMappedDistributors({
		distributor_id: dto.parent,
	});
};

export { addMappedDistributor, getMappedDistributors };
