import React from "react";
import { useAuthStore } from "../../../core/store";
import { useHistory } from "react-router-dom";
import LeftArea from "./LeftArea";
import CenterArea from "./CenterArea";
import RightArea from "./RightArea";

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
			{/* Left sidebar */}
			<LeftArea />
			{/* Center area */}
			<CenterArea />
			{/* Right sidebar */}
			<RightArea />
			<br></br>
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
};

export default Dashboard;
