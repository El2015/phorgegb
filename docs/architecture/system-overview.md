# System Overview

This page provides a high-level overview of the platform architecture.

## Components

- Phorge
- WordPress
- API Layer


## Diagram

![System Overview](/diagrams/export/system-overview.svg)

## Description

The platform includes:

- VitePress documentation for project guidance and architecture
- Google authentication for user identity and account-type distinction
- Phorge integration for developer and business workflows
- File reference and transfer support with Google Drive
- Webhook and token exchange mechanisms for service integration

## Main Roles

- `phorgeuser`: platform administration or service ownership
- `dclient`: developer client access
- `bclient`: business client access
- `duser`: developer user client role
- `buser`: business user client role

## Integration Highlights

- Professional and personal Google accounts are distinguished during sign-in
- Imported files can be transferred into platform-managed storage while preserving Google Drive references
- Metadata collection and token exchanges support automation and webhook flows
