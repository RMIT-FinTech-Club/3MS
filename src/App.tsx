import React from "react";
import "./global-style.scss";

import AppRouter from "./AppRouter";
import Navbar from "./components/Navbar";
import { useAuthStore } from "./core/store";

function App() {
	let authenticated = useAuthStore((state) => state.authenticated);
	authenticated();
	return (
		<div className="App">
			<AppRouter />
		</div>
	);
}

export default App;
