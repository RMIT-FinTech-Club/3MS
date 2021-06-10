import React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} />
				<App />
			</QueryClientProvider>
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
