import { TimeChart } from "../../Components/Chart/TimeChart";
import { Logo } from "../../Components/Logo/Logo";
import { Navbar } from "../../Components/Navbar/Navbar";
import "./Dashboard.css";
import { useEffect, useState } from "react";
import axios from "axios";

export const Dashboard = () => {
	const [getBills, setBills] = useState();

	useEffect(() => {
		axios
			.get("/api/bills")
			.then((response) => {
				setBills(response.data);
			})
			.catch((error) => console.log(error));
	}, []);

	if (getBills === undefined) {
		return (
			<div className="loader-container">
				<div className="loader"></div>
			</div>
		);
	}

	console.log(getBills.bills);

	const monthlyBill = new Map();
	getBills.bills.forEach((bill) => {
		let billMonth = new Date(bill.date).getMonth();
		console.log(billMonth);
		let billAmount = monthlyBill.has(billMonth)
			? parseFloat(monthlyBill.get(billMonth).toString()) +
			  parseFloat(bill.amount["$numberDecimal"].toString())
			: parseFloat(bill.amount["$numberDecimal"].toString());
		monthlyBill.set(billMonth, billAmount);
	});

	return (
		<div className="dashboard-container">
			<div className="dashboard-header">
				<Logo size="small" />
				<Navbar active="dashboard" />
			</div>
			<div className="dashboard-content">
				<TimeChart billAmount={monthlyBill} />
			</div>
		</div>
	);
};
