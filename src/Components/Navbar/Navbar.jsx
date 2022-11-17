import "./Navbar.css";

export const Navbar = ({ active }) => {
	if (active === "dashboard") {
		return (
			<div className="navbar-container">
				<div className="navbar-links">
					<div className="dashboard-link active">Dashboard</div>
					<div className="bills-link">
						<a href="/bills">Bills</a>
					</div>
				</div>
			</div>
		);
	} else if (active === "bills") {
		return (
			<div className="navbar-container">
				<div className="navbar-links">
					<div className="dashboard-link">
						<a href="/dashboard">Dashboard</a>
					</div>
					<div className="bills-link active">Bills</div>
				</div>
			</div>
		);
	}
};
