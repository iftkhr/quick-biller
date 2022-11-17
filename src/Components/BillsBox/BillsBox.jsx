import { useSelector } from "react-redux";
import { AddBill } from "../AddBill/AddBill";
import { BillBox } from "../BillBox/BillBox";
import "./BillsBox.css";

export const BillsBox = () => {
	const bills = useSelector((state) => state.bills);

	return (
		<div className="billsbox-container">
			{bills.map((bill) => {
				return <BillBox data={bill} />;
			})}
			<AddBill />
		</div>
	);
};
