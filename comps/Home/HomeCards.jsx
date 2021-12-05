import Link from "next/link";
import React from "react";
import {Router, Switch, Route } from "react-router-dom";
import Image from "next/image"
import DetailCard from "../DetailCard";
import Carousel from "react-elastic-carousel";
import PropTypes from "prop-types";
import { API_URL } from "../../utils/url";
import assetArr from "../../pages/api/assetArr";
import CardDefault from "../CardDefault";
import { Section, Box, Button, Container, Grid,TextField, Typography } from '@mui/material';

const HomeDeck= ({assets}) => {
 console.log("Home-Deck",assets)
return (
	<>
<Container className="section-index-card">
<div className="container_2">
					<div className="row">
				<div className="col-md-6 col-lg-4 card-wrapper">
				<DetailCard style={{maxWidth:"92%",flexDirection:"column"}} className="homeSkew"  title="Our Mission" 
				content="AIDA provides a  buisness solutions for managing  the maintence of machines, finding replacements of machines and tracking the health of engineering assets/machines."
				date="1 may 2012"
			Image="/sound_waves.svg"/>
				</div>
				<div className="col-md-6 col-lg-4  card-wrapper">
				<DetailCard style={{maxWidth:"92%",objectFit:"contain"}}  className="homeSkew"  title="The Future" 
				content="Companies and enterprises are looking to move from a calendar-based maintenance and overhaul strategy to a predictive one for their operations. The main reason is that pre-emptive maintenance is better for costs and logistic planning than re-active management "
				date="1 may 2012"
				Image="/epicycle_gears.svg"
				/>
				</div>
				<div className="col-md-6 col-lg-4  card-wrapper">
				<DetailCard style={{maxWidth:"92%", flexDirection:"column"}}  className="homeSkew"  title="Replacement and commision" 
				content="As an AIDA custormer I want to  find replacements for my  assets or machines from audio captured on my phone"
				date="1 may 2012"
			Image="/calender.svg"/>
				</div>
	</div>
	</div>
</Container>
</>
)
};

HomeDeck.propTypes = {
	assets: PropTypes.arrayOf(PropTypes.string),
	assetArr: PropTypes.arrayOf(PropTypes.string),
	assetArray: PropTypes.arrayOf(PropTypes.string)
};

export default HomeDeck;


