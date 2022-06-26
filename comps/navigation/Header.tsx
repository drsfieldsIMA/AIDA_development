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
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import Modal from "react-modal";
import { ReactQueryDevtools } from "react-query-devtools";
import { AuthContext } from "../config/AuthContext";
import useKeyPress from "../hooks/useKeyPress";
import { Pageview } from "@material-ui/icons";
import NextLink from "next/link";
import useSWR, { SWRConfig } from "swr";
import { useQuery } from "react-query";

export const fetcher = (args) =>
	fetch(args).then((response) => response.json());

Modal.setAppElement("#__next");

export const Header = () => {
	const router = useRouter();
	const [toggleMenu, setToggleMenu] = useState(false);
	const [data, setData] = useState([]);
	const [width, height] = useDeviceSize();
	const [inputValue, setInputValue] = React.useState("");
	const [searchTerm, setSearchTerm] = React.useState("");
	const [modalIsOpen, setModalIsOpen] = React.useState(false);

	const searchModal = async ({ query }) => {
		const matchingCategories = await fetch(
			`https://trashnothing.com/api/v1.2/posts/search?api_key=vC6smjURIIU6UX1iJaGnLY5LOXG64IIY13iiBiR3&types=offer&sources=trashnothing&latitude=54.5481566&longitude=-1.2587695&radius=10000&radius=160934&search=${inputValue}`
		);
		const trash = await matchingCategories.json();
		console.log("trash==>", trash);
		setData(trash.posts);
	};

	console.log("data", data);

	const toggleNav = () => {
		setToggleMenu(!toggleMenu);
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

	const renderResultList = (
		searchTerm: string,
		data: any,
		setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	) => {
		console.log("render Result List", data, searchTerm);
		if (data) {
			return (
				<div>
					<h1>Search Results</h1>
					<div className='search-grid'>
						{data.length > 0 ? (
							data.map(
								(item: {
									post_id: React.Key | null | undefined;
									title:
										| boolean
										| React.ReactChild
										| React.ReactFragment
										| React.ReactPortal
										| null
										| undefined;
								}) => (
									<div key={item.post_id} className='search-trash-card'>
										<Link href={`/details/${parseInt(item.post_id)}`}>
											<a>
												<h3>{item.title}</h3>
											</a>
										</Link>
									</div>
								)
							)
						) : (
							<h3>No results found</h3>
						)}
					</div>
				</div>
			);
		}
		return <></>;
	};

	return (
		<div>
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
									toggleNav(), setModalIsOpen(true), searchModal(inputValue)
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
					className='toggle-nav'
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
								<Link href='/user'>
									<a
										className={
											router.pathname == "/user"
												? "active items__link"
												: "items__link "
										}>
										user
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
				<strong>Searching Articles for your search : {inputValue}</strong>
				{modalIsOpen
					? renderResultList(inputValue, data, setModalIsOpen)
					: null}
			</Modal>
		</div>
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
