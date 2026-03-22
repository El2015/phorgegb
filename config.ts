import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/phorgegb/',
  lang: 'en-US',
  title: 'Global Business Systems Docs',
  description: 'Project documentation and GitHub submission guide',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'GitHub Submission', link: '/guide/github-submission' }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Overview', link: '/guide/' },
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'GitHub Submission', link: '/guide/github-submission' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/El2015/phorgegb' }
    ],
    search: {
      provider: 'local'
    }
  }
})
