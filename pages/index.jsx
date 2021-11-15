/** @format */

import Link from "next/link";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "../components/Nav";
import Image from "next/image";
import HomePage from "./HomePage";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import turbine from "./images/turbine.svg";
import SplashSection from "./Splash";
import CardDefault from "../components/CardDefault";
import Carousel from "react-elastic-carousel";
import PropTypes from "prop-types";

const Index = ({ assets }) => {
	return (
		<Router>
			<Nav />
			<Switch>
					<Route exact path="/">
						<div className="container">
						<HomePage props={assets} />
						</div>
						<div className="container_2">
							<div className="row">
						<div className="col-md-6 col-lg-4">
			<p
							className="homeSkew"
							style={{ fontFamily: "Fira Sans Condensed",paddingTop:120,paddingBottom:40 }}
						>
							It is a long established fact that a reader will be distracted by
							the readable content of a page when looking at its layout. The
							point of using Lorem Ipsum is that it has a more-or-less normal
							distribution of letters, as opposed to using Content here, content
							here, making it look like readable English. Many desktop
							publishing packages and web page editors now use Lorem Ipsum as
							their default model text, and a search for lorem ipsum will
							uncover many web sites still in their infancy. Various versions
							have evolved over the years, sometimes by accident, sometimes on
							purpose (injected humour and the like).
						</p>
						</div>
						<div className="col-md-6 col-lg-4">
						<p
							className="homeSkew"
							style={{ fontFamily: "Fira Sans Condensed",paddingTop:120,paddingBottom:40 }}
						>
							It is a long established fact that a reader will be distracted by
							the readable content of a page when looking at its layout. The
							point of using Lorem Ipsum is that it has a more-or-less normal
							distribution of letters, as opposed to using Content here, content
							here, making it look like readable English. Many desktop
							publishing packages and web page editors now use Lorem Ipsum as
							their default model text, and a search for lorem ipsum will
							uncover many web sites still in their infancy. Various versions
							have evolved over the years, sometimes by accident, sometimes on
							purpose (injected humour and the like).
						</p>
						</div>
						<div className="col-md-6 col-lg-4">
						<p
							className="homeSkew"
							style={{ fontFamily: "Fira Sans Condensed",paddingTop:120,paddingBottom:40 }}
						>
							It is a long established fact that a reader will be distracted by
							the readable content of a page when looking at its layout. The
							point of using Lorem Ipsum is that it has a more-or-less normal
							distribution of letters, as opposed to using Content here, content
							here, making it look like readable English. Many desktop
							publishing packages and web page editors now use Lorem Ipsum as
							their default model text, and a search for lorem ipsum will
							uncover many web sites still in their infancy. Various versions
							have evolved over the years, sometimes by accident, sometimes on
							purpose (injected humour and the like).
						</p>
						</div>
					</div>
			<Carousel className="homeSkew" itemsToShow={3} style={{marginTop:50}}>
				{assets &&
					assets.map(
						(post) => (
							console.log("incoming", post),
							(
								<>
								 <Link href={`/${post.Slug}`} key={post.Slug}>
							 	<a>
									<h2>{post.Title}</h2>
								<div>
										</div> 

								</a>
								</Link>
								<CardDefault className="box-shadow-1" props={post} key={post.Slug} />
								</>
							)
						)
					)}
			</Carousel>
			</div>
					</Route>
					<Route path="/products">
						<Heading content="Products" />
						<main className="row product-container">
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
						<>
						<div className="col-md-6 col-lg-4">
						<CardDefault props={post} key={post.Slug}  />
						</div>
						</>
					))}
		</main>
					</Route>
					<Route path="/login"></Route>
					<Route path="/about">
						About
						{/* <img class="rotate_03"  src="/turbine.svg" alt="wind turbine"></img> */}
						<Carousel itemsToShow={3}>
				{assets &&
					assets.map((post) => (
						console.log("hello post",post),
						// <Link href={`/${post.Slug}`} key={post.Slug}>
						// 	<a>
						// 	<h2>{post.Title}</h2>
						//		<div>
						//			{post.admin_user.firstname} {post.admin_user.lastname}
						//		</div> */

						// </a>
						// </Link>
						<CardDefault props={post} key={post.Slug}/>
					))}
			</Carousel>
					</Route>
				</Switch>
		</Router>
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
Index.propTypes = {
	assets: PropTypes.arrayOf(PropTypes.string)
};


export default Index;
