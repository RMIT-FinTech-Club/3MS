import { supabase } from "../config/supabase-client";

const getIntegrations = async () => {
	const { data, error } = await supabase.from("Integrations").select("*");
	if (error) {
		throw new Error(error.message);
	}
	return data;
};

export { getIntegrations };
