/**
 * /* eslint-disable react-hooks/rules-of-hooks
 *
 * @format
 */
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

type QueryParams = {
	item: unknown;
};

const offers: NextPage = ({ feed }: any) => {
	const trash = feed.posts;
	return (
		<main>
			<h1>Offers</h1>
			<h2>London the Capital</h2>
			<ol>
				<Grid container px={0} marginLeft={0}>
					<div className='offers-search-grid'>
						{trash.map((item): unknown => (
							<li className='pic-links' key={item.post_id}>
								<div className='feed-image__container'>
									<div className='feed-image__wrapper'>
										<div className='feed-image'>
											{item?.photos ? (
												<Image
													src={item.photos[0]?.thumbnail}
													alt={`${item.post_id}`}
													width={360}
													height={360}
												/>
											) : (
												<Image
													src='/globe-2.png
													'
													alt={`${item.post_id}`}
													width={360}
													height={360}
												/>
											)}
										</div>
									</div>
								</div>
								<div className='feed-title'>
									<h3>{item.title}</h3>
								</div>
								<div className='feed-button'>
									<a
										href={`/details/${parseInt(item.post_id)}`}
										className='btn-secondary'>
										REQUEST
									</a>
								</div>
							</li>
						))}
					</div>
				</Grid>
			</ol>
		</main>
	);
};

export async function getStaticProps() {
	//const  res=await fetch(`${API_URL}/api/feed`);
	const res = await fetch(
		`https://trashnothing.com/api/v1.2/posts?api_key=vC6smjURIIU6UX1iJaGnLY5LOXG64IIY13iiBiR3&types=offer&sources=trashnothing&latitude=51.50853&longitude=-0.12574&radius=100000&per_page=100`
	);
	const feed = await res.json();
	//    console.log("feed==>",feed)
	return {
		props: { feed },
	};
}

export default offers;
