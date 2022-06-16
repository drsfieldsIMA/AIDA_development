/** @format */
// @ts-nocheck
import PropTypes from "prop-types";
import { Heading } from "../../comps/Layout";
import Link from "next/link";
import { useState, useContext } from "react";
import AuthContext from "../../comps/config/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/router";
import useLocalStorage from "../../comps/config/useLocalStorage";
import { parseCookies } from "nookies";
import { API_URL } from "../../comps/config";

export default function AdminIndex({ trash }) {
	const articles = trash;
	return (
		<>
			<Heading content='Admin Page' />
			<nav className='dashboard'>
				Sections:{" "}
				<Link href='/admin/add/articles'>
					<a>Add Offers</a>
				</Link>
			</nav>
			<Heading size='2' content='Articles' />
			<div>
				<ul className='whiteText'>
					{articles &&
						articles.posts.map((item) => (
							<a key={item.post_id} className='single-article'>
								{" "}
								<h3 key={item.post_id}>{item.title}</h3>{" "}
							</a>
						))}
				</ul>
			</div>
		</>
	);
}

export async function getStaticProps() {
	const res = await fetch(
		`https://trashnothing.com/api/v1.2/posts?api_key=vC6smjURIIU6UX1iJaGnLY5LOXG64IIY13iiBiR3&types=offer&sources=trashnothing&latitude=51.50853&longitude=-0.12574&radius=100000`
	);
	const trash = await res.json();
	return {
		props: { trash }, // will be passed to the page component as props
	};
}

AdminIndex.propTypes = {
	children: PropTypes.node,
};
