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
			navigator.geolocation.getCurrentPosition(getCoordinates);
		} else {
			alert("Geolocation is not supported by this browser.");
		}
	}

	function getCoordinates(position: {
		coords: { latitude: string; longitude: string };
	}) {
		console.log("get coordinates", position);
		console.log(position.coords.latitude);
		setUsersLatitude(position.coords.latitude);
		setUsersLongitude(position.coords.longitude);
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
			</div>
		</>
	);
}
