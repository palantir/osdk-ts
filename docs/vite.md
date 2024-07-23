# Using OSDK with Vite

## Fixing common problems

### "ReferenceError: process is not defined"

The OSDK related libraries leverage a long standing convention to use `process.env.NODE_ENV` to determine the level of verbosity for `console.log`/`console.warn`/`console.error` and to create optimized production code.

Recent versions of Vite have begun pushing developers to use `import.meta.env` instead of `process.env` which is a noble change with good intentions but one that creates problems for library authors trying to support multiple bundling frameworks.

Out of the box, Vite will not perform the required replacement to optimize the code which leads to `process` being undefined and a runtime error for you. This can be worked around by updating your Vite config to process the replacement:

```ts
// ...
export default defineConfig(({ mode }) => {
  // ...
  return {
    define: {
      "process.env.NODE_ENV": JSON.stringify(mode)
    },
    // ...
  }
}
```
