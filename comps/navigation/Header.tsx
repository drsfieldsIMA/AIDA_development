/** @format */

import * as React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { useEffect, useState, useRef, useContext } from "react";
import useDeviceSize from "./DeviceSize";
import Link from "next/link";
import { destroyCookie, parseCookies } from "nookies";
import useLocalStorage from "comps/config/useLocalStorage";
import router from "next/router";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { NextComponentType } from "next";
import { Filter, LoginTwoTone, Tune } from "@mui/icons-material";
import { PersonRounded } from "@mui/icons-material";
import Modal from "react-modal";
import { ReactQueryDevtools } from "react-query-devtools";
import searchArticles from "../../comps/common/lists/renderResultList";
import ArticleSearchResult from "../ArticlesSearchResults";
import { useQuery } from "react-query";
import { AuthContext } from "../config/AuthContext";
import useKeyPress from "../hooks/useKeyPress";
import { Pageview } from "@material-ui/icons";
import NextLink from "next/link";

Modal.setAppElement("#__next");

export const Header = () => {
	const router = useRouter();
	const [toggleMenu, setToggleMenu] = useState(false);

	const [width, height] = useDeviceSize();

	const toggleNav = () => {
		console.log("Toogle Nav===>", toggleMenu);
		setToggleMenu(!toggleMenu);
		console.log("Toogle Nav===>", toggleMenu);
	};

	return (
		<nav className='header'>
			<div className='logo'></div>
			<div className='tagline_wrapper'>
				<div className='tagline'>
					<div className='f-box'>
						<span className='span-search'>Search</span>

						<input
							className='header-input'
							onChange={(e: any) => setInputValue(e.target.value)}></input>
						<IconButton
							onClick={(e: any) => (
								toggleNav(), setModalIsOpen(true), setSearchTerm(inputValue)
							)}
							className='header-input__btn'
							component='a'
							size='large'
							color='inherit'>
							<Pageview />
						</IconButton>
					</div>
				</div>
			</div>
			<IconButton
				size='large'
				edge='end'
				color='inherit'
				aria-label='menu'
				onClick={toggleNav}
				className='toogle-nav'
				sx={{
					display: {
						mr: 2,
						xs: "inline-flex",
						lg: "none",
					},
				}}>
				<MenuIcon />
			</IconButton>
			{(toggleMenu || width > 768) && (
				<ul className='list'>
					<li className='items'>
						<Link href='/'>
							<a
								className={
									router.pathname == "/" ? "active items__link" : "items__link "
								}>
								Home
							</a>
						</Link>
					</li>
					<li className='items'>
						<Link href='/location'>
							<a
								className={
									router.pathname == "/location"
										? "active items__link"
										: "items__link "
								}>
								locations
							</a>
						</Link>
					</li>
					<li className='items'>
						<Link href='/offers'>
							<a
								className={
									router.pathname == "/offers"
										? "active items__link"
										: "items__link "
								}>
								offers
							</a>
						</Link>
					</li>
					<li className='items'>
						<Link href='/search'>
							<a
								className={
									router.pathname == "/search"
										? "active items__link"
										: "items__link "
								}>
								Search
							</a>
						</Link>
					</li>
					<li className='items'>
						<Link href='/about'>
							<a
								className={
									router.pathname == "/about"
										? "active items__link"
										: "items__link "
								}>
								About us
							</a>
						</Link>
					</li>
					<Button
						onClick={() => router.push("/login")}
						className='items login-btn'>
						Login
					</Button>
				</ul>
			)}
		</nav>
	);
};

Header.propTypes = {
	onSidebarOpen: PropTypes.func,
};
function setModalIsOpen(arg0: boolean) {
	throw new Error("Function not implemented.");
}

function setInputValue(value: any): void {
	throw new Error("Function not implemented.");
}

function setSearchTerm(inputValue: any): void {
	throw new Error("Function not implemented.");
}

function inputValue(inputValue: any): void {
	throw new Error("Function not implemented.");
}
