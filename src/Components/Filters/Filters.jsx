import { FilterDropdown } from "../FilterDropdown/FilterDropdown";
import { Search } from "../Search/Search";
import "./Filters.css";

export const Filters = () => {
	return (
		<div className="filters-container">
			<Search />
			<FilterDropdown />
		</div>
	);
};
