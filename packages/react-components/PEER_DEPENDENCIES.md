# Peer Dependency Ranges

This document explains how the peer dependency ranges for `@osdk/api`, `@osdk/client`, and `@osdk/react` were determined.

## Methodology

Each range was derived by identifying the specific imports used by `@osdk/react-components` and checking which published version of each package first exported those symbols.

The ranges use `>=X.Y.Z-0 <N.0.0` syntax (instead of `^X.Y.Z`) so that prerelease/beta versions are also matched, since `react-components` itself is published as a beta.

## `@osdk/api` — `>=2.1.0-0 <3.0.0`

Imports used:

| Symbol                        | First available |
| ----------------------------- | --------------- |
| `ActionDefinition`            | 2.0.0           |
| `ActionMetadata`              | 2.0.0           |
| `ObjectOrInterfaceDefinition` | 2.0.0           |
| `ObjectSet`                   | 2.0.0           |
| `ObjectTypeDefinition`        | 2.0.0           |
| `Osdk`                        | 2.0.0           |
| `PrimaryKeyType`              | 2.0.0           |
| `PropertyKeys`                | 2.0.0           |
| `WhereClause`                 | 2.0.0           |
| `Media`                       | 2.1.0           |

**Minimum: 2.1.0** (constrained by `Media`).

## `@osdk/client` — `>=2.0.0-0 <3.0.0`

Imports used:

| Symbol                  | First available |
| ----------------------- | --------------- |
| `Client`                | 2.0.0           |
| `ActionValidationError` | 2.0.0           |

**Minimum: 2.0.0**.

## `@osdk/react` — `>=0.7.0-0 <1.0.0`

Imports from `@osdk/react`:

| Symbol            | First available |
| ----------------- | --------------- |
| `OsdkProvider`    | 0.6.0           |
| `useOsdkClient`   | 0.6.0           |
| `useOsdkMetadata` | 0.6.0           |

Imports from `@osdk/react/experimental`:

| Symbol                | First available |
| --------------------- | --------------- |
| `useOsdkObjects`      | 0.6.0           |
| `UseOsdkListResult`   | 0.6.0           |
| `useOsdkAction`       | 0.6.0           |
| `useObjectSet`        | 0.7.0           |
| `useOsdkAggregation`  | 0.7.0           |

**Minimum: 0.7.0** (constrained by `useObjectSet` and `useOsdkAggregation`).

## Updating these ranges

When adding a new import from any of these packages, check whether the symbol exists in the current minimum version. If it was introduced in a later version, bump the lower bound of the range accordingly.
