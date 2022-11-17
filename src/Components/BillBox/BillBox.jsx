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
		</div>
	);
};
