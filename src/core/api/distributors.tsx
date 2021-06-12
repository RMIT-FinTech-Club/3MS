import { MSDistributor } from "../../global-types";
import { supabase } from "../config/supabase-client";

const addNewDistributor = async (dto: MSDistributor) => {
	const { data, error } = await supabase.from("Distributors").insert([dto]);
	if (error) {
		throw new Error(error.message);
	}
	return data;
};

const getDistributor = async (dto: { id: string }) => {
	let { data, error } = await supabase
		.from("Distributors")
		.select("*")
		.eq("distributor_id", dto.id);

	if (error) {
		throw new Error(error.message);
	}
	return data as MSDistributor[];
};

export { addNewDistributor, getDistributor };
