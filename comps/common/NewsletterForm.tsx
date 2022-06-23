/**
 * /* eslint-disable no-mixed-spaces-and-tabs
 *
 * @format
 */

import React from "react";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { parseCookies } from "nookies";
import {
	Box,
	Button,
	Container,
	MenuItem,
	InputLabel,
	Grid,
	Link,
	TextField,
	Typography,
	Input,
	Select,
} from "@mui/material";
import { API_MONGOOSE_URL, API_URL } from "comps/config";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import ReactSelect from "react-select";
import { Router } from "react-router";

const schema = yup.object().shape({
	email: yup.string().required("email is required"),
	content: yup.string().required("Description is required"),
	category: yup.string().required("Category is required"),
});

export default function NewsletterForm({ props }: any) {
	const [submitting, setSubmitting] = useState(false);
	const [isValid, setIsValid] = useState(false);
	const [focusMessage, setMessage] = useState("");
	const [isLoginValid, setIsLoginValid] = useState(false);
	const [focusLoginMessage, setFocusMessage] = useState("");

	const { register, handleSubmit } = useForm({
		resolver: yupResolver(schema),
	});

	const registration: object | any = localStorage.getItem("registration");
	if (!registration) {
		setFocusMessage(
			"You need to register before you can gain access to the web app"
		);
	}

	const EmailRegex = /\S/;

	const handleEmail = (event: React.ChangeEvent<any>) => {
		const email = event.target.value;
		if (EmailRegex.test(email) && email.length > 4) {
			setIsValid(true);
			setMessage("Your Email looks good");
		} else {
			setIsValid(false);
			setMessage("Please enter a Email with more than 3 characters!");
		}
	};

	async function onSubmit(data: object | any) {
		const registrationArray = JSON.parse(registration);
		setSubmitting(true);
		setIsValid(false);
		try {
			let check = true;
			if (check) {
				setIsValid(true);
				setIsLoginValid(true);
				setFocusMessage("You will now log in in 2 seconds");
				setMessage("");
			} else {
				let errorText =
					`backend error message is \n` +
					`check your login credentials are correct `;
				setFocusMessage(errorText); // It's an Error instance.
			}
		} catch (error: unknown) {
			if (error) {
				setFocusMessage(`front end error message is  ${error}  `); // It's an Error instance.
			} else {
				setFocusMessage("🤷‍♂️"); // Who knows?
			}
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<>
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
						maxWidth: "800",
					}}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<fieldset className='form__fieldset' disabled={submitting}>
							<Grid
								container
								className='form__fieldset__grid'
								rowSpacing={7}
								columnSpacing={{ xs: 1, sm: 1, md: 2, lg: 3 }}
								marginTop={{ xs: 1, sm: 2, md: 3 }}>
								<Grid item xs={12} md={12}>
									<label>Email</label>
									<Input
										{...register("email", { required: true })}
										placeholder='email e.g. local author publishes to a worldwi.....'
										className='formInput'
										name='email'
										onChange={handleEmail}
									/>
								</Grid>
							</Grid>

							<div className='form-input'>
								<Button
									type='submit'
									style={{ marginLeft: "30px" }}
									className='btn-primary'>
									{submitting ? "Submitting..." : "Submit"}
								</Button>
							</div>
						</fieldset>
					</form>
				</Container>
			</Box>
		</>
	);
}
