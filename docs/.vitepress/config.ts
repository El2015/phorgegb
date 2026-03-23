import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/phorgegb/',
  lang: 'en-US',
  title: 'Global Business Systems Docs',
  description: 'Project documentation and GitHub submission guide',
  cleanUrls: true,

  themeConfig: {
    editLink: {
      pattern: 'https://github.com/El2015/phorgegb/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    logo: '/logo.png',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/' },
      { text: 'GitHub Submission', link: '/guide/github-submission' },
      { text: 'Architecture', link: '/architecture/' },
      { text: 'Integrations', link: '/integrations/' },
      { text: 'Environments', link: '/environments/' },
      { text: 'Releases', link: '/releases/' },
      { text: 'Roles', link: '/roles/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'Examples', link: '/examples/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Overview', link: '/guide/' },
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'GitHub Submission', link: '/guide/github-submission' },
            { text: 'Diagram Support', link: '/guide/diagram-support' },
            { text: 'By Task', link: '/guide/by-task' },
            { text: 'Changelog', link: '/guide/changelog' },
            { text: 'Contributing', link: '/guide/contributing' },
            { text: 'Deployment', link: '/guide/deployment' },
            { text: 'Docs Standards', link: '/guide/docs-standards' },
            { text: 'Review Workflow', link: '/guide/review-workflow' }
          ]
        }
      ],

      '/architecture/': [
        {
          text: 'Architecture',
          items: [
            { text: 'Overview', link: '/architecture/' },
            { text: 'Auth Flow', link: '/architecture/auth-flow' },
            { text: 'File Sync', link: '/architecture/file-sync' },
            { text: 'System Overview', link: '/architecture/system-overview' },
            { text: 'Data', link: '/architecture/data' },
            { text: 'Diagram Support', link: '/architecture/diagram-support' }
          ]
        }
      ],

      '/api/': [
        {
          text: 'API',
          items: [
            { text: 'Overview', link: '/api/' },
            { text: 'Webhooks', link: '/api/webhooks' },
            { text: 'Auth', link: '/api/auth' },
            { text: 'Errors', link: '/api/errors' },
            { text: 'Files', link: '/api/endpoints/files' },
            { text: 'Integrations', link: '/api/endpoints/integrations' },
            { text: 'Projects', link: '/api/endpoints/projects' },
            { text: 'Users', link: '/api/endpoints/users' }
          ]
        }
      ],

      '/examples/': [
        {
          text: 'Examples',
          items: [
            { text: 'Auth Flow', link: '/examples/auth-flow' },
            { text: 'File Import Flow', link: '/examples/file-import-flow' },
            { text: 'Webhook Flow', link: '/examples/webhook-flow' }
          ]
        }
      ],

      '/integrations/': [
        {
          text: 'Integrations',
          items: [
            { text: 'Google Auth', link: '/integrations/google-auth/' },
            { text: 'Google Drive', link: '/integrations/google-drive/' },
            { text: 'Phorge', link: '/integrations/phorge' }
          ]
        }
      ],

      '/projects/': [
        {
          text: 'Projects',
          items: [
            { text: 'Form Converter', link: '/projects/form-converter/' },
            { text: 'Global Business Systems', link: '/projects/global-business-systems/' }
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
  },

  markdown: {
    config(md) {
      const defaultFence =
        md.renderer.rules.fence ||
        ((tokens, idx, options, env, self) =>
          self.renderToken(tokens, idx, options))

      md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        const token = tokens[idx]

        if (token.info.trim() === 'mermaid') {
          return `<pre class="mermaid">${token.content}</pre>`
        }

        return defaultFence(tokens, idx, options, env, self)
      }
    }
  }
})
