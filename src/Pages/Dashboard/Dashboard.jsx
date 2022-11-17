import { TimeChart } from "../../Components/Chart/TimeChart";
import { Logo } from "../../Components/Logo/Logo";
import { Navbar } from "../../Components/Navbar/Navbar";
import "./Dashboard.css";
import { useSelector } from "react-redux";

export const Dashboard = () => {
	const bills = useSelector((state) => state.bills);
	const monthlyBill = new Map();
	bills.forEach((bill) => {
		let billMonth = new Date(bill.date).getMonth();
		console.log(billMonth);
		let billAmount = monthlyBill.has(billMonth)
			? parseInt(monthlyBill.get(billMonth)) + parseInt(bill.amount)
			: parseInt(bill.amount);
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
