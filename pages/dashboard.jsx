import React from "react";
import { Box } from '@mui/material';
import getConfig from 'next/config';
import { API_URL } from "../utils/url";
import PropTypes from "prop-types";
import { parseCookies  } from 'nookies';
import { ConstructionOutlined } from "@mui/icons-material";
import assetArr from "./api/assetArr";
import Link from "next/link";
import CardDefault from "../comps/CardDefault";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withStyles } from '@mui/styles';
import AdminPage from "./admin";
import  Heading from "../comps/common/Heading";
import { useState, useContext } from "react";
import AuthContext from "../comps/context/AuthContext";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from "../comps/Layout/Header";

const Dashboard=()=> {
	const assets=assetArr;
	const [auth, setAuth] = useContext(AuthContext);
   const router = useRouter()
	useEffect(() => {
    if (!(auth.jwt)) {
      router.push('/login')
    }
  }
	)
	return (
		// 		 <main className="row product-container admin-bg">
    //     {assets &&
		// 			assets.map((post) => (
		// 				<div className="col-md-6 col-lg-4">
		// 				<Link href={`/${post.Slug}`} key={post.Slug}>
		// 				<CardDefault props={post} key={post.Slug} />
		// 	    </Link>
		// 			 </div>
		// 			))}			
		// </main>
		<>
		<Header></Header>
		<Heading content="Admin Page" />
		Sections: <Link to="/admin/assets" href="/admin/assets"><a>Manage your assets</a></Link>
	</> 
	// <Heading size="3" content="Assets" />
	// /* children ? children : <p>Sorry you have no assets</p> */
	// </> 
	)
};


export default Dashboard