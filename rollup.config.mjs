import html from "@rollup/plugin-html";

export default {
    input: "src/index.js",
    output: {
        file: "bundle.js",
        format: "cjs",
    },
    plugins: [
        html({
            title: "Svelte app from scratch",
        }),
    ],
};
