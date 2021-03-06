import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import Login from "./components/page/Login/Login";
import Register from "./components/page/Register/Register";
import Dashboard from "./components/page/Dashboard/Layout";
import Landing from "./components/page/Landing/Landing";
import { useAuthStore } from "./core/store";
import Navbar from "./components/Navbar";
import PreRenderer from "./components/PreRenderer";
import useDashboardStore from "./core/store/useDashboardStore";
import { TABS } from "./components/page/Dashboard/utils/leftTabs";

interface Props {}

const AppRouter = (props: Props) => {
	const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
	let switchTab = useDashboardStore((state) => state.switchTab);
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/">
					{isLoggedIn ? <Redirect to={`/dashboard`} /> : <Landing />}
				</Route>
				<Route exact path="/login">
					<Login />
				</Route>
				<Route path="/register">
					<Register />
				</Route>
				<Route exact path="/dashboard/networks/:networkId">
					<PreRenderer
						component={() => {
							switchTab(TABS.NETWORK);
							return <Dashboard />;
						}}
					></PreRenderer>
				</Route>
				<Route path="/dashboard">
					<PreRenderer
						fetchedData={{
							hasIntegrations: true,
						}}
						component={() => {
							return <Dashboard />;
						}}
					></PreRenderer>
				</Route>
			</Switch>
		</Router>
	);
};

export default AppRouter;
