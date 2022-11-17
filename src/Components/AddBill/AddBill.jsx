import "./AddBill.css";

export const AddBill = () => {
	const dropdownFunction = () => {
		document.getElementById("addbill-name").classList.toggle("corner");
		document.getElementById("addbill-dropdown").classList.toggle("hide");
	};

	const addBillFunction = (e) => {
		document.getElementById("addbill-name").innerHTML = e.target.innerText;
		dropdownFunction();
	};

	return (
		<div className="addbill-container">
			<div className="addbilldropdown-container">
				<div className="addbill-selected" onClick={dropdownFunction}>
					<div id="addbill-name">Education</div>
					<button className="addbilldropdown-button">
						<img
							src="arrow-icon.svg"
							className="arrow-icon"
							alt=""
						/>
					</button>
				</div>
				<div id="addbill-dropdown" className="addbill-dropdown hide">
					<div
						onClick={addBillFunction}
						className="addbill-education dropdown-item"
					>
						Education
					</div>
					<div
						onClick={addBillFunction}
						className="addbill-food dropdown-item"
					>
						Food and Dining
					</div>
					<div
						onClick={addBillFunction}
						className="addbill-care dropdown-item"
					>
						Personal Care
					</div>
					<div
						onClick={addBillFunction}
						className="addbill-shopping dropdown-item"
					>
						Shopping
					</div>
					<div
						onClick={addBillFunction}
						className="addbill-travel dropdown-item"
					>
						Travel
					</div>
					<div
						onClick={addBillFunction}
						className="addbill-utility dropdown-item"
					>
						Utility
					</div>
				</div>
			</div>
			<input
				className="addbill-description"
				type="text"
				placeholder="Description"
			/>
			<input className="addbill-date" type="date" />
			<input
				className="addbill-amount"
				type="text"
				placeholder="Amount"
			/>
			<button className="addbill-button">Add Bill</button>
		</div>
	);
};
