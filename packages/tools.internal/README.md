# @osdk/tools.internal

Provides common tooling for each of our repos.

Tooling this manages:
1. turbo
2. transpile / typecheck
3. our custom attw

## Assumptions

1. PNPM is the package manager and the version is managed via this package.
2. turbo.json is managed in the root of each project

## Other

Archetypes:
1. Template Package
2. CLIs
3. React Packages?
4. Not typescript
5. Generated example

Features:
1. Private or not
2. Check API
3. Happy DOM