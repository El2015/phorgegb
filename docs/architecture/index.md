<Note>
This is an important note.
</Note>

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
