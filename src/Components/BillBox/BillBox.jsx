import { useDispatch, useSelector } from "react-redux";
import "./BillBox.css";

const icons = {
	Education: "./education-icon.svg",
	"Food and Dining": "./food-icon.svg",
	"Personal Care": "./care-icon.svg",
	Shopping: "./shopping-icon.svg",
	Travel: "./travel-icon.svg",
	Utility: "./utility-icon.svg",
};

export const BillBox = ({ data }) => {
	const deleteBill = useDispatch();
	const bills = useSelector((state) => state.bills);
	const deleteFunction = (e) => {
		deleteBill({
			type: "bills/billRemoved",
			payload: {
				id: parseInt(e.target.id.slice(14)),
			},
		});
		console.log(
			bills.filter((bill) => bill.id !== parseInt(e.target.id.slice(14))),
		);
	};
	return (
		<div className="billbox-container">
			<div className="billbox-category">
				<img
					className="billbox-icon"
					src={icons[data.category]}
					alt=""
				/>
				{data.category}
			</div>
			<hr />
			<div className="billbox-description">{data.description}</div>
			<div className="billbox-date">{data.date}</div>
			<hr />
			<div className="billbox-amount">₹{data.amount}</div>
			<div className="billbox-options">
				<button
					className="billbox-button"
					id={"billbox-edit" + data.id}
				>
					<img
						className="button-image"
						src="./edit-icon.svg"
						alt=""
					/>
				</button>
				<button className="billbox-button">
					<img
						className="button-image"
						src="./delete-icon.svg"
						alt=""
						id={"billbox-delete" + data.id}
						onClick={deleteFunction}
					/>
				</button>
			</div>
		</div>
	);
};
