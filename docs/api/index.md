---
title: 6) API
description: Short page description
outline: deep
lastUpdated: true
---

# `/docs/api/index.md`

# API

The API layer connects frontend, Phorge, and external services.
This section documents the APIs used by the project.


## Sections

- Authentication
- Webhooks
- Data exchange
- Error handling

## Core Responsibilities

- Authentication
- Role management
- File linking
- Webhook handling
- Phorge integration



## Architecture

```mermaid
graph TD
  Frontend --> API
  API --> Phorge
  API --> GoogleAuth
  API --> Drive
```

# Endpoints

## Auth
POST /auth/login

## Projects
GET /projects
POST /projects

## Webhooks
POST /webhook

## Token Flow
```mermaid
sequenceDiagram
  User->>Frontend: Login
  Frontend->>API: Token
  API->>Google: Verify
  API->>Frontend: Session
```

## Security
- OAuth 2.0
- HTTPS required
- Token validation
- Role-based access

## Example Request
curl -X POST /api/projects \
  -H "Authorization: Bearer TOKEN"


## Preview checkpoint
- API responds
- Auth validated
