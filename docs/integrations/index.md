---
title: 1) Integrations 
description: Short page description
outline: deep
lastUpdated: true
---


# Integrations

This platform integrates multiple systems to enable a unified business and development workflow.

# Overview

## Key integrations:

- Google Authentication (OAuth 2.0)
- Google Drive (file storage + reference sync)
- Phorge API (Conduit)
- Webhooks (event-driven architecture)
- Local WSL development environments
- Cloud VM (GCP deployment)


## Architecture

```mermaid
graph TD
  User --> Frontend
  Frontend --> API
  API --> Phorge
  API --> GoogleAuth
  API --> GoogleDrive
  Phorge --> Webhooks
  Webhooks --> API
