import React from "react";
import { useAuthStore } from "../../../core/store";
import { useHistory } from "react-router-dom";

interface Props {}

const Dashboard = (props: Props) => {
	const history = useHistory();
	const logout = useAuthStore((state) => state.logout);
	const handleLogout = () => {
		logout();
		history.push("/");
	};
	return (
		<div>
			Dashboard
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
};

export default Dashboard;
