## TypeScript Best Practices

- NEVER use `any` without asking the user first. If you think you need `any`, you probably don't understand the problem
- Projects are ESM/TypeScript - look for `.ts`/`.tsx` files, not `.js`
- To check compilation: `cd packages/the-package && pnpm turbo typecheck`

## React Best Practices

- Always put new components in their own file and create separate components instead of inline functions
- NEVER conditionally call React hooks
- ALWAYS keep components rendering during loading/error states. Don't use early returns like `if (isLoading) return <LoadingMessage />`. Show loading/error indicators while rendering existing data to prevent UI flashing
- @osdk/react hooks may have data while loading (reloading invalidated data). Incorporate loading state comprehensively, not as shortcuts
- Call actions: `const { applyAction } = useOsdkAction(modifyEmployee)` then `applyAction({ employee, primary_office_id })`
- Direct client: `$(modifyEmployee).applyAction({ employee, primary_office_id })`
- Read docs/react/getting-started.md when working with @osdk/react

## Project Management

- This project uses pnpm. DO NOT use npm

## Security Best Practices

- NEVER disable gpg signing unless explicitly requested

## Repository Best Practices

- Monorepo: run tests from individual packages, not root

## Code Maintenance Best Practices

- Do not fix diagnostic warnings in old code