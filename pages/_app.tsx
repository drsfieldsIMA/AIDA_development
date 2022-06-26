/**
 * @format*/
// @ts-nocheck

import "../styles/globals.scss";
import React from "react";
import type { AppProps } from "next/app";
import Layout from "../comps/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

function MyApp({ Component, pageProps }: AppProps) {
	const [queryClient] = React.useState(() => new QueryClient());
	return (
		<QueryClientProvider client={queryClient}>
			<Layout>
				<Component {...pageProps} />
				<ReactQueryDevtools initialIsOpen={false} />
			</Layout>
		</QueryClientProvider>
	);
}

export default MyApp;
