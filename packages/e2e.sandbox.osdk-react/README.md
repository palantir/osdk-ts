# OSDK React Hooks Sandbox

This sandbox demonstrates the `@osdk/react` hooks pattern using `OsdkProvider2` and experimental hooks.

## Setup

1. Copy `.env.local.sample` to `.env.local` and fill in your Foundry URL and client ID
2. Run `pnpm install` from the monorepo root
3. Run `pnpm codegen` to generate ontology types
4. Run `pnpm dev` to start the dev server

## Key Files

- `src/main.tsx` - Entry point with `OsdkProvider2`
- `src/client.ts` - OAuth client configuration
- `src/components/TodoList.tsx` - Example using `useOsdkObjects`
- `src/components/TodoItem.tsx` - Example using `useOsdkAction`
- `src/components/CreateTodo.tsx` - Example with optimistic updates

## Patterns Demonstrated

1. **OsdkProvider2** - Modern provider for hooks
2. **useOsdkObjects** - Fetching and paginating object lists
3. **useOsdkObject** - Single object subscription
4. **useOsdkAction** - Applying actions with validation
5. **Optimistic Updates** - Instant UI feedback
6. **Loading States** - Non-blocking loading indicators
