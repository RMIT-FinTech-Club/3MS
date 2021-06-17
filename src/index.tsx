import React, { Profiler } from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

const onRenderCallback = (
	id, // the "id" prop of the Profiler tree that has just committed
	phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
	actualDuration, // time spent rendering the committed update
	baseDuration, // estimated time to render the entire subtree without memoization
	startTime, // when React began rendering this update
	commitTime, // when React committed this update
	interactions // the Set of interactions belonging to this update
) => {
	// console.log("[PROFILER - COMMIT TIME]", commitTime);
	// console.log("[PROFILER - START TIME]", startTime);
};

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} />
				<Profiler id="Navigation" onRender={onRenderCallback}>
					<App />
				</Profiler>
			</QueryClientProvider>
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
