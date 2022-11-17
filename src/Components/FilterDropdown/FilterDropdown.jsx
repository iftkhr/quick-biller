import { useDispatch } from "react-redux";
import "./FilterDropdown.css";

export const FilterDropdown = () => {
	const filterBills = useDispatch();
	const dropdownFunction = () => {
		document.getElementById("filter-name").classList.toggle("corner");
		document.getElementById("dropdown").classList.toggle("hide");
		console.log(document.getElementById("dropdown").classList);
	};

	const filterFunction = (e) => {
		document.getElementById("filter-name").innerHTML = e.target.innerText;
		dropdownFunction();
		filterBills({
			type: "filter",
			payload: {
				category: document.getElementById("filter-name").innerHTML,
			},
		});
		document.getElementById("search").value = "";
	};

	return (
		<div className="filterdropdown-container">
			<div className="filter-selected" onClick={dropdownFunction}>
				<div id="filter-name">All</div>
				<button className="filter-button">
					<img src="arrow-icon.svg" className="arrow-icon" alt="" />
				</button>
			</div>
			<div id="dropdown" className="filter-dropdown hide">
				<div
					onClick={filterFunction}
					className="filter-all dropdown-item"
				>
					All
				</div>
				<div
					onClick={filterFunction}
					className="filter-education dropdown-item"
				>
					Education
				</div>
				<div
					onClick={filterFunction}
					className="filter-food dropdown-item"
				>
					Food and Dining
				</div>
				<div
					onClick={filterFunction}
					className="filter-care dropdown-item"
				>
					Personal Care
				</div>
				<div
					onClick={filterFunction}
					className="filter-shopping dropdown-item"
				>
					Shopping
				</div>
				<div
					onClick={filterFunction}
					className="filter-travel dropdown-item"
				>
					Travel
				</div>
				<div
					onClick={filterFunction}
					className="filter-utility dropdown-item"
				>
					Utility
				</div>
			</div>
		</div>
	);
};
