/** @format */
// 👇️ ts-nocheck ignores all ts errors in the file
// @ts-nocheck
import React, { useState, useEffect, FC } from "react";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const schema = yup.object().shape({
	message: yup.string().required("Please enter your email"),
});

const User: NextPage = ({}) => {
	const [message, setMessage] = useState([]);
	const userArray: { name: string } = {
		name: "Nathan D",
	};

	const { register, handleSubmit } = useForm({
		resolver: yupResolver(schema),
	});

	const passwordRegex = /\S/;

	const validateMessage = (event: any) => {
		const pass = event.target.value;
		if (passwordRegex.test(pass) && pass.length > 2) {
			setMessage(pass);
		} else {
		}
	};

	async function sendMessage() {
		alert(`User has Been Contacted with the message ${message}`);
	}

	const router = useRouter();
	return (
		<div className='recycle-container'>
			<h1 className='page-title'>Message {userArray.name} </h1>
			<div className='reviews'>
				<div className='review'>
					<div className='head-review'>
						<Image
							src='/images/avatar-1.jpg'
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
						<label>Send Message:</label>
						<div className='form-group-input-submit'>
							<input
								placeholder='Remember, be nice!'
								rows='5'
								onChange={validateMessage}></input>
							<button
								type='submit'
								className='btn-submit'
								onClick={sendMessage}>
								Submit
							</button>
						</div>
						<div className='form-group-filepicker'>
							<input type='file' name='filePicker' id='filePicker' />
						</div>
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
	const userArray = await res.json(); */

	return {
		props: {},
	};
}

export default User;
