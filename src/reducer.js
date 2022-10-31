const initialState = {
	bills: [
		{
			id: 1,
			description: "Dominoes",
			category: "FoodNDining",
			amount: "430",
			date: "01-02-2020",
		},
		{
			id: 2,
			description: "Car wash",
			category: "utility",
			amount: "500",
			date: "02-06-2020",
		},
		{
			id: 3,
			description: "Amazon",
			category: "shopping",
			amount: "2030",
			date: "04-07-2020",
		},
		{
			id: 4,
			description: "House rent",
			category: "Food & Dining",

			amount: "35900",
			date: "05-03-2020",
		},
		{
			id: 5,
			description: "Tuition",
			category: "education",
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
	],
	filter: { status: "All" },
};

export const billReducer = (state = initialState, action) => {
	switch (action.type) {
		case "bills/billAdded":
			return {
				...state,
				bills: [
					...state.bills,
					{
						id: action.payload.id,
						description: action.payload.description,
						category: action.payload.category,
						amount: action.payload.amount,
						date: action.payload.date,
					},
				],
			};
		case "bills/billRemoved":
			return state.filter((bill) => bill.id !== action.payload.id);
		case "filter/filterChange":
			return {
				...state,
				filter: [...state.filter, { status: action.payload }],
			};
		default:
			return state;
	}
};
