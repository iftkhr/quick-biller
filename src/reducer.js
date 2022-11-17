const initialState = [
	{
		id: 1,
		description: "Dominoes",
		category: "Food and Dining",
		amount: "430",
		date: "01-02-2020",
	},
	{
		id: 2,
		description: "Car wash",
		category: "Utility",
		amount: "500",
		date: "02-06-2020",
	},
	{
		id: 3,
		description: "Amazon",
		category: "Shopping",
		amount: "2030",
		date: "04-07-2020",
	},
	{
		id: 4,
		description: "House rent",
		category: "Utility",
		amount: "35900",
		date: "05-03-2020",
	},
	{
		id: 5,
		description: "Tuition",
		category: "Education",
		amount: "2200",
		date: "06-12-2020",
	},
	{
		id: 6,
		description: "Laundry",
		category: "Personal Care",
		amount: "320",
		date: "07-14-2020",
	},
	{
		id: 7,
		description: "Vacation",
		category: "Travel",
		amount: "3430",
		date: "07-18-2020",
	},
];

export const billReducer = (state = initialState, action) => {
	switch (action.type) {
		case "bills/billAdded":
			return [
				...state,
				{
					id: action.payload.id,
					description: action.payload.description,
					category: action.payload.category,
					amount: action.payload.amount,
					date: action.payload.date,
				},
			];

		case "bills/billRemoved":
			return state.bills.filter((bill) => bill.id !== action.payload.id);
		case "filter":
			if (action.payload.category === "All") {
				return initialState;
			} else {
				return initialState.filter(
					(bill) => bill.category === action.payload.category,
				);
			}
		case "search":
			return initialState.filter(
				(bill) =>
					bill.description
						.toLowerCase()
						.includes(action.payload.query.toLowerCase()) ||
					bill.category
						.toLowerCase()
						.includes(action.payload.query.toLowerCase()) ||
					bill.amount
						.toLowerCase()
						.includes(action.payload.query.toLowerCase()),
			);
		default:
			return state;
	}
};
