
  /** @format */

import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import Head from 'next/head';
import * as yup from "yup";
import NextLink from 'next/link';
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { API_URL } from '../utils/url'
import router from "next/router";
import nookies from 'nookies';
import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AuthContext from "../comps/context/AuthContext";
import Dashboard from "./dashboard";
import { useEffect } from "react";

const url = API_URL+ "/auth/local";

const schema = yup.object().shape({
	username: yup.string().required("Please enter your email"),
	password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
	const [submitting, setSubmitting] = useState(false);
	const [loginError, setLoginError] = useState(null);

	//const history = useHistory();

	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	const [isValid, setIsValid] = useState(false);
	const [focusMessage, setMessage] = useState("");
	const [loginisValid, setloginisValid] = useState(false);
	const [focusLoginMessage, setFocusMessage] = useState("");
	const [auth, setAuth] = useContext(AuthContext);

	const nameRegex = /\S/;

	const validateName = (event) => {
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

	const validatePassword = (event) => {
		const pass = event.target.value;
		if (passwordRegex.test(pass) && pass.length > 2) {
			setIsValidPassword(true);
			setFocusMessagePassword("Your password looks good");
		} else {
			setIsValidPassword(false);
			setFocusMessagePassword("Please enter a Password with more than 2 characters!");
		}
	};


	useEffect(() => {
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
				handleSubmit(onSubmit)
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);



	async function onSubmit(data) {
		setSubmitting(true);
		setLoginError(null);
		setIsValid(false);




    const loginInfo = {
      identifier:data.username,
      password: data.password
  }
   
		try {
			const response = await axios.post(url, loginInfo);
      setIsValid(true);
			setloginisValid(true);
      nookies.set(null, 'jwt', response.data.jwt ,{
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
			setFocusMessage("You will now log in in 2 seconds");
			setMessage("");
			setAuth(response.data)
			setTimeout(() => {
				router.push("/dashboard");
			}, 2000);

			//			history.push("/dashboard");
		} catch (error) {
			setLoginError(error.toString());
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<>
		<Head>
        <title>Login | AIDA</title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%',
        }}
        className="height-75"
      >
        <Container    sx={{
          backgroundColor:'white',
        }} maxWidth="sm">
          <NextLink
            href="/"
            passHref
          >
            <Button
              component="a"
              startIcon={<ArrowBackIcon fontSize="small" />}
            >
              Dashboard
            </Button>
          </NextLink>
    <div></div>
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={`message ${loginisValid ? "success" : "error"}`}>
				{focusLoginMessage}
			</div>
			
			<fieldset disabled={submitting}>
				<div>
					<input
						name="username"
						placeholder="username"
						className="formInput"
						onChange={validateName}
						{...register('username')}
					/>
					

					<div className={`message ${isValid ? "success" : "error"}`}>
						{focusMessage}
					</div>
				</div>

				<div>
					<input
						name="password"
						placeholder="password"
						{...register('password')}
						onChange={validatePassword}
						type="password"
					/>
					<div className={`message ${isValidPassword ? "success" : "error"}`}>
						{focusMessagePassword}
					</div>
				</div>
				<Button type="submit">{submitting ? "Logging in..." : "Login"}</Button>
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