import { supabase } from "../config/supabase-client";

interface AddNetworkDistributorsDTO {
	distributor_id?: string;
	network_id?: string;
	distributor_position: string;
	parent?: string; // distributor_id
	pv: number;
}

const addNetworkDistributors = async (dto: AddNetworkDistributorsDTO) => {
	const { data, error } = await supabase
		.from("NetworkDistributors")
		.insert([dto]);
	if (error) {
		throw new Error(error.message);
	}
	return data as any;
};

interface GetNetworkDistributorsDTO {
	network_id: string | undefined;
}

const getNetworkDistributors = async (dto: GetNetworkDistributorsDTO) => {
	let { data, error } = await supabase
		.from("NetworkDistributors")
		.select("*")
		.eq("network_id", dto.network_id);

	if (error) {
		throw new Error(error.message);
	}
	return data as any[];
};

export { addNetworkDistributors, getNetworkDistributors };
