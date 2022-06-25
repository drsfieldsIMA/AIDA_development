/** @format */
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import RenderResult from "next/dist/server/render-result";
import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Header } from "@/comps/navigation/Header";

const Styleguide: NextPage = ({}) => {
	const userArray: { name: string } = {
		name: "Nathan D",
	};
	const router = useRouter();
	return (
		<div className='recycle-container'>
			<h1 className='page-title'>Style Guide</h1>

			<h2 className='page-title'>Logo</h2>
			<div className='img-wrapper'>
				<Image
					src='/logo-3.svg'
					className='logo'
					width={70}
					height={70}
					sizes='cover'
					alt='GreenCycle logo'
				/>
				<p>For all devices and screen sizes the logo in the header is</p>
				<p>width=70px</p>
				<p>height=70px</p>
				<Image
					src='/truck.svg'
					className='logo'
					width={70}
					height={70}
					sizes='cover'
					alt='GreenCycle Truck'></Image>
                    
			</div>

			<h2 className='page-title'>Header</h2>
			<div className='header_wrapper'>
				<Header></Header>
			</div>
			<h2 className='page-title'>Review Section</h2>
			<div className='reviews'>
				<div className='review'>
					<div className='head-review'>
						<Image
							src={"/images/avatar-1.jpg"}
							className='img'
							alt='avatar 1'
							width={250}
							height={250}
						/>
					</div>
					<div className='body-review'>
						<div className='name-review'>Nathan D.</div>
						<div className='place-review'>Germany</div>
						<div className='rating'>
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
						</div>
						<input type='text'></input>
					</div>
				</div>
			</div>
			{/* <h2>{userArray.username}</h2> */}
		</div>
	);
};

export async function getStaticProps({ params }: { params: object | any }) {
	let id = params;

	//const  res=await fetch(`${API_URL}/api/feed`);
	/* 	const res = await fetch(
		`https://trashnothing.com/api/v1.2/users/7743302/display?api_key=vC6smjURIIU6UX1iJaGnLY5LOXG64IIY13iiBiR3`
	);
	console.log("res", res);
	const userArray = await res.json(); */

	return {
		props: {},
	};
}

export default Styleguide;
