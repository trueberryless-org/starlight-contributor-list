import starlight from "@astrojs/starlight";
import starlightPluginsDocsComponents from "@trueberryless-org/starlight-plugins-docs-components";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://astro-contributors.trueberryless.org",
  integrations: [
    starlight({
      title: "Astro Contributors",
      editLink: {
        baseUrl:
          "https://github.com/trueberryless-org/astro-contributors/edit/main/docs/",
      },
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        {
          label: "Start Here",
          items: [
            { slug: "getting-started" },
            { slug: "parameters" },
            { slug: "all-contributors" },
          ],
        },
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/trueberryless-org/astro-contributors",
        },
      ],
      plugins: [
        starlightPluginsDocsComponents({
          pluginName: "astro-contributors",
        }),
      ],
    }),
  ],
});
