import { Line } from "react-chartjs-2";

import "./TimeChart.css";

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
);

export const TimeChart = ({ billAmount }) => {
	ChartJS.defaults.font.family = "Quicksand";
	ChartJS.defaults.font.size = 14;
	const options = {
		responsive: true,
		plugins: {
			title: {
				display: true,
				text: "Total Bill Amount For Each Month",
				font: {
					size: 24,
				},
			},
		},
		layout: {
			padding: 20,
		},
	};

	const labels = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const data = {
		labels: labels,
		datasets: [
			{
				label: "Total Amount",
				data: [...billAmount.values()],
				borderColor: "rgb(75, 192, 192)",
				backgroundColor: "#fff",
			},
		],
	};
	return (
		<div className="timechart-container">
			<Line options={options} data={data} />
		</div>
	);
};
