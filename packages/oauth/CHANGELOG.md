# @osdk/oauth

## 1.1.1

### Patch Changes

- 2354693: Discard refresh token if requested scopes have changed

## 1.1.0

### Minor Changes

- 25fd9f0: Updating package.json to have better entry points to support react native bundlers.
- 0166d14: Fixes an infinite redirect issue on some errors in the OAuth flow
- e968bc0: Use api:ontologies-X instead of api:X-data
- 44e62f6: Updating fetch for auth and other packages.
- 91cfa3a: Fixing url parsing for client.
- d501104: Adds unit testing of public oauth flow
- 9d35a1f: Remove unused imports
- c691c8b: Package now has experimental support for commonjs
- 9df2d99: Fixes CJS generation for OAuth
- 33590c7: Add tests for createPublicOauthClient overload
- 02685ab: Adding return types to functions.
- c9da74c: Improves code quality by fixing linting errors
- 91cfa3a: Fixing URL parsing for custom entry points.
- 3d2ba6f: Revert api:x-read/write back to api:read/write-x
- d12c92b: Fixes process.env.NODE_ENV handling
- e00bb29: Overload createPublicOauthClient to support object of options
- 696c59c: Enables additional metadata to be required to match a refresh token in local storage

## 1.1.0-beta.11

### Minor Changes

- 9df2d99: Fixes CJS generation for OAuth

## 1.1.0-beta.10

### Minor Changes

- 44e62f6: Updating fetch for auth and other packages.

## 1.1.0-beta.9

### Minor Changes

- c691c8b: Package now has experimental support for commonjs

## 1.1.0-beta.8

### Minor Changes

- 02685ab: Adding return types to functions.
- 696c59c: Enables additional metadata to be required to match a refresh token in local storage

## 1.1.0-beta.7

### Minor Changes

- 0166d14: Fixes an infinite redirect issue on some errors in the OAuth flow
- c9da74c: Improves code quality by fixing linting errors

## 1.1.0-beta.6

### Minor Changes

- 3d2ba6f: Revert api:x-read/write back to api:read/write-x

## 1.1.0-beta.5

### Minor Changes

- 9d35a1f: Remove unused imports

## 1.1.0-beta.4

### Minor Changes

- e968bc0: Use api:ontologies-X instead of api:X-data

## 1.1.0-beta.3

### Minor Changes

- 91cfa3a: Fixing url parsing for client.
- d501104: Adds unit testing of public oauth flow
- 91cfa3a: Fixing URL parsing for custom entry points.

## 1.1.0-beta.2

### Minor Changes

- 33590c7: Add tests for createPublicOauthClient overload
- e00bb29: Overload createPublicOauthClient to support object of options

## 1.1.0-beta.1

### Minor Changes

- 25fd9f0: Updating package.json to have better entry points to support react native bundlers.

## 1.1.0-beta.0

### Minor Changes

- d12c92b: Fixes process.env.NODE_ENV handling

## 1.0.0

### Major Changes

- 7e90f77: Releasing first major version of oauth package.

### Minor Changes

- cad781e: PublicClient allows relative paths for login pages
- 1252d94: ESM Only
- cad781e: adds getTokenOrUndefined() to oauth clients
- cad781e: Redirects to root when visiting an old auth callback
- cad781e: Fixes a bug where process.env was being emitted
- d80e2ec: Fixes a bug that can occur during the login flow
- cad781e: Uses default scopes when provided an empty array
- d4d6605: Audited and cleaned up deps

## 0.4.0-beta.3

### Minor Changes

- d4d6605: Audited and cleaned up deps

## 0.4.0-beta.2

### Minor Changes

- d80e2ec: Fixes a bug that can occur during the login flow

## 0.4.0-beta.1

### Minor Changes

- 1252d94: ESM Only

## 0.4.0-beta.0

### Minor Changes

- cad781e: PublicClient allows relative paths for login pages
- cad781e: adds getTokenOrUndefined() to oauth clients
- cad781e: Redirects to root when visiting an old auth callback
- cad781e: Fixes a bug where process.env was being emitted
- cad781e: Uses default scopes when provided an empty array

## 0.3.0

### Minor Changes

- bc89b62: Spelling fixes and spell check in CI
- b62ac80: Adds createConfidentialOauthClient

## 0.3.0-beta.0

### Minor Changes

- bc89b62: Spelling fixes and spell check in CI

## 0.2.0

### Minor Changes

- b1518b3: Fixes issue with **DEV** not being defined
