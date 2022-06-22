/** @format */

import * as React from "react";
import { useEffect, useState, useRef, useContext } from "react";
import { NextPlan } from "@mui/icons-material";
import NextLink from "next/link";
import { Box } from "@mui/material";
import { Button } from "@mui/material";

const ArticlesSearchResult = ({
	searchTerm,
	articles,
	setModalIsOpen,
}: {
	searchTerm: string;
	articles: any;
	setModalIsOpen: any;
}) => {
	return articles?.length > 0 ? (
		<div className='search-grid'>
			{articles?.map(
				(
					article: {
						category: any;
						id: React.Key | null | undefined;
						slug: any;
						title:
							| boolean
							| React.ReactChild
							| React.ReactFragment
							| React.ReactPortal
							| null
							| undefined;
					},
					index: React.Key | null | undefined
				) =>
					article.category ? (
						<NextLink
							key={article.id}
							href={`${article?.category}/${article?.slug}`}
							passHref={false}>
							<Button
								key={index}
								className='single-asset'
								component='a'
								onClick={() => setModalIsOpen(false)}>
								{article.title}{" "}
							</Button>
						</NextLink>
					) : null
			)}
		</div>
	) : (
		<div className='search-message'> No articles found</div>
	);
};

export default ArticlesSearchResult;
