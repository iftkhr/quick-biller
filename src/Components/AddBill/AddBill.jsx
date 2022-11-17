import { useDispatch, useSelector } from "react-redux";
import "./AddBill.css";

export const AddBill = () => {
	const bills = useSelector((state) => state.bills);
	console.log(bills);
	const addBill = useDispatch();
	const addFunction = () => {
		let description = document.getElementById("addbill-description").value;
		let category = document.getElementById("addbill-name").innerHTML;
		let amount = document.getElementById("addbill-amount").value;
		let date = document.getElementById("addbill-date").value;

		if (description === "" || amount === "" || date === "") {
			alert("Please fill all the fields!");
		} else {
			addBill({
				type: "bills/billAdded",
				payload: {
					description: description,
					category: category,
					amount: amount,
					date: date,
				},
			});
			console.log(bills);
		}
	};
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
				id="addbill-description"
				className="addbill-description"
				type="text"
				placeholder="Description"
			/>
			<input id="addbill-date" className="addbill-date" type="date" />
			<input
				id="addbill-amount"
				className="addbill-amount"
				type="text"
				placeholder="Amount"
			/>
			<button className="addbill-button" onClick={addFunction}>
				Add Bill
			</button>
		</div>
	);
};
