/** @format */

import * as React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

export const Footer = (props: any) => {
	const router = useRouter();

	return (
		<footer className='footer'>
			<div className='footer-wrapper'>
				<div className='foot-col-1'>
					<div className='foot-newsletter'>
						<h4>Sign up to the newsletter</h4>
						<input
							type='email'
							placeholder='joebloggs@domain.co.uk'
							className='email-footer'></input>
						<input
							type='gender'
							placeholder='Male/Female'
							className='gender-footer'></input>
						<input type='age' placeholder='Age' className='age-footer'></input>
					</div>
				</div>
				<div className='foot-col-2'>
					<div className='flex-footer'>
						<Link href='/'>
							<a className='foot-links'>Home</a>
						</Link>
						<Link href='/offers'>
							<a className='foot-links'>Offers</a>
						</Link>
						<Link href='/about'>
							<a className='foot-links'>About Us</a>
						</Link>
						<Link href='/users'>
							<a className='foot-links'>Users</a>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};
