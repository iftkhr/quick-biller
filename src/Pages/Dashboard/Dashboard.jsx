import { TimeChart } from "../../Components/Chart/TimeChart";
import { Logo } from "../../Components/Logo/Logo";
import { Navbar } from "../../Components/Navbar/Navbar";
import "./Dashboard.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const Dashboard = () => {
	const [getBills, setBills] = useState(useSelector((state) => state.bills));

	if (getBills === undefined) {
		return (
			<div className="loader-container">
				<div className="loader"></div>
			</div>
		);
	}

	const monthlyBill = new Map();
	console.log(getBills);
	getBills.forEach((bill) => {
		let billMonth = new Date(bill.date).getMonth();
		let billAmount = monthlyBill.has(billMonth)
			? parseFloat(monthlyBill.get(billMonth).toString()) +
			  parseFloat(bill.amount.toString())
			: parseFloat(bill.amount.toString());
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
