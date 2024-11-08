import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightPluginsDocsComponents from "@trueberryless-org/starlight-plugins-docs-components";

export default defineConfig({
    integrations: [
        starlight({
            title: "Starlight Contributor List",
            logo: {
                light: "./src/assets/logo-light.png",
                dark: "./src/assets/logo-dark.png",
                replacesTitle: true,
            },
            editLink: {
                baseUrl:
                    "https://github.com/trueberryless-org/starlight-contributor-list/edit/main/docs/",
            },
            customCss: ["./src/styles/custom.css"],
            sidebar: [
                {
                    label: "Start Here",
                    items: [{ slug: "getting-started" }, { slug: "demo" }],
                },
            ],
            social: {
                github: "https://github.com/trueberryless-org/starlight-contributor-list",
            },
            plugins: [
                starlightPluginsDocsComponents({
                    pluginName: "starlight-contributor-list",
                }),
            ],
        }),
    ],
});
