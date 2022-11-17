import { useDispatch } from "react-redux";
import "./Search.css";

export const Search = () => {
	const getBills = useDispatch();
	const searchFunction = () => {
		getBills({
			type: "search",
			payload: { query: document.getElementById("search").value },
		});
		document.getElementById("filter-name").innerHTML = "All";
	};
	return (
		<div className="search-container">
			<div className="search-form">
				<input
					onChange={searchFunction}
					type="text"
					name="search-query"
					id="search"
					className="search-field"
				/>
				<button onClick={searchFunction} className="search-button">
					<img src="search-icon.svg" alt="" className="search-icon" />
				</button>
			</div>
		</div>
	);
};
