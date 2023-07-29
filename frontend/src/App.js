import Hero from "./components/Hero";
import ProjectList from "./components/ProjectList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initializeProject } from "./reducers/projectReducer";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(initializeProject());
	});

	return (
		<div>
			<Header />
			<Hero />
			<ProjectList />
			<About />
			<Footer />
		</div>
	);
};

export default App;
