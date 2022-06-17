import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "../Card.jsx";
import footer from "./Footer.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Footer from "./Footer.jsx";
import Cards from "../Card.jsx";


//create your first component
const Home = () => {
	const myArray = [
		{ title: "Austan", text: "Like this course", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg" },
		{ title: "Jonas", text: "Lets go!", image: "https://wegotthiscovered.com/wp-content/uploads/2021/10/Two-Marios-640x360.jpg" },
		{ title: "Paul", text: "I live to race", image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Bmw_318i_E30_M40_1991_%2851113700%29.jpeg" }
	]
	return (
		<React.Fragment>
			<Navbar />
			<Jumbotron />
			<div className="d-flex flex-row">
				{myArray.map((item, i) => {
					return (
						<Cards title={item.title} text={item.text} image={item.image} key={i} />
					)
				})}

			</div>
			<Footer />

		</React.Fragment>
	);
};

export default Home;
