/* eslint-disable no-mixed-spaces-and-tabs */
/** @format */
/** @format */
import React from "react";
import Head from 'next/head';
import Image from "next/image";
import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
// import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import PropTypes from "prop-types";
import Text from "../comps/common/Text";
import assetArr from "./api/assetArr";
import SplashSection from "../comps/Home/splash";
import  Heading  from "../comps/common/Heading";
import Header from "../comps/Layout/Header";

const AboutSection=()=>{

	return (
		<>
		<Header/>
			<Container sx={{width:"100%"}}>
				<Heading content="About us"/>
			<div className="wrapper-image-about">
			<Image
						src="/aida_about.svg"
						alt="Picture of  the Aida process"
						layout="fill"
						className="about-image"
						objectPosition="relative"
					/>
				</div>
				<div sx={{display:"block",marginTop:"3rem"}} >
					<div className="row">
					<div className="col-lg-6" >
				<article className="whiteText">
											<h2 className="whiteText">Number of AIDA assured operational assets</h2>
													<p>		Total :    {assetArr.length}</p>
													<Text color="#d0f7fc" content="Companies, enterprises and industries need to become more effective and sustainable. Aida can provide important tool to reach that goal. 
				 By using audio recorded on your phone we can estimate the remaining useful life of these vital resources. "></Text>
				</article> 
				</div>
				<div className="col-lg-6" >
				<aside>
					<h3  className="whiteText">Calender based Maintanence</h3>
				<Text color="#d0f7fc" content="Factory and industry assets will always work to demand which fluctuates and an environment that can change. At Aida we want to work towards a more streamlined way of managing and replacing these assets "></Text>
				</aside>
				</div>
				</div>
        </div>
			</Container>
				
</>
);
}

/* export async function getStaticProps() {
	//  const res=await fetch ('http://localhost:1337/assets/count')
	 // console.log(res)
	//  const asset_count=await res.json();
	const asset_count=assetArr.length
		return {
			props:{asset_count,},
		}
	} */

	AboutSection.propTypes = {
		assets: PropTypes.node,
	};

	export default AboutSection;

