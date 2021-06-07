import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import Login from "./components/page/Login/Login";
import Register from "./components/page/Register/Register";
import Dashboard from "./components/page/Dashboard/Dashboard";
import Network from "./components/page/Network/Network";
import { useAuthStore } from "./core/store";

interface Props {}

const AppRouter = (props: Props) => {
	const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					{isLoggedIn ? <Redirect to="/users/:userId/dashboard" /> : <Login />}
				</Route>
				<Route exact path="/login">
					<Login />
				</Route>
				<Route path="/register">
					<Register />
				</Route>
				<Route path="/users/:userId/dashboard">
					<Dashboard />
				</Route>
				<Route path="/users/:userId/networks/:networkId">
					<Network />
				</Route>
			</Switch>
		</Router>
	);
};

export default AppRouter;
