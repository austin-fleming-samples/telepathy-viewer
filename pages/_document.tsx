import { Html, Head, Main, NextScript } from "next/document";
import { Theme } from "@radix-ui/themes";
import { BackgroundPattern } from "@modules/common/components";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link
					rel="preconnect"
					href="https://fonts.googleapis.com"
				/>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;500&family=IBM+Plex+Sans:wght@400;700&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<body className="bg-branddark-900 min-h-[101vh]">
				<Theme appearance="dark">
					<Main />
					<NextScript />
				</Theme>
				<BackgroundPattern />
			</body>
		</Html>
	);
}
