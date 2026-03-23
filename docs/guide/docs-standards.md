# Documentation Standards

## Rules

- one clear purpose per page
- consistent headings
- include command examples when relevant
- include preview checkpoints for setup guides
- include request/response examples for API pages
- link related pages
- avoid undocumented assumptions

---

## 10. Add Link Validation and Build Validation

### package.json scripts

Update `package.json`:

```json
{
  "scripts": {
    "docs:dev": "vitepress dev docs --port 5173",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs --port 4173",
    "docs:check": "vitepress build docs"
  }
}

Review rule

Before any merge:

npm run docs:check

npm run docs:dev
npm run docs:build
npm run docs:preview
