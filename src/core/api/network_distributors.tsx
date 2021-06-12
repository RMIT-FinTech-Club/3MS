import { supabase } from "../config/supabase-client";

interface AddNetworkDistributorsDTO {
	distributor_id?: string;
	network_id?: string;
	distributor_position: string;
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

export { addNetworkDistributors };
