import { defineConfig } from 'vitepress';
import { title, name, description } from '../package.json';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title,
  description,
  base: `/${name}/`,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
  },
  srcExclude: [
    // exclude the README.md in the root folder, that's only for GitHub
    "./README.md"
  ],
});
