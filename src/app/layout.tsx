"use client";

import "./globals.css";
import Provider from "@/SessionProvider";
import Head from "next/head";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Provider>{children}</Provider>
			</body>
		</html>
	);
}
