# @osdk/tool.release

## 0.12.0

### Patch Changes

- 322c5bc: Simulated release
- f908b4d: Match refs/heads/release/_ instead of release/_
- 31cd835: Revert beta changes

## 0.12.0-rc.3

### Patch Changes

- 31cd835: Revert beta changes

## 0.12.0-beta.2

### Minor Changes

- f908b4d: Match refs/heads/release/_ instead of release/_

## 0.11.0

### Patch Changes

- 322c5bc: Simulated release
- af4f3bf: Remove the following features for RC:
  - Property formatting
  - Branching
  - Constant RDPs

## 0.10.0

### Patch Changes

- 322c5bc: Simulated release

## 0.8.0-beta.2

### Minor Changes

- f8db93d: improve media upload (beta)

## 0.7.0

### Patch Changes

- 322c5bc: Simulated release
- 21e33a5: Upgrade consola to 3.4.0
- c8da1f9: Write script to add updated changelogs from previous release

## 0.7.0-beta.3

### Minor Changes

- c8da1f9: Write script to add updated changelogs from previous release

## 0.7.0-beta.2

### Minor Changes

- 21e33a5: Upgrade consola to 3.4.0

## 0.6.0

### Minor Changes

- 25fd9f0: Updating package.json to have better entry points to support react native bundlers.
- f0b519d: Upgrade to vitest 3 and vite 6
- c170ecd: Throws error when trying to generate PR with package versions that are already published to NPM
- 1ae146c: Fix release for none release types.
- c9da74c: Improves code quality by fixing linting errors
- 6671a39: Upgrade execa where used

## 0.6.0-beta.5

### Minor Changes

- 1ae146c: Fix release for none release types.

## 0.6.0-beta.4

### Minor Changes

- f0b519d: Upgrade to vitest 3 and vite 6

## 0.6.0-beta.3

### Minor Changes

- c9da74c: Improves code quality by fixing linting errors

## 0.6.0-beta.2

### Minor Changes

- 6671a39: Upgrade execa where used

## 0.6.0-beta.1

### Minor Changes

- 25fd9f0: Updating package.json to have better entry points to support react native bundlers.

## 0.6.0-beta.0

### Minor Changes

- c170ecd: Throws error when trying to generate PR with package versions that are already published to NPM

## 0.5.0

### Minor Changes

- d4d6605: Audited and cleaned up deps

## 0.5.0-beta.0

### Minor Changes

- d4d6605: Audited and cleaned up deps

## 0.4.0

### Minor Changes

- 0e931a4: Properly generate titles and body copy after exiting pre mode

## 0.3.0

### Minor Changes

- e3f900e: Log GitHub token being found in createReleasePr, addressing #266

  Also replace "github cli" with "GitHub CLI" in the log messages.

- bc89b62: Spelling fixes and spell check in CI

## 0.3.0-beta.1

### Minor Changes

- bc89b62: Spelling fixes and spell check in CI

## 0.3.0-beta.0

### Minor Changes

- e3f900e: Log GitHub token being found in createReleasePr, addressing #266

  Also replace "github cli" with "GitHub CLI" in the log messages.

## 0.2.0

### Minor Changes

- 63ff4b2: Only producing ESM now

## 0.1.0

### Minor Changes

- f3e7536: Prevent publishing patch from main and minor/major from release
