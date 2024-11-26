import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
	plugins: [pluginReact()],
	server: {
		port: 7777,
	},
	html: {
		title: "Kasysy",
	},
});
