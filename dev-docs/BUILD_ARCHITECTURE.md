# OSDK TypeScript Build Architecture

This document explains the build system architecture for the OSDK TypeScript monorepo. The build system is designed for **maximum parallelization** and is fundamentally different from traditional sequential build approaches.

## Foundational Tools

Our build system relies on two key tools:

- **[Turbo](https://turborepo.com/docs)** - Task orchestration and caching tool that manages build dependencies and parallel execution
- **[monorepolint](https://monorepolint.com/)** - Enforces consistency across packages to ensure the caching system works reliably

The rules enforced by monorepolint keep the caching working by ensuring packages follow consistent patterns for inputs, outputs, and dependencies.

## Overview

Our build system produces **four parallel output formats** for each library package:

- **ESM** (ES Modules) - `build/esm/`
- **CJS** (CommonJS) - `build/cjs/` - for compatibility with older Node.js projects that can't use ESM
- **Browser** (Browser-optimized) - `build/browser/`
- **Types** (TypeScript declarations) - `build/types/`

**Key Philosophy**: Minimize inter-package dependencies during transpilation to maximize parallel execution across the entire monorepo.

## Build System Architecture

### Traditional Sequential Approach (NOT what we do)

```
Package A: transpile → typecheck → Package B: transpile → typecheck → Package C: transpile → typecheck
```

### Our Parallel Approach

```
All Packages: transpile (ESM, CJS, Browser, Types) in parallel
     ↓
All Packages: typecheck in parallel
```

## Package-Level turbo.json Override Behavior

**⚠️ CRITICAL WARNING**: Package-level `turbo.json` files **completely override** the root configuration for any task they define. This means:

- If you define a task in a package's `turbo.json`, it replaces ALL settings from the root `turbo.json` for that task
- Missing properties are NOT inherited from the root - they become undefined/empty
- This can break caching, dependencies, inputs, and outputs in unexpected ways

**Most packages should NOT have a `turbo.json` file.** The root configuration handles 99% of cases correctly.

### When Package-Level turbo.json is Needed

Only create package-level `turbo.json` files for:

1. **Codegen tasks** - When you need specific dependencies that can't be generalized in the root
2. **Exceptional cases** - Packages with truly unique build requirements (very rare)

## Package Types and Build Strategies

This monorepo contains 16 different archetypes organized into logical categories. The archetype names in our configuration use hierarchical naming (e.g., "Library: Public", "CLI: Internal") to make the configuration self-documenting. See `.monorepolint.config.mjs` for detailed configuration of each archetype.

**⚠️ Important**: Every package in this monorepo MUST match exactly one archetype defined in `.monorepolint.config.mjs`. Packages that don't match any archetype will cause the monorepolint configuration to error with `unmatched: "error"`. When adding new packages, ensure they fit into an existing archetype or create a new appropriate archetype.

### Library Packages

- **Library: Public** - API-documented public libraries with api-extractor integration
- **Library: Standard** - Standard public libraries with full build outputs (ESM, CJS, Browser, Types)
- **Library: React** - React-specific libraries with React TypeScript configuration
- **Library: Bundled** - Tree-shaking optimized libraries with all formats bundled
- **Library: Internal** - Private internal libraries, ESM-only output
- **Library: Generated SDK (Public)** - Published generated SDK packages, skip ATTW validation
- **Library: Generated SDK (Internal)** - Private generated SDK packages, skip ATTW validation
- **Library: Hybrid (Vite)** - Dual-purpose library and web application packages

### CLI Packages

- **CLI: Public** - Consumer-facing CLI tools, ESM bundle only, fixed dependencies
- **CLI: Internal** - Internal development tools, ESM-only, skip type generation

### Test Packages

- **Test: Standard** - Unit tests and benchmarks with minimal rule enforcement
- **Test: E2E** - End-to-end test packages with unusual full output formats

### Sandbox Packages

- **Sandbox: Web** - React-based sandbox applications
- **Sandbox: Node** - Node.js sandbox applications, ESM-only
- **Sandbox: Published** - Published sandbox packages with source files included

### Special Packages

- **Special: Minimal Rules** - Legacy or example packages with minimal monorepolint enforcement

## Task Dependency Notation

### Dependency Prefixes

- `^taskName` - Run this task in all workspace dependencies first
- `//#taskName` - Root-level pseudo-task (configuration watchers)
- `@package#taskName` - Package-specific task override

### Why CJS is Special

**CJS transpilation has unique dependency requirements** that differ from ESM and Browser builds.

#### The Dual Dependency Requirement

CJS builds depend on **BOTH** `^transpileCjs` AND `^transpileTypes` from dependencies:

```json
"transpileCjs": {
  "dependsOn": [
    "^transpileCjs",     // Need CJS code from dependencies
    "^transpileTypes",  // Need compatible type definitions
    "codegen"
  ]
}
```

#### Why Both Dependencies Are Needed

1. **Different `.d.ts` Generation**: tsup generates different TypeScript declaration files for CJS vs ESM
   - ESM `.d.ts`: Uses `export` statements
   - CJS `.d.ts`: Uses `module.exports` and `require()` patterns

2. **Module Resolution Differences**:
   - CJS uses `require()` which resolves differently than ESM `import`
   - TypeScript needs CJS-compatible type definitions to understand the module structure
   - Without proper CJS types, you get "Cannot find module" errors

#### Visual Dependency Flow

```
ESM Build:
Package A (ESM) → depends on → Package B (ESM)
                                    └─ build/esm/index.js
                                    └─ build/types/index.d.ts

CJS Build:
Package A (CJS) → depends on → Package B (CJS + Types)
                                    └─ build/cjs/index.cjs
                                    └─ build/types/index.d.cts  ← CJS-specific types!
```

#### Key Takeaway

**CJS builds require the entire dependency chain to support CJS**. If any package in your dependency tree is ESM-only, all packages that depend on it must also be ESM-only for CJS builds.

**Note**: Package scripts and their dependencies are managed by monorepolint - see `.monorepolint.config.mjs` for the actual configurations.

## Four Output Formats Explained

### 1. ESM (`build/esm/`)

- Modern ES Modules
- Uses Babel for transpilation
- Target: Node.js ESM and modern bundlers
- Dependency: Only `^transpileEsm`

### 2. CJS (`build/cjs/`)

- CommonJS modules with `.cjs` extensions
- Uses tsup with bundling for incompatible dependencies
- Generates CJS-specific `.d.ts` files (`.d.cts` format)
- **Special Dependencies**: `^transpileCjs` + `^transpileTypes` (unlike other formats)
- **Why special**: CJS module resolution requires both CJS code AND CJS-compatible type definitions from all dependencies

### 3. Browser (`build/browser/`)

- Browser-optimized bundles
- Uses tsup with browser-specific configuration
- Dependency: Only `^transpileBrowser`

### 4. Types (`build/types/`)

- TypeScript declaration files
- Uses oxc-transform's isolated declaration
- Strips internal types, generates source maps
- Dependency: Only `codegen`

## Transpilation Mechanisms

Each output format uses a different transpilation mechanism:

### normal

- Standard Babel transpilation
- Preserves imports and dependencies
- Used for: ESM builds

### bundle

- tsup bundling with dependency inlining
- Generates self-contained output
- Used for: CJS builds, CLI tools
- When to use:
  - CLI tools (self-contained executables)
  - Tree-shaking optimization (removing unused Conjure endpoints)
  - Handling incompatible dependencies (ESM-only deps in CJS builds)

### types

- oxc-transform for TypeScript declarations only
- Isolated declaration generation
- Used for: Type output only

## Codegen System

### Root Configuration

The root `turbo.json` has an **empty codegen task** - it's just a placeholder:

```json
"codegen": {
  "outputLogs": "new-only"
}
```

### Package-Specific Implementation

Each package defines its own codegen with specific inputs/outputs. Some depend on other packages' transpiled output because they run Node.js scripts that import those packages.

### generatedNoCheck Convention

- **Location**: `src/generatedNoCheck/**/*`
- **Linting**: dprint and eslint ignore these files
- **Type Checking**: TypeScript DOES check these files
- **Purpose**: Keep generated code consistent without manual formatting

### Codegen Dependencies

Some codegen tasks depend on other packages' transpiled output because they run Node.js scripts that import those packages. For example, CLI tools must be built before they can generate code.

## Implementation Details

### Build Driver: transpile2.mjs

The actual transpilation is handled by `packages/monorepo.tool.transpile/bin/transpile2.mjs`:

**Modes**:

- `--mechanism normal --format esm` → Babel transpilation
- `--mechanism bundle --format cjs` → tsup bundling
- `--mechanism types --format esm` → oxc-transform declarations

**Why tsup for CJS**:

- Bundles incompatible ESM-only dependencies
- Generates CJS-specific `.d.ts` files
- Handles module resolution differences

### Pseudo-Tasks (Configuration Watchers)

These tasks don't run commands but track configuration changes:

- `//#babel-config` - Watches `babel.config.mjs`
- `//#global-eslint-config` - Watches `eslint.config.mjs`
- `//#dprint` - Watches `dprint.json`

When these configs change, dependent tasks are invalidated.

## Turbo Task Dependencies

### How Turbo.json Works

**Important**: Turbo.json does **NOT require** packages to have specific scripts. It only provides rules for scripts that exist. If a package doesn't have a script (e.g., `transpileCjs`), Turbo gracefully skips it without failing.

This allows packages to implement only the transpilation variants they actually need:

- **Library packages**: Implement all formats (ESM, CJS, Browser, Types)
- **CLI packages**: Implement only ESM (and optionally Types)
- **Web applications**: Implement only what's needed for their build process

### Key Task Chains

**Type Checking**:

```
codegen → ^transpileTypes → typecheck
```

**Full Build** (web apps only):

```
codegen → [all transpile variants] → typecheck → build
```

**Linting**:

```
//#global-eslint-config + //#dprint + typecheck → lint
```

### Parallel Execution

The `transpile` meta-task aggregates all formats and runs them in parallel. Packages that don't implement certain variants (e.g., CLI packages without `transpileCjs`) are simply skipped.

## Special Configurations

### Global Dependencies

```json
"globalDependencies": ["config/tsconfig.base.json"]
```

When this file changes, **ALL tasks in ALL packages** are invalidated.

### Package-Specific Overrides

Some packages override default behavior:

```json
"@osdk/e2e.generated.1.1.x#typecheck": {
  "dependsOn": ["codegen", "^typecheck", "^transpile"]
}
```

### Legacy Configurations

- `transpileLegacy` in `@osdk/e2e.generated.1.1.x` is a specialized meta-task for this package only
- **No other packages should use this pattern** - it outputs to legacy paths (`dist/`, `lib/`) for backward compatibility

## Special Cases and Exceptions

### CLI Tool Packages

These packages are ESM-only Node.js tools and don't need CJS or browser builds:

- `@osdk/cli`, `@osdk/cli.common`, `@osdk/cli.cmd.typescript`
- `@osdk/create-app`, `@osdk/create-widget`
- `@osdk/tool.generate-with-mock-ontology`, `@osdk/tool.release`, `@osdk/version-updater`

**Configuration**: Only implement `transpileEsm` (and optionally `transpileTypes`).

### Exception Package: `@osdk/example-generator`

This package violates normal rules and is considered an architectural exception:

- Acts as both CLI and library
- Has tasks that generate code elsewhere in the repo
- **Note**: This is considered bad practice - no other packages should follow this pattern

### Hybrid Packages

Some packages legitimately serve dual purposes:

- `@osdk/widget.vite-plugin`: Both a library (for importing) and web application (for development/demo)
- **Rule**: If a library has a `build` script, it MUST output to one of the approved directories: `dist/`, `out/`, or `build/site/`

### Bundle Optimization Cases

Packages that use `-m bundle` for specific optimizations:

- `@osdk/client.unstable`, `@osdk/client.unstable.tpsa`
- **Purpose**: Tree-shake away unused Conjure-generated endpoints
- **Configuration**: Use `"transpileEsm": "monorepo.tool.transpile -f esm -m bundle -t node"`

### Tool and Utility Packages

Some packages don't need type definitions:

- Private CLI tools that aren't imported by other packages
- Internal utilities that don't export APIs
- **Rule**: If no external consumers need types, `transpileTypes` can be omitted

## Additional Build Tasks

### Benchmarking

The `benchmark` task runs performance benchmarks and depends on the `bundle` task, which uses ESBuild bundling (`bundle:esbuild`) for optimized benchmark builds.

### Post-Versioning Automation

The `postVersioning` task runs automation scripts after version bumps in the repository. This is rarely needed and should be used sparingly.

### CI Tasks

- **Spell Checking**: `ci:cspell` provides spell-checking functionality for CI pipelines
- **Type Export Validation**: `check-attw` validates that packages produce compliant exports using "Are The Types Wrong"

## Common Commands

### Build Specific Package

```bash
cd packages/client && pnpm turbo typecheck
cd packages/client && pnpm turbo transpile
```

### Build All Transpilation

```bash
pnpm turbo transpile  # Runs ESM, CJS, Browser, Types in parallel
```

### Full Check (CI)

```bash
pnpm turbo check  # Runs lint, transpile, typecheck, test, etc.
```

## Cache and Performance

### Input/Output Declarations

Tasks declare precise inputs and outputs for cache invalidation:

```json
"transpileEsm": {
  "inputs": ["src/**", "tsconfig.json"],
  "outputs": ["build/esm/**"]
}
```

### Optimization Settings

- `"outputLogs": "new-only"` - Reduce noise
- `"cache": false` - Only for non-deterministic tasks like `fix-lint`
- Source maps and precise file watching for incremental builds

## Troubleshooting

### Build Failures

1. **Check codegen dependencies**: Ensure required CLI tools are built
2. **Clear turbo cache**: `pnpm turbo clean` or `rm -rf node_modules/.cache/turbo`
3. **Check global dependencies**: Changes to base tsconfig affect everything

### Performance Issues

1. **Parallel execution**: Ensure tasks don't have unnecessary `^` dependencies
2. **Cache invalidation**: Check if inputs are too broad
3. **Build order**: Remember transpilation is parallel, typecheck comes after

## Common Mistakes and Anti-Patterns

### 1. Adding "build" Scripts to Library Packages

❌ **Wrong**: Library packages with build scripts

```json
// packages/my-library/package.json
{
  "scripts": {
    "build": "pnpm transpile && pnpm typecheck" // DON'T DO THIS
  }
}
```

✅ **Correct**: Libraries only have transpile scripts

```json
// packages/my-library/package.json
{
  "scripts": {
    "transpileEsm": "monorepo.tool.transpile -f esm",
    "transpileCjs": "monorepo.tool.transpile -f cjs -m bundle",
    "transpileTypes": "monorepo.tool.transpile -f esm -m types"
  }
}
```

**Why**: The `build` task in turbo.json is designed for web applications that produce deployable assets. Libraries use transpilation tasks that produce importable code. Having the "build" manually call the other scripts breaks caching.

### 2. Creating Unnecessary Package-Level turbo.json Files

❌ **Wrong**: Package-level turbo.json for standard tasks

```json
// packages/my-package/turbo.json - USUALLY NOT NEEDED
{
  "tasks": {
    "transpileEsm": {
      "dependsOn": ["^transpileEsm"],
      "outputs": ["build/esm/**"]
    }
  }
}
```

✅ **Correct**: Let the root turbo.json handle standard tasks

```bash
# Just delete the package-level turbo.json file
rm packages/my-package/turbo.json
```

**Why**: Package-level overrides break inheritance and can cause cache misses.

### 3. Separating Codegen from Formatting/Linting

❌ **Wrong**: Separate formatting step

```json
{
  "scripts": {
    "codegen": "osdk generate --outDir src/generated",
    "format": "dprint fmt src/generated/**",
    "build": "pnpm codegen && pnpm format && pnpm transpile"
  }
}
```

✅ **Correct**: Include all transformations in codegen

```json
{
  "scripts": {
    "codegen": "osdk generate --outDir src/generated && dprint fmt src/generated/** && eslint --fix src/generated/**"
  }
}
```

**Why**: Turbo caches the codegen output. If formatting happens separately, Turbo might restore unformatted files from cache.

### 4. Incorrect ESM/CJS Dependency Chains

❌ **Wrong**: Package A depends on Package B's CJS build, but B doesn't produce CJS

```json
// Package A needs CJS build but imports Package B
// Package B only has: "transpileEsm" (no "transpileCjs")
// Result: "Cannot find module '@company/package-b'" in CJS build
```

✅ **Correct**: Either make Package A ESM-only or make Package B produce CJS

```json
// Option 1: Make Package A ESM-only
{
  "scripts": {
    "transpileEsm": "..."
    // Remove transpileCjs
  }
}

// Option 2: Make Package B produce CJS
{
  "scripts": {
    "transpileEsm": "...",
    "transpileCjs": "monorepo.tool.transpile -f cjs -m bundle"
  }
}
```

**Why**: CJS builds require all dependencies to also have CJS builds because of how module resolution works.

### 5. Broad Input Patterns Causing Cache Misses

❌ **Wrong**: Overly broad inputs

```json
{
  "codegen": {
    "inputs": ["**/*"], // This invalidates on ANY file change!
    "outputs": ["src/generated/**"]
  }
}
```

✅ **Correct**: Specific inputs

```json
{
  "codegen": {
    "inputs": ["ontology.json", "scripts/generate.mjs"],
    "outputs": ["src/generated/**"]
  }
}
```

**Why**: Broad inputs cause unnecessary cache invalidation, slowing down builds.

## Package Guidelines

### Library Packages

- **NO "build" script** in package.json
- Define transpile scripts: `transpileEsm`, `transpileCjs`, `transpileBrowser`, `transpileTypes`
- Output to `build/{esm,cjs,browser,types}/`
- Keep codegen package-specific with clear inputs/outputs
- Use `src/generatedNoCheck/` for generated code

### CLI Packages

- **NO "build" script** in package.json
- **ESM-only**: Only implement `transpileEsm` (with `-m bundle` for self-contained executable)
- Output to `build/esm/`
- Optionally implement `transpileTypes` if the CLI exports APIs for other packages
- Use `typecheck` for development

### Web Applications

- **Include `"build": "vite build"`** script (outputs to `dist/`, `out/`, or `build/site/`)
- Configure turbo.json with proper inputs/outputs for the build task
- May also include transpile scripts if the package exports importable components
- Depend on transpile and typecheck tasks as needed

### Hybrid Packages (Rare)

- Can have both `build` script and transpile scripts
- `build` script MUST output to approved directories: `dist/`, `out/`, or `build/site/`
- Transpile scripts follow normal library patterns
- Document the dual purpose clearly

### General Guidelines

- **Package scripts are managed by monorepolint** - see `.monorepolint.config.mjs`
- **Keep codegen dependencies minimal** - only what's actually needed
- **Use precise input/output specifications** for cache efficiency
- **Avoid unnecessary `^` dependencies** in transpile tasks
- **Most packages don't need package-level turbo.json files**
- **Include all transformations in codegen scripts** for cache consistency
- Turbo skips missing scripts gracefully - packages only implement what they need
- **When in doubt, check existing similar packages** in the monorepo for patterns
