/* eslint-disable no-mixed-spaces-and-tabs */

/** @format */

import Link from "next/link";
import React from "react";
import CardDefault from "../comps/CardDefault";
import PropTypes from "prop-types";
import assetArr from "./api/assetArr";
import  Head from "next/head";

const ProductStore=()=> {
	const assets=assetArr;
	return (
		<>
		<Head>
        <title>Product Store | AIDA</title>
      </Head>
		<main className="row product-container">
      {assets &&
					assets.map((post) => (
						<div className="col-md-6 col-lg-4"  key={post.Slug}>
							<div   key={post.Slug}>
									<h2 className="whiteText"  key={post.Slug}>{post.Title}</h2> 
									<Link href={`/${post.Slug}`} key={post.Slug} >
									<a key={post.Slug}>
										 <CardDefault props={post} key={post.Slug} />
										 </a>
										 </Link>
								</div>
								</div>
								))}
		</main>
		</>
	);
}

ProductStore.propTypes = {
	props: PropTypes.any,
	assets: PropTypes.any,
	post:PropTypes.arrayOf(PropTypes.string)
};


export default ProductStore;