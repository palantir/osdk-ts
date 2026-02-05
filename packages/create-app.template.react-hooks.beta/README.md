# @osdk/create-app.template.react-hooks.beta

React template using @osdk/react hooks (useOsdkObjects, useOsdkAction, etc.) with OsdkProvider2.

## Overview

This template provides a React application scaffold that uses the modern OSDK React hooks pattern instead of direct client calls. It includes:

- `OsdkProvider2` for React context
- `useOsdkObjects` for fetching object lists
- `useOsdkObject` for subscribing to single objects
- `useOsdkAction` for applying actions with optimistic updates

## Development

```bash
pnpm codegen  # Generate template files
pnpm typecheck
pnpm lint
```
