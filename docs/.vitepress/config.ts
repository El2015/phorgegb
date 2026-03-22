import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/phorgegb/',
  lang: 'en-US',
  title: 'Global Business Systems Docs',
  description: 'Project documentation and GitHub submission guide',
  lastUpdated: true,
  cleanUrls: true,
  head: [
  ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXX' }],
  ['script', {"docs:check": "vitepress build docs"}, `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXX');
  `]
  ],
  themeConfig: {
    editLink: {
    pattern: 'https://github.com/yourname/my-docs-project/edit/main/docs/:path',
    text: 'Edit this page on GitHub'
    },
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/' },
      { text: 'GitHub Submission', link: '/guide/github-submission' },
      { text: 'Docs', link: '/current/guide/' },
      { text: 'API', link: '/current/api/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Overview', link: '/guide/' },
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'GitHub Submission', link: '/guide/github-submission' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API',
          items: [
            { text: 'Overview', link: '/api/' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/El2015/phorgegb' }
    ],
    search: {
      provider: 'local'
    }
  }
})
