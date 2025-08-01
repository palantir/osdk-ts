## TypeScript Best Practices

- NEVER solve a problem in typescript by using `any` without first asking the user. If you think you need to use `any` then you probably don't understand the problem and need to ask for help
- These projects are almost exclusively esm and typescript. Don't assume that you are always looking for a `.js` file. It might be a `.ts` or `.tsx` file

## React Best Practices

- Always put new react components in their own file
- Always create separate React components instead of inline functions
- When using @osdk/react, tools like useOsdkObject, useOsdkObjects, useLinks (and maybe others) will all return a `loading` state. However just because we are in a loading state, it does not mean we do not have data. We might be reloading invalidated data and therefore should incorporate the loading state as a comprehensive part of a view and not as a shortcut to end a function.
- ALWAYS keep components rendering even during loading or error states. Don't use early returns like `if (isLoading) return <LoadingMessage />`. Instead, show loading/error indicators while still rendering any existing data. This prevents UI flashing when data is being refreshed and provides a better user experience.
- When using react hooks, YOU CANNOT CONDITIONALLY CALL THEM. EVER!
- The way you call an action with the @osdk/react library is to call `useOsdkAction()` passing the action definition to it. For example: `const { applyAction } = useOsdkAction(modifyEmployee)` and then `applyAction({ employee, primary_office_id })`. For direct client usage without the hook, use `$(modifyEmployee).applyAction({ employee, primary_office_id })`.
- When working with @osdk/react be sure to read @packages/react/docs/getting_started.md 

## Project Management

- This project uses pnpm. DO NOT use npm
- YOU ARE NOT ALLOWED TO USE `npm`. This project uses `pnpm`!

## Security Best Practices

- NEVER disable gpg signing unless I explicitly ask you to