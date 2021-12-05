/** @format */
/* eslint-disable no-mixed-spaces-and-tabs */
// import Link from "next/link";
import React  from "react";
import {Router, Switch, Route } from "react-router-dom";
import HomePage from "../comps/Home/homePage";
import PropTypes from "prop-types";
import { API_URL } from "../utils/url";
import Nav from "../comps/Layout/Nav";
import FormLogin from "./login";
import Dashboard from "./dashboard";
import assetArr from "./api/assetArr";
import Link from 'next/link'
import { createMemoryHistory } from 'history';
import Heading from "../comps/common/Heading";
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import Footer from '../comps/Layout/Footer';
import  { AuthProvider } from "../comps/context/AuthContext";
import Layout from "../comps/Layout/Layout";
import HomeDeck from "../comps/Home/HomeCards";
import ProductStore from "./products";
import AboutSection from "./about";
import productPost from "./[slug]";
import CarouselApp from "../comps/Home/CarouselApp"
import AdminPage from "./admin";
import AdminAssetsPage from "./admin/assets";
import AuthContext from "../comps/context/AuthContext";
import { useState, useContext } from "react";
import { useRouter } from 'next/router';

const Index = ({assets,props}) => {
const router = useRouter()
const history = createMemoryHistory();

const [auth, setAuth] = useContext(AuthContext);
	return (
		<div>
		<Router  history={history}>
				<Switch>
					<Route path="/"  exact >
					<div>
					<HomePage/>
					</div>
					<div >
					<HomeDeck/>
					</div>
					<section className="carousel-wrapper">
					<CarouselApp props={{assets:assets}}></CarouselApp>
					</section>
					</Route>
					<Route path="/products">
					<Heading content="Products" />
					<ProductStore props={assets}/>
					</Route>
					<Route path="/login">
					<FormLogin/>
					</Route>
					<Route path="/about">
					<Heading content="About" />
					<AboutSection/>
					</Route>
					{assets &&
					assets.map((post) => (
						<Route path={`/${post.Slug}`} key={post.Slug}>
							<Heading  key={post.Slug} content="Individual Products" />
								<productPost></productPost>
						</Route>
					))}
					<Route path="/admin">
					<Heading content="Admin" />
					<Dashboard/>
					</Route>
					<Route path="/admin/assets" exact>
					<Heading content="" />
					</Route>
						<Route path="/admin/assets/add">
						</Route>
				</Switch>
		</Router>
		</div>
	);
};



export  async function getStaticProps() {
	//	const res = await fetch(`http://localhost:1337/assets`);
//		const data = await res.json();
	const data=assetArr
		return {
			props: { assets: data },
		};
	}

Index.propTypes = {
	assets: PropTypes.objectOf(PropTypes.string),
	assetArr: PropTypes.objectOf(PropTypes.string),
	obj:PropTypes.objectOf(PropTypes.array),
	post:PropTypes.arrayOf(PropTypes.string),
	FormLogin:PropTypes.func
};


export default Index;
