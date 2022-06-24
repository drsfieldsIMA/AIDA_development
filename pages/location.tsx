/**
 * /* eslint-disable react-hooks/rules-of-hooks
 *
 * @format
 */

// @ts-nocheck
import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../comps/Layout";
import Grid from "@mui/material/Grid";
import { string } from "yup";
import Image from "next/image";
import RenderResult from "next/dist/server/render-result";
import { useState } from "react";

const Location: NextPage = ({ feed }) => {
	const [usersLocation, setUsersLocation] = useState("");
	const [latitude, setUsersLatitude] = useState("");
	const [longitude, setUsersLongitude] = useState("");
	const [position, setPosition] = useState(["", ""]);
	const [isLoading, setIsLoading] = useState(true);
	const [isInitial, setIsInitial] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [data, setData] = useState(feed);

	async function getLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				getCoordinates,
				handleLocationError
			);
		} else {
			alert("Geolocation is not supported by this browser.");
		}
	}

	function getCoordinates(position: {
		coords: { latitude: string; longitude: string };
	}) {
		setUsersLatitude(position.coords.latitude);
		setUsersLongitude(position.coords.longitude);
		searchTrash(
			position.coords.latitude,
			position.coords.longitude,
			setIsInitial,
			setIsInitial,
			setIsLoading,
			setData
		);
	}

	function handleLocationError(error) {
		switch (error.code) {
			case error.PERMISSION_DENIED:
				alert("User denied the request for Geolocation.");
				break;
			case error.POSITION_UNAVAILABLE:
				alert("Location information is unavailable.");
				break;
			case error.TIMEOUT:
				alert("The request to get user location timed out.");
				break;
			case error.UNKNOWN_ERROR:
				alert("An unknown error occurred.");
				break;
			default:
				alert("An unknown error occurred.");
		}
	}

	const searchTrash = async (
		latitude,
		longitude,
		setIsSuccess,
		setIsInitial,
		setIsLoading,
		setData
	) => {
		setIsLoading(false);
		setIsInitial(false);
		setIsSuccess(true);
		if (latitude && longitude) {
			const matchingCategories = await fetch(
				`https://trashnothing.com/api/v1.2/posts/search?api_key=vC6smjURIIU6UX1iJaGnLY5LOXG64IIY13iiBiR3&types=offer&sources=trashnothing&latitude=${latitude}&longitude=${longitude}&radius=10000&radius=160934&per_page=100`
			);
			const trash = await matchingCategories.json();
			setData(trash);
		}
	};

	const renderResult = () => {
		if (isLoading) {
			return <div className='search-message'> Loading... </div>;
		}
		if (data && data.posts.length > 0) {
			return (
				<>
					{data.posts.map((item): unknown => (
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
												src='/globe-2.svg'
												alt={`${item.post_id}`}
												width={360}
												height={360}
												priority
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
				</>
			);
		}
		return <></>;
	};

	return (
		<>
			<div className='location-head'>
				<h1 className='page-title'>
					Location: Find your Local GreenCycle network
				</h1>
				<div className='location-grid'>
					<div className='col-1'>
						<div className='locationpage-image'>
							<Image
								src='/globe-2.png'
								alt='earth'
								className='earth-img'
								layout='fill'
							/>
						</div>
					</div>
					<div className='col-2'>
						<h4>HTML coordinates</h4>
						<p>Latitude:{latitude}</p>
						<p>Latitude:{longitude}</p>
						<button className='btn-primary' onClick={(event) => getLocation()}>
							Get coordinates
						</button>
					</div>
					<div className='col-3'>
						<h4> Google Maps</h4>
						{latitude && longitude ? (
							<Image
								src={`https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=12&size=400x400&key=AIzaSyBgevBciZHQLM1zO91efqUNN47674sWq6Y`}
								alt={"google maps"}
								width={250}
								height={250}></Image>
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
			<div className='location-body'>
				<div className='offers-search-grid'>{renderResult()}</div>
			</div>
		</>
	);
};

export async function getStaticProps() {
	//const  res=await fetch(`${API_URL}/api/feed`);
	const res = await fetch(
		`https://trashnothing.com/api/v1.2/posts?api_key=vC6smjURIIU6UX1iJaGnLY5LOXG64IIY13iiBiR3&types=offer&sources=trashnothing&latitude=51.50853&longitude=-0.12574&radius=100000&per_page=5`
	);
	const feed = await res.json();
	return {
		props: { feed },
	};
}

export default Location;
