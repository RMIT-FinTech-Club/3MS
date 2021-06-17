import React, { Profiler } from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

// let queue: any = [];
// sendProfileQueue every 5 seconds
// setInterval(sendProfileQueue, 5000);

const onRenderCallback = (
	id, // the "id" prop of the Profiler tree that has just committed
	phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
	actualDuration, // time spent rendering the committed update
	baseDuration, // estimated time to render the entire subtree without memoization
	startTime, // when React began rendering this update
	commitTime, // when React committed this update
	interactions // the Set of interactions belonging to this update
) => {};

// function sendProfileQueue() {
// 	if (!queue.length) {
// 		return Promise.resolve();
// 	}
// 	const queueToSend = [...queue];
// 	queue = [];
// 	// here's where we'd actually make the server call to send the queueToSend
// 	// data to our backend...
// 	console.info("sending profile queue", queueToSend);
// 	return Promise.resolve();
// }

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
