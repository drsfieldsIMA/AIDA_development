/** @format */

import React from "react";
import Head from "next/head";
import { Header } from "./navigation/Header";
import PropTypes from "prop-types";
import { Footer } from "./Footer";

type QueryParams = {
	title: string;
	keywords: string;
	descrip: string;
	gsv: string;
	children: any;
};

export default function Layout({
	title,
	keywords,
	descrip,
	children,
}: QueryParams) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name='description' content={descrip}></meta>
				<meta name='keywords' content={keywords}></meta>
			</Head>
			<Header></Header>
			<div className='container'>{children}</div>
			<Footer></Footer>
		</div>
	);
}

export function Heading({
	color,
	size = "1",
	content,
}: {
	color: string;
	size: string;
	content: string;
}) {
	const VariableHeading: string | any = `h${size}`;
	return <VariableHeading style={{ color }}>{content}</VariableHeading>;
}

Heading.propTypes = {
	size: PropTypes.string,
	content: PropTypes.string.isRequired,
	color: PropTypes.string,
	classNameString: PropTypes.string,
	VariableHeading: PropTypes.node,
	articles: PropTypes.any,
};

Layout.defaultProps = {
	title: " GreenCycle | ReCycle UpCycle Repurpose  ",
	descrip:
		"Ever wondered how you can recycle more phones, furniture, clothes and scrap metal. By leveraging the power of the internet and the large GreenCycle community we can give 2nd hand products and 2nd life.",
	keywords:
		"recycling, recycle center, recycle program, scrap metal recycling, electrics recycling, phone recycling, recycling information, recycling sorter. ",
	gsv: "wenrVQYITXvXIH9sNnSmiBaOZ941XPPzAvnupQrq6RQ",
};
