import React from "react";
import { Chart } from "react-charts";

export default function NetworkChart() {
	const data = React.useMemo(
		() => [
			{
				label: "Series 1",
				data: [
					[0, Math.floor(Math.random() * 10)],
					[1, Math.floor(Math.random() * 10)],
					[2, Math.floor(Math.random() * 10)],
					[3, Math.floor(Math.random() * 10)],
					[4, Math.floor(Math.random() * 10)],
				],
			},
		],
		[]
	);

	const axes = React.useMemo(
		() => [
			{ primary: true, type: "linear", position: "bottom" },
			{ type: "linear", position: "left" },
		],
		[]
	);

	const lineChart = (
		// A react-chart hyper-responsively and continuously fills the available
		// space of its parent element automatically
		<div
			style={{
				width: "250px",
				height: "250px",
			}}
		>
			<Chart data={data} axes={axes} />
		</div>
	);

	return lineChart;
}
