import starlight from "@astrojs/starlight";
import starlightPluginsDocsComponents from "@trueberryless-org/starlight-plugins-docs-components";
import { defineConfig } from "astro/config";

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
          items: [
            { slug: "getting-started" },
            { slug: "parameters" },
            { slug: "demo" },
          ],
        },
      ],
      social: {
        github:
          "https://github.com/trueberryless-org/starlight-contributor-list",
      },
      plugins: [
        starlightPluginsDocsComponents({
          pluginName: "starlight-contributor-list",
        }),
      ],
    }),
  ],
});
