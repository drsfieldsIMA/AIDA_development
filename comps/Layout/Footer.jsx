import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box className="footer-box">
	<h1 style={{ color: "#d0f7fc",
				textAlign: "center",
				marginTop: "-50px" }}>
AIDA the operating assistant behind your enterprise	</h1>
	<Container className="footer-container">
		<Row className="footer-row">
		<Column className="footer-column">
			<Heading className="footer-heading">About Us</Heading>
			<FooterLink className="footer-link" href="#">Aim</FooterLink>
			<FooterLink className="footer-link" href="#">Vision</FooterLink>
			<FooterLink className="footer-link" href="#">Accounts</FooterLink>
		</Column>
		<Column className="footer-column">
			<Heading className="footer-heading">Services</Heading>
			<FooterLink className="footer-link" href="#">Maintanence</FooterLink>
			<FooterLink className="footer-link" href="#">Predictive</FooterLink>
			<FooterLink className="footer-link" href="#">AI Coding</FooterLink>
			<FooterLink className="footer-link" href="#">Commision</FooterLink>
		</Column>
		<Column className="footer-column">
			<Heading className="footer-heading">Contact Us</Heading>
			<FooterLink className="footer-link" href="#">Shaun</FooterLink>
			<FooterLink className="footer-link" href="#">Fields</FooterLink>
			<FooterLink className="footer-link" href="#">Ålesund</FooterLink>
			<FooterLink className="footer-link" href="#">Norway</FooterLink>
		</Column>
		<Column className="footer-column">
			<Heading className="footer-heading">Social Media</Heading>
			<FooterLink className="footer-link" href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink className="footer-link" href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink className="footer-link" href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink className="footer-link" href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
