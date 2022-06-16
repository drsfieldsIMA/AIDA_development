/** @format */
/* eslint-disable */
import type { NextPage } from "next";
import { Key, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import RecycleCard from "../comps/common/RecycleCard";
import Layout from "../comps/Layout";
import NewsCard from "../comps/common/NewsCard";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { API_URL, API_MONGOOSE_URL } from "../comps/config";
import { useQuery } from "react-query";
import theme from "../comps/common/theme/theme";
import { ThemeProvider } from "@material-ui/core";
import news from "../pages/api/news";
import ResponsivePlayer from "../comps/ResponsivePlayer";
import SplashCard from "comps/common/SplashCard";
import { Footer } from "comps/Footer";
import ProductFeed from "comps/common/ProductFeed";
import ReviewSection from "comps/common/ReviewSection";

const Home = ({ news, trash }: { news: any; trash: any }) => {
	console.log("index news==>", news);
	console.log("index trash==>", trash);
	const scienceNews = news;

	// sort by value
	console.log("Sciencenews", scienceNews);
	scienceNews.sort(function (
		a: { createdAt: string | number | Date; length: number },
		b: { createdAt: string | number | Date; length: number }
	) {
		const keyA = new Date(a.createdAt),
			keyB = new Date(b.createdAt);

		// nulls sort before anything else
		if (a.length === 0 || b.length === 0) return -1;

		// Compare the 2 dates
		if (keyA < keyB) return 1;
		if (keyA > keyB) return -1;
		return 0;
	});

	const headlineNews = news.filter(
		(item: { category: string }) => item?.category === "news"
	);

	return (
		<ThemeProvider theme={theme}>
			<main>
				<div className='col-main'>
					<Grid container px={0} marginLeft={0}>
						<Grid xs={12} sm={12}>
							<div className='recycle-container'>
								<SplashCard trash={trash} />
							</div>
						</Grid>
						<Grid xs={12} sm={12}>
							<div className='recycle-container'>
								<h2> GreenCycle Informmercial</h2>
								<ResponsivePlayer />;
								<ReviewSection />
							</div>
						</Grid>
					</Grid>

					<div className='recycle-wrapper'>
						{scienceNews.map(
							(item: { post_id: Key | null | undefined }): any => (
								<div key={item.post_id} className='recycle-container'>
									<h3> GreenCycle Statistics</h3>
									<RecycleCard key={item.post_id} card={item} />
								</div>
							)
						)}
					</div>
					<div className='plenary-bkg'></div>
				</div>
				<div className='col-aside'>
					<ProductFeed trashBin={trash}></ProductFeed>
				</div>
			</main>
		</ThemeProvider>
	);
};

export async function getStaticProps() {
	//const  res=await fetch(`${API_URL}/api/news`);
	//	const res = await fetch(`${API_MONGOOSE_URL}/articles`);
	//	const news = await res.json();
	const res = await fetch(
		`https://trashnothing.com/api/v1.2/posts?api_key=vC6smjURIIU6UX1iJaGnLY5LOXG64IIY13iiBiR3&types=offer&sources=trashnothing&latitude=51.50853&longitude=-0.12574&radius=100000`
	);
	const trash = await res.json();
	const { news } = require("../pages/api/news/data.json");
	return {
		props: { news, trash },
	};
}

export default Home;
