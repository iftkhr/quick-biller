import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import { Login } from "./Pages/Login/Login";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { Bills } from "./Pages/Bills/Bills";

import "./App.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
	},
	{
		path: "/dashboard",
		element: <Dashboard />,
	},
	{
		path: "/bills",
		element: <Bills />,
	},
]);

function App() {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
