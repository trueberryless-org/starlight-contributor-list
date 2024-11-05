import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightContributorList from 'starlight-contributor-list'

export default defineConfig({
  integrations: [
    starlight({
      editLink: {
        baseUrl: 'https://github.com/trueberryless-org/starlight-contributor-list/edit/main/docs/',
      },
      plugins: [starlightContributorList()],
      sidebar: [
        {
          label: 'Start Here',
          items: [{ slug: 'getting-started' }],
        },
      ],
      social: {
        github: 'https://github.com/trueberryless-org/starlight-contributor-list',
      },
      title: 'starlight-contributor-list',
    }),
  ],
})
