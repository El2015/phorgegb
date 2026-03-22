# Diagram Support

This project uses both Mermaid and draw.io.

## Mermaid
Use Mermaid for:
- auth flows
- webhook flows
- sequence diagrams
- technical logic diagrams

Example:

```mermaid
graph TD
  A[User] --> B[Frontend]
  B --> C[API]
  C --> D[Database]

  ### Preview checkpoint

- diagrams render
- layout is readable

---

## 5. Add Code Example Blocks with Tabs

Create reusable pattern:

```md
::: code-group

```bash
npm run docs:dev

{
  "scripts": {}
}


This improves developer readability.

---

## 6. Add Search Optimization

Enhance search relevance:

```ts
search: {
  provider: 'local',
  options: {
    detailedView: true
  }
}

## draw.io
Use draw.io for:
- polished business diagrams
- stakeholder architecture
- visual system maps

## Folder structure

- Source files: `/docs/diagrams/source`
- Exported files: `/docs/diagrams/export`

## Rules

- Keep the `.drawio` source file
- Export to `.svg`
- Reference exported SVG in docs pages
- Use Mermaid for diagrams that change often with the code or documentation
