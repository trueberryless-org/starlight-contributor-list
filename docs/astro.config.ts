import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

export default defineConfig({
    integrations: [
        starlight({
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
            title: "Starlight Contributor List",
        }),
    ],
});
