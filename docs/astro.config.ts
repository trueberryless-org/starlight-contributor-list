import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightPluginsDocsComponents from "@trueberryless-org/starlight-plugins-docs-components";

export default defineConfig({
    integrations: [
        starlight({
            title: "SCL",
            logo: {
                src: "./src/assets/logo.png",
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
