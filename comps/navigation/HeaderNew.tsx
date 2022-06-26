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
import { useQuery } from "react-query";
import { AuthContext } from "../config/AuthContext";
import useKeyPress from "../hooks/useKeyPress";
import { Pageview } from "@material-ui/icons";
import useSWR, { SWRConfig } from "swr";
import NextLink from "next/link";
import ArticlesSearchResult from "../ArticlesSearchResult";

export const fetcher = (args) =>
	fetch(args).then((response) => response.json());

Modal.setAppElement("#__next");

export const Header: any = () => {
	const searchModal = async ({ query }) => {
		const args: any = `https://trashnothing.com/api/v1.2/posts/search?api_key=vC6smjURIIU6UX1iJaGnLY5LOXG64IIY13iiBiR3&types=offer&sources=trashnothing&latitude=54.5481566&longitude=-1.2587695&radius=10000&radius=160934&search=${searchValue}`;
		const { data, error } = useSWR(args, fetcher, {
			loadingTimeout: 2000,
		});
		const articles = data;
	};

	const router = useRouter();
	const [toggleMenu, setToggleMenu] = useState(false);

	const [width, height] = useDeviceSize();

	const [inputValue, setInputValue] = React.useState("");
	const [searchTerm, setSearchTerm] = React.useState("");
	const [modalIsOpen, setModalIsOpen] = React.useState(false);

	const toggleNav = () => {
		setToggleMenu(!toggleMenu);
	};

	const toggleLogo = () => {
		router.pathname === "/" ? toggleNav() : null;
	};

	const eventToSearch: boolean = useKeyPress("Enter");
	const eventToClose: boolean = useKeyPress("Escape");
	if (eventToSearch == true) {
		if (inputValue.length > 0 && !modalIsOpen) {
			setSearchTerm(inputValue);
			setToggleMenu(false);
			setModalIsOpen(true);
		}
	}

	if (eventToClose == true) {
		if (modalIsOpen) {
			setModalIsOpen(false);
		}
	}

	const { isLoading, isError, isSuccess, data, status } = useQuery(
		searchTerm && ["searchArticles", searchTerm],
		() => searchArticles(searchTerm, articles),
		{ initialData: articles }
	);

	const renderResultList = (
		searchTerm: string,
		data: any,
		setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	) => {
		if (data) {
			return (
				<ArticleSearchResult
					searchTerm={searchTerm}
					articles={data}
					setModalIsOpen={setModalIsOpen}
				/>
			);
		}
		return <></>;
	};

	return (
		<div>
			<nav className='header'>
				<Link href='/'>
					<a className='logo-link' onClick={() => toggleLogo()}>
						<div className='logo'></div>
					</a>
				</Link>
				<div className='tagline_wrapper'>
					<div className='tagline'>
						<div className='f-box'>
							<input
								className='header-input'
								onChange={(e) => setInputValue(e.target.value)}></input>
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
							<button onClick={toggleNav} className='hidden-btn'>
								<Link href='/'>
									<a
										className={
											router.pathname == "/"
												? "active items__link"
												: "items__link "
										}>
										Home
									</a>
								</Link>
							</button>
						</li>
						<li className='items'>
							<button onClick={toggleNav} className='hidden-btn'>
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
							</button>
						</li>
						<li className='items'>
							<button onClick={toggleNav} className='hidden-btn'>
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
							</button>
						</li>
						<li className='items'>
							<button onClick={toggleNav} className='hidden-btn'>
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
							</button>
						</li>
						<li className='items'>
							<button onClick={toggleNav} className='hidden-btn'>
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
							</button>
						</li>
						<Button
							onClick={() => router.push("/login")}
							className='items login-btn'>
							Login
						</Button>
					</ul>
				)}
			</nav>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={() => {}}
				closeOnEscape={true}>
				<button onClick={() => setModalIsOpen(false)}>Go Back</button>
				<br></br>
				<strong>Searching Articles for your search : {searchTerm}</strong>
				{modalIsOpen
					? renderResultList(searchTerm, data, setModalIsOpen)
					: null}
			</Modal>
		</div>
	);
};

Header.propTypes = {
	onSidebarOpen: PropTypes.func,
};
