import { MSNetwork } from "../../global-types";
import { supabase } from "../config/supabase-client";

const addNewNetwork = async (dto: MSNetwork) => {
	const { data, error } = await supabase.from("Networks").insert([dto]);
	if (error) {
		throw new Error(error.message);
	}
	return data as any;
};

const getNetworks = async () => {
	const { data, error } = await supabase.from("Networks").select("*");
	if (error) {
		throw new Error(error.message);
	}
	return data;
};

const getNetwork = async (dto: { id: string }) => {
	let { data, error } = await supabase
		.from("Networks")
		.select("*")
		.eq("network_id", dto.id);

	if (error) {
		throw new Error(error.message);
	}
	return data as any;
};

export { addNewNetwork, getNetwork, getNetworks };
