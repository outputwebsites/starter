/** @type {import("tailwindcss").Config} */
import defaultTheme from "tailwindcss/defaultTheme"

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Outfit Variable", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				outputGreenMain: "#A3E635", // hovered links, primary (daisyUI)
				outputGreenLight: "#D9f99D", // accent (daisyUI)
				outputGreenDark: "#84CC16", // links, secondary (daisyUI)
				outputGreenDarker: "#65A30D", // active links, focused links, info (daisyUI)
				outputGray: "#E5E7EB", // base-200 (daisyUI)
				outputGrayDark: "#A1A1AA", // base-300 (daisyUI)
				outputGrayDarker: "#18181B",
				outputWhite: "#F8FAFC", // base-100 (daisyUI)
				outputBlack: "#0B0C0B" // neutral (daisyUI)
			}
		}
	},
	plugins: [],
}
