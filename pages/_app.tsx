import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import "styles/styles.scss";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Horizon | Simplifying checkouts</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
