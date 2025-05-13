import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Button } from "bootstrap";

//create your first component
const Home = () => {


	const [color, setColor] = useState(null);



	return (
		<div className="container text-center">
			<h1 className="mt-2 mb-3 p-3">SEMAFORO</h1>
			<h5>Julian Andres Ramirez</h5>
			<div className="d-inline-flex flex-column align-items-center bg-dark m-5 p-3 border border-5">
				<button className={color == "red" ? "btn btn-danger m-1 p-5 rounded-circle btn-lg  btn-light-on" : "btn btn-danger m-1 p-5 rounded-circle btn-lg"} type="button"
					onClick={() =>
						setColor("red")}>{color == "red" ? "ON" : ""}</button>

				<button className={color == "yellow" ? "btn btn-warning m-1 p-5 rounded-circle btn-lg  btn-light-on" : "btn btn-warning m-1 p-5 rounded-circle btn-lg"} type="button"
					onClick={() =>
						setColor("yellow")}>{color == "yellow" ? "ON" : ""}</button>

				<button className={color == "green" ? "btn btn-success m-1 p-5 rounded-circle btn-lg  btn-light-on" : "btn btn-success m-1 p-5 rounded-circle btn-lg"} type="button"
					onClick={() =>
						setColor("green")} >{color == "green" ? "ON" : ""}</button>
			</div>

		</div>
	);
};

export default Home;