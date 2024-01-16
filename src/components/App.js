import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectsPage2 from './pages/ProjectsPage2';


function App() {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Route exact path="/" component={Home} />
			<Route exact path="/about" component={AboutPage} />
			<Route exact path="/projects" component={ProjectsPage} />
			<Route exact path="/projects2" component={ProjectsPage2} />
		</BrowserRouter>
	);
}

export default App;
