/** @format */
import React, { useState, useEffect, FC } from "react";
import PropTypes from "prop-types";
import { Card, Box, Divider, CircularProgress } from "@mui/material";
//import { API_URL } from "../utils/url";
import { Grid } from "@mui/material";
import Link from "next/link";
import { InsertEmoticon } from "@mui/icons-material";
 
const static_paths=[
	{
	  post_id: 37358768,
	  group_id: null,
	  user_id: 7202062,
	  title: 'Selection of Pots/Pans (Leyton E10)',
	  content: 'No longer need these, will be throwing away unless someone wants them.\n' +
		'\n' +
		'3 piece pot set\n' +
		'Wok\n' +
		'Large frying pan\n' +
		'Pressure cooker with no lid\n' +
		'\n' +
		'To be collected today or tomorrow\n' +
		'\n' +
		'Fair Offer Policy applies\n' +
		'\n' +
		'\n' +
		'https://trashnothing.com/pics/494Rhye',
	  date: '2022-06-10T10:02:39',
	  type: 'offer',
	  latitude: 51.5743932487,
	  longitude: -0.00922329612877,
	  footer: null,
	  photos: [ [Object], [Object], [Object] ],
	  reselling: null,
	  repost_count: 0,
	  url: 'https://trashnothing.com/post/37358768/selection-of-pots-pans-leyton-e10',
	  outcome: null,
	  expiration: '2022-06-15T10:02:37',
	  source: 'trashnothing'
	},
	{
	  post_id: 37358732,
	  group_id: null,
	  user_id: 2469103,
	  title: 'Sleepyhead bed guard for babies (DA3 New Ash Green)',
	  content: 'White.\n' +
		'Used, but in very good condition.\n' +
		'Been in storage for a while so could do with airing out before use\n' +
		'\n' +
		'Check out the pictures at:\n' +
		'https://trashnothing.com/pics/7Mq2nVA',
	  date: '2022-06-10T09:58:06',
	  type: 'offer',
	  latitude: 51.367081,
	  longitude: 0.304457,
	  footer: null,
	  photos: [ [Object] ],
	  reselling: null,
	  repost_count: 0,
	  url: 'https://trashnothing.com/post/37358732/sleepyhead-bed-guard-for-babies-da3-new-ash-green',
	  outcome: null,
	  expiration: '2022-09-08T09:58:06',
	  source: 'trashnothing'
	},
	{
	  post_id: 37358731,
	  group_id: null,
	  user_id: 7093862,
	  title: 'Extension leads (Hitchin SG5)',
	  content: '4 extension leads, various lengths,  three with 4 sockets and one with 2 sockets',
	  date: '2022-06-10T09:57:41',
	  type: 'offer',
	  latitude: 51.94921,
	  longitude: -0.283414,
	  footer: null,
	  photos: null,
	  reselling: null,
	  repost_count: 0,
	  url: 'https://trashnothing.com/post/37358731/extension-leads-hitchin-sg5',
	  outcome: null,
	  expiration: '2022-09-08T09:57:41',
	  source: 'trashnothing'
	}
]

export default function RecyclePost({ trash }: { trash: Array<object> | any }) {
	const [isLoading, setIsLoading] = useState(true);
    console.log("Recycle trash Post" , trash)
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
													key={trash[0].post_id}
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
								<Link href={`/browse?${trash[0].genre}`}>
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
	const res = await fetch(`https://trashnothing.com/api/v1.2/posts?api_key=vC6smjURIIU6UX1iJaGnLY5LOXG64IIY13iiBiR3&types=offer&sources=trashnothing&latitude=51.50853&longitude=-0.12574&radius=100000`);
    const news = await res.json();
	const paths = news.posts.slice(0, 3).map((post: { post_id: any; }) => ({
		params: { id: String(post.post_id) },
	}));
	return {
		paths,
		fallback: true,
	};
}

export async function getStaticProps({ params }: { params: object | any }) {
	//console.log("Static Params", params);
	let { id } = params;
	console.log("The Static id for trash nothing", id);
	let idInt = parseInt(id);
		const res = await fetch(`https://trashnothing.com/api/v1.2/posts/?${idInt}api_key=vC6smjURIIU6UX1iJaGnLY5LOXG64IIY13iiBiR3&types=offer&sources=trashnothing&latitude=51.50853&longitude=-0.12574&radius=100000`);
	//	console.log("[id] response==>", res);
		const news = await res.json();
		const trash =news.posts.slice(0,1);
	//	console.log("[id] trash==>", trash);

	//	console.log("trash asset", asset);
	return {
		props: { trash },
	};
} 
