/** @format */
import React from "react";
import PropTypes from "prop-types";

export default function Post({ asset }) {
	return (
		<div>
			<h1>{asset.Title}</h1>
			<h2>{asset.Price.toFixed(2)}</h2>
			<p>{asset.Content}</p>
		</div>
	);
}

export async function getStaticPaths() {
	const res = await fetch("http://localhost:1339/assets");
	const assets = await res.json();
	//	console.log("posts==", assets);
	const paths = assets.map((post) =>
		//		console.log("hello slug", post.Slug),
		({
			params: { slug: post.Slug },
		})
	);

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	//	console.log("hello params", params);
	const { slug } = params;
	//	console.log("hello slug", slug);
	const res = await fetch(`http://localhost:1339/assets?Slug=${slug}`);
	//	console.log("hello res", res);
	const data = await res.json();
	//	console.log("hello data", data);
	const asset = data[0];
	console.log("hello asset", data);
	return {
		props: { asset },
	};
}

Post.propTypes = {
	assets: PropTypes.arrayOf(PropTypes.string),
	Title: PropTypes.string,
};
