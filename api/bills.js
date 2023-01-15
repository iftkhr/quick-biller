const MongoClient = require("mongodb").MongoClient;
let cachedDb = null;

const connectToDatabase = async () => {
	if (cachedDb) {
		console.log("Using existing connection");
		return Promise.resolve(cachedDb);
	}

	return MongoClient.connect(
		"mongodb+srv://iftkhr:iftkhr@bills.ocyvdn6.mongodb.net/?retryWrites=true&w=majority",
	)
		.then((client) => {
			let db = client.db("Bills");
			console.log("New DB Connection");
			cachedDb = db;
			return cachedDb;
		})
		.catch((error) => {
			console.log("Mongo connect Error");
			console.log(error);
		});
};

module.exports = async (req, res) => {
	if (req.method === "GET") {
		const db = await connectToDatabase();
		const collection = await db.collection("Bills");
		const bills = await collection.find({}).toArray();

		res.status(200).json({ bills });
	} else if (req.method === "POST") {
		const newBill = req.body;
		const db = await connectToDatabase();
		const collection = await db.collection("Bills");
		const bills = await collection.insertOne(newBill);
		res.status(200).json({ bills });
	} else {
		res.status(404).json({ status: "Error route note found" });
	}
};
