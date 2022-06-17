/** @format */
// @ts-nocheck
import Link from "next/link";
import Layout from "../comps/Layout";
import { useState } from "react";
import { string } from "yup";
import Image from "next/image";

export default function Location() {
	const [usersLocation, setUsersLocation] = useState("");
	const [latitude, setUsersLatitude] = useState("");
	const [longitude, setUsersLongitude] = useState("");
	const [position, setPosition] = useState(["", ""]);

	function getLocation() {
		if (navigator.geolocation) {
			console.log("navigator", navigator.geolocation);
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
		console.log("get coordinates", position);
		console.log(position.coords.latitude);
		console.log(position.coords.longitude);
		setUsersLatitude(position.coords.latitude);
		setUsersLongitude(position.coords.longitude);
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

	return (
		<>
			<div className='col-2'>
				<h1>Location</h1>
				<div className='splash-image'>
					<Image
						src='/globe-13351.png'
						alt='earth'
						className='earth-img'
						layout='fill'
					/>
				</div>
			</div>
			<div className='col-1'>
				<button onClick={getLocation}>Get coordinates</button>
				<h4>HTML coordinates</h4>
				<p>Latitude:{latitude}</p>
				<p>Latitude:{longitude}</p>
				<h4> Google Maps reverse geocoding</h4>
				{latitude && longitude ? <img src={""} alt={""}></img> : <></>}
			</div>
		</>
	);
}
