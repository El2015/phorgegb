---
title: Page Title
description: Short page description
outline: deep
lastUpdated: true
---

# Google Authentication Integration

## Purpose

Explain how Google authentication connects users to the platform.

## Topics

- OAuth client setup
- redirect URIs
- token handling
- account linking
- role mapping

## Flow 

```mermaid
sequenceDiagram
  participant U as User
  participant F as Frontend
  participant G as Google OAuth
  participant A as API
  U->>F: Login
  F->>G: OAuth Request
  G->>F: Auth Token
  F->>A: Send Token
  A->>A: Validate + Create Session
```
