# @osdk/legacy-client

## 0.0.14

### Patch Changes

- 4f73749: Re-add the types to support the ObjectSet APIs
- Updated dependencies [4f73749]
  - @osdk/gateway@0.0.8
  - @osdk/api@0.0.15

## 0.0.13

### Patch Changes

- ad425f9: Fix query return type for objects
- Updated dependencies [ad425f9]
  - @osdk/gateway@0.0.7
  - @osdk/api@0.0.14

## 0.0.12

### Patch Changes

- 4f9758d: Fixing Query response type for Objects

## 0.0.11

### Patch Changes

- 11ac931: Adding groupBy for Array types, using primary keys for actions and queries, and re-exporting more types
- 25de57b: Small fixes
- Updated dependencies [11ac931]
- Updated dependencies [25de57b]
  - @osdk/api@0.0.13
  - @osdk/gateway@0.0.6

## 0.0.10

### Patch Changes

- dfc2b94: Fix OAuth login process
- Updated dependencies [dfc2b94]
  - @osdk/gateway@0.0.5
  - @osdk/api@0.0.12

## 0.0.9

### Patch Changes

- f3120fb: Move 2.0 client into @osdk/client to fix typescript 4.9 compatability in @osdk/api"
- 848404c: Handle conflicts between object, action, and query names
- Updated dependencies [f3120fb]
- Updated dependencies [848404c]
  - @osdk/gateway@0.0.4
  - @osdk/api@0.0.11

## 0.0.8

### Patch Changes

- Updated dependencies [9167059]
  - @osdk/api@0.0.10

## 0.0.7

### Patch Changes

- Updated dependencies [0860ae9]
  - @osdk/api@0.0.9

## 0.0.6

### Patch Changes

- e22ce70: Adding proper support for reservered keywords in properties

## 0.0.5

### Patch Changes

- 70719db: Fixing nits, and adding support for legacy reservered word backcompat

## 0.0.4

### Patch Changes

- 1674b35: Releasing clients for integration
- Updated dependencies [1674b35]
  - @osdk/api@0.0.8
  - @osdk/gateway@0.0.3

## 0.0.3

### Patch Changes

- a2b7874: Addin TimeSeries support and fixing issues during code-gen time with Queries
- Updated dependencies [a2b7874]
  - @osdk/api@0.0.7

## 0.0.2

### Patch Changes

- 90cc3ae: Adding Object, Object Set, Attachments, and Actions implementations for OSDK V1.1
- Updated dependencies [90cc3ae]
  - @osdk/api@0.0.6
  - @osdk/gateway@0.0.2

## 0.0.1

### Patch Changes

- d2e9964: Removing subpath imports since TS does not resolve them when creating `.d.ts` files
