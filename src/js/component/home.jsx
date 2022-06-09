import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Cards from "../Cards.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	return (
		<React.Fragment>
			<Navbar></Navbar>
			<Jumbotron></Jumbotron>
			<Cards></Cards>
			
		</React.Fragment>
	);
};

export default Home;
