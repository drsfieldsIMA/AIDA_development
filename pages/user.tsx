/** @format */
import React, { useState, useEffect, FC } from "react";
import { NextPage } from "next";
import ReviewSection from "@/comps/common/ReviewSection";

const User: NextPage = ({}) => {
	//console.log("userArray", userArray);
	return (
		<div className='recycle-container'>
			<h1>Top Three Green Cycle Users</h1>
			<ReviewSection />
			{/* <h2>{userArray.username}</h2> */}
		</div>
	);
};

export async function getStaticProps() {
	//const  res=await fetch(`${API_URL}/api/feed`);
	/* 	const res = await fetch(
		`https://trashnothing.com/api/v1.2/users/7743302/display?api_key=vC6smjURIIU6UX1iJaGnLY5LOXG64IIY13iiBiR3`
	);
	console.log("res", res);
	const userArray = await res.json(); */
	//    console.log("feed==>",feed)
	return {
		props: {},
	};
}

export default User;
