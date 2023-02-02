import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InitialAnimation from "./components/InitialAnimation";
import Projects from "./pages/Projects";

const router = createBrowserRouter([
	{
		element: <Home />,
		children: [
			{
				path: "/",
				element: (
					<InitialAnimation
						texta="Welcome to my portfolio."
						textb="You can call me Gui!"
					/>
				),
			},
			{
				path: "/about",
				element: <AboutMe />,
			},
			{
				path: "/projects",
				element: <Projects />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
