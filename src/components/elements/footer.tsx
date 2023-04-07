import React from "react";
import Socials from "./socials";

const Footer: React.FC = () => {
	return (
		<footer
			className="px-6 md:px-20 xl:px-4 py-12 lg:pt-12 lg:pb-28 xl:pb-36 relative z-20"
			id="contact"
		>
			<div className="mx-auto max-w-[1080px] flex flex-col gap-6 md:grid md:grid-cols-[1fr_auto]">
				<h2 className="text-3xl md:text-4xl font-bold">
					Ready to talk with an expert?
				</h2>

				<a
					href="mailto:"
					className="rounded-full text-center border-2 border-black px-6 pt-3 pb-4 font-bold inline-block hover:bg-black hover:text-green-400 appearance-none transition cursor-pointer focus-visible:outline-2 flex-shrink-0 mt-2 self-start md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3"
				>
					Send me a message
				</a>

				<Socials
					orientation="horizontal"
					className="md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3"
				/>
			</div>
		</footer>
	);
};

export default Footer;
