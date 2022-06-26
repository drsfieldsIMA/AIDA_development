/** @format */

// 👇️ ts-nocheck ignores all ts errors in the file
// @ts-nocheck

import type { NextPage } from "next";
import { useState } from "react";
import Link from "next/link";
import useDebounce from "../utils/useDebounce";
import { Grid } from "@mui/material";

const Search: NextPage = ({ info }) => {
	const [selected, setSelected] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [data, setData] = useState([]);
	const [searchValue, setSearchValue] = useState([]);

	const debouncedSearchValue = useDebounce(searchValue, 900);

	const searchCategories = async ({ query }) => {
		setIsSuccess(false);
		setIsLoading(true);
		const matchingCategories = await fetch(
			`https://trashnothing.com/api/v1.2/posts/search?api_key=vC6smjURIIU6UX1iJaGnLY5LOXG64IIY13iiBiR3&types=offer&sources=trashnothing&latitude=54.5481566&longitude=-1.2587695&radius=10000&radius=160934&search=${searchValue}`
		);
		const trash = await matchingCategories.json();
		setData(trash);
		setIsSuccess(true);
		setIsLoading(false);
	};

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
							data.posts.map((item) => (
								<div key={item.post_id} className='search-trash-card'>
									<Link href={`/details/${parseInt(item.post_id)}`}>
										<a>
											<h3>{item.title}</h3>
										</a>
									</Link>
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
			<div className='col-20'>
				<div className='search-page_wrapper'>
					<input
						type='text'
						onChange={({ target: { value } }) => {
							setSearchValue(value);
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
			<div className='col-80'>{renderResult()}</div>
		</div>
	);
};

export async function getStaticProps() {
	const res = await fetch(
		`https://trashnothing.com/api/v1.2/posts?api_key=vC6smjURIIU6UX1iJaGnLY5LOXG64IIY13iiBiR3&types=offer&sources=trashnothing&latitude=54.5481566&longitude=-1.2587695&radius=10000`
	);
	const info = await res.json();
	return {
		props: { info },
	};
}

export default Search;
