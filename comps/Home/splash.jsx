/* eslint-disable no-mixed-spaces-and-tabs */
/** @format */

import Text from "../common/Text";
import NextLink from 'next/link';
import Button from "@mui/material/Button";
import Link from "next/link"
import { Router, Switch, Route } from "react-router-dom";
import { createMemoryHistory } from 'history';


export default function SplashSection({ assets }) {
   const history = createMemoryHistory();
	return (
      <Router history={history}>
			 	<Switch>
		<div className="splashContainer">
      <h1 className="whiteText">Artificial </h1>
      <h1 className="whiteText">Intelligence </h1>
      <h1 className="whiteText">Defect </h1>
      <h1 className="whiteText">Aquisition </h1>
      <Text color="#d0f7fc" content="Find out the lifespan of your machine assets with just your smartphone."></Text>         
      <NextLink
            href="/about"
            passHref
          >
       <Button className="btn_primary" size="large">
				 Learn More
		 </Button>
       </NextLink>
       <NextLink
            href="/login"
            passHref
          >
      <Button className="btn_secondary" size="large">
				 Log In
		</Button>
      </NextLink>
      <div>
		</div>
		</div>
      </Switch>
      </Router>
	);
}
