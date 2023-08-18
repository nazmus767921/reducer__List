export const styles = {
	colors: {
		bg: "#171c2a",
		"bg-dark": "#11141f",
		"white-100": "#fcfcfc",
		"gray-100": "#a4a4a6",
		"gray-200": "#58585b",
		"red-500": "#cd424d",
		"red-600": "#802930",
		"yellow-500": "#f7c042",
		"yellow-600": "#b7923e",
		"teal-500": "#00e8ad",
		"teal-600": "#009b73",
	},
};

const breakpoints = {
	xs: "320px",
	sm: "640px",
	md: "768px",
	lg: "1024px",
	xl: "1280px",
	"2xl": "1536px",
};

export const devices = {
	xs: `(min-width: ${breakpoints.xs})`,
	sm: `(min-width: ${breakpoints.sm})`,
	md: `(min-width: ${breakpoints.md})`,
	lg: `(min-width: ${breakpoints.lg})`,
	xl: `(min-width: ${breakpoints.xl})`,
	"2xl": `(min-width: ${breakpoints["2xl"]})`,
};
