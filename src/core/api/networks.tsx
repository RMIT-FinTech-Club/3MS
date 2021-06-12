import { MSNetwork } from "../../global-types";
import { supabase } from "../config/supabase-client";

const addNewNetwork = async (dto: MSNetwork) => {
	const { data, error } = await supabase.from("Networks").insert([dto]);
	if (error) {
		throw new Error(error.message);
	}
	return data as any;
};

export { addNewNetwork };
