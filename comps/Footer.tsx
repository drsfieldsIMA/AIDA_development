/** @format */

import * as React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useDeviceSize from "./DeviceSize";
import Link from "next/link";

export const Footer = () => {
	const router = useRouter();

	return (
		<footer className='footer'>
            <div className='footer-wrapper'>
            <div className="foot-col-1">
            <div className="foot-newsletter">
                <h4>Sign up to the newsletter</h4>
                    <input type="email" placeholder='joebloggs@domain.co.uk' className='email-footer'></input>
                    <input type="gender" placeholder='Female' className='gender-footer'></input>
                    <input type="age" placeholder='20' className='age-footer'></input>
            </div>
            </div>
            <div className="foot-col-2">
                <div className="flex-footer">
                     <a className="foot-links">Home</a>
                     <a className="foot-links">Offers</a>
                     <a className="foot-links">About Us</a>
                </div>
            </div>
            </div>
		</footer>
	);
};