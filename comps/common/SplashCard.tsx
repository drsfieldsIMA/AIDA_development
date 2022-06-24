/** @format */

import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import Hero from "./Hero";
import ButtonLink from "./ButtonLink";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import { Heading } from "comps/Layout";
import Image from "next/image";

type QueryParams = {
	trash: any;
};
/* eslint-disable-next-line */
const SplashCard = ({ trash }: QueryParams) => {
	return (
		<>
			<div className='splash-card'>
				<div className='splash-image_wrapper'>
					<div className='splash-image'>
						<Image
							src='/globe-2.png'
							alt='earth'
							className='earth-img'
							layout='fill'
						/>
					</div>
				</div>
				<div className='heading-block_wrapper'>
					<div className='heading-block'>
						<h1>
							<span className='greentext'>GreenCycle</span>
							<span className='local'> Going Green Starts Local</span>
						</h1>
						<div className='splash-text-container d-none_lg'>
							<p className='splash-text'>
								Ever wondered how we can recycle more through your local
								community. We mean more of you and your networks clutter,
								belongings and trash recycled through this app. The GreenCycle
								community are here to safeguard and contribute to stewarding the
								Earth`s resources by leveraging the world wide web`s scale.
							</p>
							<Link href='/about'>
								<a className='home-links'>Learn More</a>
							</Link>
						</div>
					</div>
				</div>
				<div className='newsletter-block_wrapper'>
					<div className='email-block'>
						<h3>Newsletter: Enter email address</h3>
						<input
							type='email'
							placeholder='joblog@domain.co.uk'
							className='email-newsletter'></input>
						<button>Submit</button>
					</div>
				</div>
			</div>
			<div className='btn-block_wrapper'>
				<div className='btn-block'>
					<Link href='/offers'>
						<a className='btn-primary'> Current Offers</a>
					</Link>
					<Link href='/login'>
						<a
							className='btn-primary'
							style={{ backgroundColor: "#4EAE3C!important" }}>
							Make an offer
						</a>
					</Link>
				</div>
			</div>
		</>
	);
};

export default SplashCard;
