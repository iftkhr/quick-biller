import "./Navbar.css";

export const Navbar = ({ active }) => {
	console.log(active);
	if (active === "dashboard") {
		return (
			<div className="navbar-container">
				<div className="navbar-links">
					<div className="dashboard-link active">Dashboard</div>
					<div className="bills-link">Bills</div>
				</div>
			</div>
		);
	} else if (active === "bills") {
		<div className="navbar-container">
			<div className="navbar-links">
				<div className="dashboard-link">Dashboard</div>
				<div className="dashboard-link active">Bills</div>
			</div>
		</div>;
	}
};
