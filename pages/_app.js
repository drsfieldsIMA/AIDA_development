/** @format */

import "../styles/globals.scss";
import Head from "next/Head";
import { Component, pageProps } from "react";
import PropTypes from "prop-types";

function App({ Component, pageProps }) {
	<Head>
		<meta
			name="viewport"
			content="minimum-scale=1, initial-scale=1, width=device-width"
		/>
		<link rel="stylesheet" href="https://use.typekit.net/jmo3enq.css"></link>
	</Head>;
	return (
		<>{typeof window === "undefined" ? null : <Component {...pageProps} />}</>
	);
}

export default App;
