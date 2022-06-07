/** @format */
import React, { useState, useEffect, FC } from "react";
import PropTypes from "prop-types";
import { Card, Box, Divider, CircularProgress } from "@mui/material";
//import { API_URL } from "../utils/url";
import { Grid } from "@mui/material";
import Link from "next/link";
import { InsertEmoticon } from "@mui/icons-material";

export default function RecyclePost({ trash }: { trash: Array<object> | any }) {
	const [isLoading, setIsLoading] = useState(true);
    console.log("Recycle Post " , trash)
	useEffect(() => {
		if (trash) {
			//	const { title, main_image, article_content, category } = trash;
			var content = trash?.description?.replace(/<img[^>]*>/, "");
			const imgTags = trash?.description?.match(/<img [^>]*src="[^"]*"[^>]*>/gm);
			const frameTags = trash?.description?.match(
				/<iframe [^>]*src="[^"]*"[^>]*>/gm
			);
			setIsLoading(false);
		}
	}, [trash]);

	return (
		<>
			{isLoading ? (
				<Box className='container-circular-progress'>
					<CircularProgress className='circular-progress' />
				</Box>
			) : (
				<Box className='product-box'>
					<Card
						className='singleCard'
						style={{ marginBottom: "2em", marginTop: "1em" }}>
						<Grid container spacing={2} px={2} marginLeft={0}>
							<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
								<div
									className='img-responsive ratio-4-3'
									style={{
										background: `url(${trash[0].photos[0]?.thumbnail}) 50% 50% no-repeat`,
										backgroundSize: "cover",
									}}></div>
								<div className='thumbnail-group'>
									{trash[0].photos[0]
										? <div
													key={trash.post_id}
													className='content-container img-thumbnail'
													style={{
														background: `url(${trash[0].photos[0]?.thumbnail}) 50% 50% no-repeat`,
													}}></div>
										: null}
								</div>
							</Grid>
							<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
								<div className='flex-box__container__id'>
									<div className='flex-box__id'>
										<h1 className='detail-h1'>{trash[0].title}</h1>
									</div>
								</div>
								<div className='flex-box__container__id'>
									<div className='flex-box__id'>
										<h2 className='detail-price'>$19.99</h2>
										<h2 className='detail-h2'>{trash[0].date}</h2>
									</div>
								</div>
								<Divider
									sx={{
										borderColor: "#00035a",
										my: 3,
									}}
								/>
								<Link href={`/browse?${trash.genre}`}>
									<a className='category-link'>{trash[0].type}</a>
								</Link>
								<Divider
									sx={{
										borderColor: "#00035a",
										my: 3,
									}}
								/>
								<div
									className='content-container'
									color='#e52d27'
									dangerouslySetInnerHTML={{ __html: `${trash[0].content}` }}
								/>
							</Grid>
						</Grid>
					</Card>
				</Box>
			)}
		</>
	);
}

export async function getStaticPaths() {
	//	const res = await fetch(`http://localhost:1337/trashs`);
	//	const trashs = await res.json();
	const {news}=require("../api/news/data.json")
	const paths = news.slice(0, 5).map((post: { id: any; }) => ({
		params: { id: String(post.id) },
	}));
	return {
		paths,
		fallback: true,
	};
}

export async function getStaticProps({ params }: { params: object | any }) {
	console.log("Static Params", params);
	let { id } = params;
	console.log("Static id", id);
	let idInt = parseInt(id);
		const res = await fetch(`https://trashnothing.com/api/v1.2/posts?api_key=vC6smjURIIU6UX1iJaGnLY5LOXG64IIY13iiBiR3&types=offer&sources=trashnothing&latitude=51.50853&longitude=-0.12574&radius=100000`);
	//	console.log("[id] response==>", res);
		const news = await res.json();
		const trash =news.posts.slice(0,1);
	//	console.log("[id] trash==>", trash);

	//	console.log("trash asset", asset);
	return {
		props: { trash },
	};
}
