## TypeScript Best Practices

- NEVER use `any` without asking the user first. If you think you need `any`, you probably don't understand the problem
- Projects are ESM/TypeScript - look for `.ts`/`.tsx` files, not `.js`
- To check compilation: `cd packages/the-package && pnpm turbo typecheck`

## React Best Practices

- Always put new components in their own file and create separate components instead of inline functions
- NEVER conditionally call React hooks
- ALWAYS keep components rendering during loading/error states. Don't use early returns like `if (isLoading) return <LoadingMessage />`. Show loading/error indicators while rendering existing data to prevent UI flashing
- ALWAYS memoize non-primitive values passed to component props with useCallback or useMemo

## OSDK Component Architecture

- The outermost component, e.g. ObjectTable should handle data fetching from Foundry using @osdk/react hooks.
- The base component should contain all component interactions and styling. This will enable users to build on top of the base component with their own data fetching.

## CSS Styling Best Practices

- Do not hardcode CSS colors and pixel values.
- ALWAYS use css variables to enable themabiltiy using CSS variables. Any default styling should be added to @osdk/react-components-styles index.css
- ALWAYS try to use --bp tokens first before using any hardcoded value. The --bp tokens used should always be mapped from a --osdk token.

## Project Management

- This project uses pnpm. DO NOT use npm

## Security Best Practices

- NEVER disable gpg signing unless explicitly requested

## Repository Best Practices

- Monorepo: run tests from individual packages, not root

## Code Maintenance Best Practices

- Do not fix diagnostic warnings in old code
