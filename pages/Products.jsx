
/** @format */

import Link from "next/link";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "../components/Nav";
import Image from "next/image"
import HomePage from "./HomePage";
import Heading from "../components/Heading";
import SplashSection from "./Splash";
import CardDefault from "../components/CardDefault";
import Carousel from "react-elastic-carousel";
import PropTypes from "prop-types";

const Products = ({ assets }) => {
	return (
		<main className="row product-container">
      <div className="col-md-6 col-lg-4">
      <Heading content="Store" />
      {assets &&
					assets.map((post) => (
	//					console.log("hello post",post),
						// <Link href={`/${post.Slug}`} key={post.Slug}>
						// 	<a>
						// 	<h2>{post.Title}</h2>
						//		<div>
						//			{post.admin_user.firstname} {post.admin_user.lastname}
						//		</div> */

						// </a>
						// </Link>
						<CardDefault props={post} key={post.Slug} />
					))}
        </div>
		</main>
	);
};

export async function getStaticProps() {
	// get assets from our api
	const res = await fetch("http://localhost:1339/assets");
	const assets = await res.json();
//	console.log(assets);
	return {
		props: { assets },
	};
}


export default Products;