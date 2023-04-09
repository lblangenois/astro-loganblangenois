/**
 * Smooth scroll to anchor links
 *
 * @return {*}
 */
const handleSmoothScroll = () => {
	const links = document.querySelectorAll('nav a[href^="#"]');

	links.forEach((link) => {
		link.addEventListener("click", (e) => {
			e.preventDefault();

			const href = link.getAttribute("href");

			document.querySelector(href).scrollIntoView({
				behavior: "smooth",
			});
		});
	});
};

/**
 * Toggle sticky element when user reach the bottom of the page
 *
 * @return {*}
 */
const toggleStickyOnScroll = () => {
	const stickyElement = document.getElementById("sticky-socials");

	if (!stickyElement) return;

	const stickyList = stickyElement.querySelector("ul");
	const stickyListItems = stickyElement.querySelectorAll("li");

	// When user has scrolled on bottom - 100px, add class to sticky element, else remove it
	window.addEventListener("scroll", () => {
		if (
			window.innerHeight + window.pageYOffset >=
			document.body.offsetHeight - 2
		) {
			// Hide stickyList with a scaleY animation
			stickyList.classList.add("after:scale-y-0");

			// Hide stickyListItems with a translateX and opacity animation
			stickyListItems.forEach((item) => {
				item.classList.add("-translate-x-4", "opacity-0");
			});
		} else {
			// Display stickyList with a scaleY animation
			stickyList.classList.remove("after:scale-y-0");

			// Display stickyListItems with a translateX and opacity animation
			stickyListItems.forEach((item) => {
				item.classList.remove("-translate-x-4", "opacity-0");
			});
		}
	});
};

/**
 * Handle mailto links to prevent spam
 *
 * @return {*}
 */
const handleMailTo = () => {
	document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
		link.addEventListener("click", (e) => {
			e.preventDefault();

			// Open window to send email
			window.open(`mailto:hello@logan-blangenois.be`, "_blank");
		});
	});
};

handleSmoothScroll();
toggleStickyOnScroll();
handleMailTo();

// Add "target=_blank" to all external links inside .prose element
document.querySelectorAll(".prose a").forEach((link) => {
	if (link.hostname !== window.location.hostname) {
		link.setAttribute("target", "_blank");
		link.setAttribute("rel", "noopener noreferrer");
	}
});
