/** @format */

import Link from "next/link";
import Text from "../components/Text";
import Button from "@mui/material/Button";



export default function SplashSection({ assets }) {
	return (

		<div className="splashContainer">
      <h1 className="whiteText">Artificial </h1>
      <h1 className="whiteText">Intelligence </h1>
      <h1 className="whiteText">Defect </h1>
      <h1 className="whiteText">Aquisition </h1>
      <Text 	style={{ fontFamily: "Fira Sans Condensed" }}
         content="Find out the lifespan of your machine assets with just your smartphone."></Text>
       <Button className="btn_primary" size="small">
				 Learn More
			  </Button>
        <Button className="btn_secondary" size="small">
				 Get Started
			  </Button>
		</div>
	);
}
