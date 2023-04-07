export const classNames = (...names: (string | boolean)[]) => {
	return names.filter(Boolean).join(" ");
};
