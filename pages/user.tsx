/** @format */
import React, { useState, useEffect, FC } from "react";
import { NextPage } from "next";
import Image from "next/image";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ReviewSection from "@/comps/common/ReviewSection";
import { useRouter } from "next/router";

const User: NextPage = ({ userArray }) => {
	//console.log("userArray", userArray);
	const router = useRouter();
	console.log("userArray", router.asPath);
	return (
		<div className='recycle-container'>
			<h1 className='page-title'>Message {userArray.name} </h1>
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
	console.log("The Static id for trash nothing", id);

	//const  res=await fetch(`${API_URL}/api/feed`);
	/* 	const res = await fetch(
		`https://trashnothing.com/api/v1.2/users/7743302/display?api_key=vC6smjURIIU6UX1iJaGnLY5LOXG64IIY13iiBiR3`
	);
	console.log("res", res);
	const userArray = await res.json(); */
	//    console.log("feed==>",feed)
	const userArray = {
		name: "Nathan D",
	};
	return {
		props: { userArray },
	};
}

export default User;
