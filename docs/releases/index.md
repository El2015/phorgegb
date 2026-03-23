---
title: 3) Releases
description: Short page description
outline: deep
lastUpdated: true
---

# `/docs/releases/index.md`

# Releases

This section defines versioning and deployment strategy.


## Versioning Strategy

- Semantic versioning:

Example:

- 1.0.0 → Initial release
- 1.1.0 → New integrations
- 1.1.1 → Fixes

## Release Pipeline

```mermaid
graph LR
Dev --> Commit
Commit --> CI
CI --> Build
Build --> Deploy
```

## Deployment Targets
- Local (WSL)
- Staging (VM)
- Production (GCP)

## Git Workflow
- main → production
- dev → development
- feature/* → new features


## Release Checklist
 Docs updated
 API validated
 Auth tested
 Webhooks verified
 Build successful


## Preview checkpoint
- Deployment works
- Version updated
