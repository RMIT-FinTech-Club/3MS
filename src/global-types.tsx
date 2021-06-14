export interface MSDistributor {
	email: string;
	distributor_id: string;
}

export interface MappedMSDistributor extends MSDistributor {
	distributor_position: string;
	network_id: string;
	parent: string;
	children: string[];
	pv: number;
}

export interface MSNetwork {
	network_id: string;
	description: string;
	totalPv: number;
	badges: string[];
	revenue: number;
	title: string;
	point: number;
	rating: number;
	integration: number;
	distributorCount: number;
}
