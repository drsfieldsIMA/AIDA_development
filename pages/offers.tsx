/** @format */
// 👇️ ts-nocheck ignores all ts errors in the file
// @ts-nocheck

import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import Layout from "../comps/Layout";
import NewsCard from "../comps/common/NewsCard";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { API_URL, API_MONGOOSE_URL } from "../comps/config";
import { useQuery } from "react-query";
import theme from "../comps/common/theme/theme";


type QueryParams={
	item:unknown
}

const offers: NextPage = ({ news }:any) => {

	// const sportNews = news.filter((item) => item?.category === "sport");
	// const scienceNews = news.filter(
	// 	(item) => item?.category === "science" || item.category?.name === "nature"
	// );
	// const cultureNews = news.filter((item) => item?.category === "culture");
	// const natureNews = news.filter((item) => item?.category === "nature");

	// // sort by value
	// console.log("Sciencenews", scienceNews);
	// scienceNews.sort(function (a, b) {
	// 	const keyA = new Date(a.createdAt),
	// 		keyB = new Date(b.createdAt);

	// 	// nulls sort before anything else
	// 	if (a.length === 0 || b.length === 0) return -1;

	// 	// Compare the 2 dates
	// 	if (keyA < keyB) return 1;
	// 	if (keyA > keyB) return -1;
	// 	return 0;
	// });

	// const headlineNews = news.filter((item) => item?.category === "news");

    
    console.log(" offers news ", news.posts)
	const trash=news.posts;


	return (
			<main>
				<h1>Newsletter</h1>
					
					<ol>
					<Grid container px={0} marginLeft={0}>
					 {Object.values(trash).map((item): unknown => (
					<li className="pic-links col-50" key={item.post_id}>
					 <div className="feed-image__container">
					 <div className="feed-image__wrapper">
						<div className="feed-image">{item?.photos ?
						<Image src={item.photos[0]?.thumbnail} alt={`${item.post_id}`} width={360} height={360} />
						:"no-photo"}</div>
					  </div>
					  </div>
					  <div className="feed-title">
							<h3>{item.title}</h3>
							<p className="feed-content">{item.content}</p>
                      <div className="feed-button">
							<a href={`/details/${parseInt(item.post_id)}`} className="btn-secondary">REQUEST</a>
					  </div>
					  </div>
					</li>
					 ))}
					 </Grid>
				    </ol>
			</main>
	);
};

export async function getStaticProps() {
	//const  res=await fetch(`${API_URL}/api/news`);
	const res = await fetch(`https://trashnothing.com/api/v1.2/posts?api_key=vC6smjURIIU6UX1iJaGnLY5LOXG64IIY13iiBiR3&types=offer&sources=trashnothing&latitude=51.50853&longitude=-0.12574&radius=100000`);
	const news = await res.json();
//    console.log("news==>",news)
	return {
		props: { news },
	};
}

export default offers;
