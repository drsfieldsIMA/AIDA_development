/** @format */

import { useState, useContext, ReactEventHandler } from "react";
import { useForm } from "react-hook-form";
import Head from "next/head";
import * as yup from "yup";
import NextLink from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { API_URL, API_MONGOOSE_URL, EXT_LOGIN } from "../comps/config/index";
import router from "next/router";
import nookies from "nookies";
import {
	Box,
	Button,
	Container,
	Grid,
	Link,
	TextField,
	Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect } from "react";
import AuthContext, { AuthProvider } from "../comps/config/AuthContext";
import useLocalStorage from "../comps/config/useLocalStorage";

const url = API_URL + EXT_LOGIN;

const schema = yup.object().shape({
	username: yup.string().required("Please enter your email"),
	password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
	const [submitting, setSubmitting] = useState(false);
	const [loginError, setLoginError] = useState(null);

	//const history = useHistory();

	const { register, handleSubmit } = useForm({
		resolver: yupResolver(schema),
	});

	const [isValid, setIsValid] = useState(false);
	const [focusMessage, setMessage] = useState("");
	const [loginisValid, setloginisValid] = useState(false);
	const [focusLoginMessage, setFocusMessage] = useState("");
	const [auth, setAuth] = useState("");
	console.log("auth line 43", auth);

	// const {user,jwt, login, logout}=useContext(AuthContext)
	//const {user, login, logout}=useAuth()
	const nameRegex = /\S/;

	const validateName = (event: any) => {
		const name = event.target.value;
		if (nameRegex.test(name) && name.length > 4) {
			setIsValid(true);
			setMessage("Your Name looks good");
		} else {
			setIsValid(false);
			setMessage("Please enter a name with more than 3 characters!");
		}
	};

	const [isValidPassword, setIsValidPassword] = useState(false);
	const [focusMessagePassword, setFocusMessagePassword] = useState("");

	const passwordRegex = /\S/;

	const validatePassword = (event: any) => {
		const pass = event.target.value;
		if (passwordRegex.test(pass) && pass.length > 2) {
			setIsValidPassword(true);
			setFocusMessagePassword("Your password looks good");
		} else {
			setIsValidPassword(false);
			setFocusMessagePassword(
				"Please enter a Password with more than 2 characters!"
			);
		}
	};

	async function onSubmit(data: any) {
		console.log(" data ", data);
		setSubmitting(true);
		setLoginError(null);
		setIsValid(false);
		const loginInfo = {
			identifier: data.username,
			password: data.password,
		};

		console.log(" login info", loginInfo);
		setIsValid(true);
		setloginisValid(true);
		try {
			setTimeout(() => {
				router.push("/admin/offers/");
			}, 2000);
			setFocusMessage("You will now log in in 2 seconds");
			setMessage("");
			localStorage.setItem("auth", JSON.stringify(loginResponse));
		} catch (error) {
			//  setLoginError(error.toString());
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<>
			<Head>
				<title>Logging In | GreenCycle</title>
			</Head>
			<Box
				component='main'
				sx={{
					alignItems: "center",
					display: "flex",
					flexGrow: 1,
					minHeight: "100%",
				}}
				className='height-75'>
				<Container
					sx={{
						backgroundColor: "white",
					}}
					maxWidth='sm'>
					<NextLink href='/' passHref>
						<Button
							component='a'
							startIcon={<ArrowBackIcon fontSize='small' />}>
							Home
						</Button>
					</NextLink>
					<div></div>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className={`message ${loginisValid ? "success" : "error"}`}>
							{focusLoginMessage}
						</div>
						<h2>
							In order to make an offer on Greencycle either create an Account
							or Log in.
						</h2>
						<fieldset disabled={submitting}>
							<label>Username</label>
							<div>
								<input
									placeholder='username'
									className='formInput'
									type='text'
									{...register("username")}
								/>

								<div className={`message ${isValid ? "success" : "error"}`}>
									{focusMessage}
								</div>
							</div>
							<label>Password</label>
							<div>
								<input
									className='formInput'
									placeholder='password'
									{...register("password")}
									onChange={validatePassword}
									type='password'
								/>
								<div
									className={`message ${
										isValidPassword ? "success" : "error"
									}`}>
									{focusMessagePassword}
								</div>
							</div>
							<Button type='submit'>
								{submitting ? "Logging in..." : "Login"}
							</Button>
						</fieldset>
					</form>
				</Container>
			</Box>
		</>
	);
}

LoginForm.defaultProps = {
	register: () => {},
};
