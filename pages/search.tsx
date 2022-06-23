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
import { API_URL } from "../comps/config";
import { useQuery } from "react-query";
import useDebounce from "../utils/useDebounce";
import searchArticles from "utils/searchArticles";
import ArticlesSearchResult from "../comps/TrashSearchResults";
import Dropdown from "../comps/navigation/Dropdown";
import { MultiSelect } from "react-multi-select-component";
import { ALL_ARTICLE_ENTRIES } from "constants/articleEntries";
import Controller from "comps/common/Controller";
import { render } from "sass";

const Search: NextPage = ({ news }) => {
	const options = [
		{ label: "Electricals", value: "electricals" },
		{ label: "Phones", value: "phones" },
		{ label: "Furnitute", value: "furniture" },
		{ label: "Training Equipment ?", value: "training" },
		{ label: "Metal scrap ?", value: "metal" },
		{ label: "Clothes ?", value: "clothes" },
		{ label: "Other ?", value: "Other" },
	];
	const [selected, setSelected] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [data, setData] = useState([]);
	const [searchValue, setSearchValue] = useState([]);

	const handleChange = (selected) => {
		console.log("selected==>", selected);
		setSearchValue(selected);
	};

	const debouncedSearchValue = useDebounce(searchValue, 900);

	const searchCategories = async ({ query }) => {
		setIsSuccess(false);
		setIsLoading(true);
		console.log("query==>", typeof searchValue);
		const matchingCategories = await fetch(
			`https://trashnothing.com/api/v1.2/posts/search?api_key=vC6smjURIIU6UX1iJaGnLY5LOXG64IIY13iiBiR3&types=offer&sources=trashnothing&latitude=54.5481566&longitude=-1.2587695&radius=10000&radius=160934&search=${searchValue}`
		);
		const trash = await matchingCategories.json();
		setData(trash);
		setIsSuccess(true);
		setIsLoading(false);
	};
	/* 	const { isLoading, isError, isSuccess, data } = useQuery(
    ["searchCategories", debouncedSearchValue],
    () => searchCategories(debouncedSearchValue),
    {
      enabled: debouncedSearchValue.length > 0,
    }
  ); */
	//	const trash = searchCategories(debouncedSearchValue)

	const renderResult = () => {
		if (isLoading) {
			return <div className='search-message'> Loading... </div>;
		}

		if (isError) {
			return <div className='search-message'>Something went wrong</div>;
		}

		if (isSuccess) {
			return (
				<div>
					<h1>Search Results</h1>
					<div className='search-grid'>
						{data &&
							data.posts.map((article) => (
								<div key={article.post_id} className='pokemon-card'>
									{article.title}
								</div>
							))}
					</div>
				</div>
			);
		}

		return <></>;
	};

	return (
		<div>
			<h1 className='page-title'>Search by keywords</h1>
			<div className='container-col'>
				<div className='col-25'>
					<div className='search-page_wrapper'>
						<input
							type='text'
							onChange={({ target: { value } }) => {
								setSearchValue(value);
								console.log("value==>", value);
							}}
							value={searchValue}
							placeholder='Keyword'
							className='search-value-input'
						/>
						<button
							className='search-value-btn'
							onClick={(event) => searchCategories(debouncedSearchValue)}>
							Search
						</button>
					</div>

					{/* <Controller></Controller> */}
				</div>
				<div className='col-75'>{renderResult()}</div>
			</div>
		</div>
	);
};

export async function getStaticProps() {
	const res = await fetch(
		`https://trashnothing.com/api/v1.2/posts?api_key=vC6smjURIIU6UX1iJaGnLY5LOXG64IIY13iiBiR3&types=offer&sources=trashnothing&latitude=54.5481566&longitude=-1.2587695&radius=10000`
	);
	const news = await res.json();
	return {
		props: { news },
	};
}

export default Search;
