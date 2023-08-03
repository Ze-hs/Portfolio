import Hero from "./components/Hero";
import ProjectList from "./components/ProjectList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initializeProject } from "./reducers/projectReducer";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBars from "./components/SideBars";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(initializeProject());
	});

	return (
		<>
			<SideBars />
			<Header />
			<Hero />
			<ProjectList />
			<About />
			<Footer />
		</>
	);
};

export default App;
