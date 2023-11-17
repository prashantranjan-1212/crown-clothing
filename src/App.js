import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./routes/home/home.component";

const Navigation = () => {
	return (
		<div>
			<div>
				<h3>I am navigation bar component</h3>
			</div>
			<Outlet />
		</div>
	);
};

const Shop = () => {
	return <h3>I am shop now component.</h3>;
};

const App = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<Navigation />}
			>
				<Route
					index
					element={<Home />}
				/>
				<Route
					path="shop"
					element={<Shop />}
				/>
			</Route>
		</Routes>
	);
};

export default App;
