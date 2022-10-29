import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import { Login } from "./Pages/Login/Login";

import "./App.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
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
