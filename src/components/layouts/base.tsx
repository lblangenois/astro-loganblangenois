import React from "react";
import Socials from "../elements/socials";

import "../../styles/app.css";

interface IBaseProps {
	children: React.ReactChild;
	title?: string;
}

const BaseLayout = ({
	children,
	title = "Logan Blangenois - React JS Front-end Developper",
}: IBaseProps) => {
	return (
		<body className="bg-primary">
			{children}

			<div className="hidden md:block px-4 fixed bottom-0 left-0 xl:left-[calc((100vw-1280px)/2)] z-50">
				<Socials />
			</div>

			<script src="/scripts/main.ts" />
		</body>
	);
};

export default BaseLayout;
