# GitHub Copilot Instructions for OSDK TypeScript Repository

## General Guidelines

This repository is a monorepo for the Palantir OSDK (Ontology SDK) TypeScript packages. When working with this codebase, please follow these guidelines:

## Changeset Files

When reviewing or creating changeset files (`.changeset/*.md`), **do not nitpick about quoting of package names or empty changesets**.

Changeset files use YAML front matter to specify which packages are affected by changes. Package names may appear with or without quotes, and both formats are acceptable:

```yaml
---
"@osdk/cli": patch
@osdk/client: patch
---
```

Empty changeset files are also perfectly valid and commonly used when the change does not need a release note:

```yaml
---
---
```

Both quoted and unquoted package names in changeset front matter are valid, and empty changesets are perfectly acceptable. None of these should be flagged for correction or consistency changes.

## Code Style

- Follow the existing code patterns and conventions in the repository
- Use the configured linters and formatters (ESLint, Prettier, etc.)
- Maintain consistency with the existing TypeScript patterns

## Testing

- Ensure all tests pass before suggesting changes
- Add appropriate tests for new functionality
- Follow the existing testing patterns in the codebase

## Documentation

- Update relevant documentation when making changes
- Follow the existing documentation style and patterns
- Ensure code changes include appropriate inline comments where necessary
