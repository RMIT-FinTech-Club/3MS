import React from "react";
import { useAuthStore } from "../../../core/store";

interface Props {}

const Login = (props: Props) => {
	const login = useAuthStore((state) => state.login);
	return (
		<div>
			Login Screen
			<button onClick={login}>Login</button>
		</div>
	);
};

export default Login;
