const Header = ({ isHome = true }) => {
	const navItems: NavItem[] = [
		{
			name: "Stacks",
			link: (isHome ? "" : "/") + "#stacks",
		},
		{
			name: "Contact",
			link: (isHome ? "" : "/") + "#contact",
		},
		{
			name: "Uses",
			link: "/uses",
		},
	];

	return (
		<header className="p-4 md:py-8 bg-primary">
			<div className="max-w-7xl mx-auto flex justify-between items-center">
				<figure>
					<a href="/" className="block w-14 h-auto">
						<img
							src="/images/brand.svg"
							alt="Logo"
							width="56"
							height="70"
						/>
						<span className="sr-only">Retourner à l'accueil</span>
					</a>
				</figure>

				<nav>
					<ul className="flex items-center space-x-4 md:space-x-8">
						{navItems.map((item: NavItem, index: number) => (
							<li key={index}>
								<a
									href={item.link}
									className="font-bold text-lg uppercase relative before:absolute before:bottom-[-2px] before:left-0 before:content:' ' before:right-0 text-black before:bg-black before:w-full before:h-[2px] before:transform before:-translate-y-2 before:opacity-0 before:transition before:duration-200 before:ease-[cubic-bezier(0.175,0.885,0.320,1.275)] hover:before:opacity-100 hover:before:translate-y-0"
								>
									{item.name}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
