import "./Bills.css";

import { Navbar } from "../../Components/Navbar/Navbar";
import { Logo } from "../../Components/Logo/Logo";
import { Filters } from "../../Components/Filters/Filters";
import { BillsBox } from "../../Components/Bills/BillsBox";

export const Bills = () => {
	return (
		<div className="bills-container">
			<div className="bills-header">
				<Logo size="small" />
				<Navbar active="bills" />
			</div>
			<div className="bills-content">
				<Filters />
				<BillsBox />
			</div>
		</div>
	);
};
