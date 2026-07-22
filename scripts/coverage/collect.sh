#!/usr/bin/env bash
#
# Collect per-package v8 coverage across the monorepo. Each package writes
# `<pkg>/coverage/coverage-final.json`, which scripts/coverage/merge-coverage.mjs
# then merges into one report.
#
# @osdk/react-components runs in its OWN turbo invocation: its large happy-dom
# suite starves the other ~80 test processes under concurrency and can trip
# vitest's worker-RPC timeout ("Timeout calling onTaskUpdate"). ci.yml isolates
# it in the test matrix for the same reason; we do the same here so the coverage
# run is reliable (important once this gates merges).
#
# --continue keeps every package running even when one fails or breaches its
# threshold, so the merged report is always complete. We still exit non-zero if
# either invocation failed, so the coverage job can gate on it.

set -uo pipefail

COVERAGE_ARGS=(
  --coverage.enabled
  --coverage.provider=v8
  --coverage.reporter=json
  --coverage.reportsDirectory=coverage
)

# Ensure dependencies' build output exists (a cache hit if already built) so the
# `--only` test runs below can resolve them on a fresh checkout.
turbo run transpile transpileTypes || exit 1

# Everything except react-components (and example-generator, whose sole test is a
# codegen-drift check that calls process.exit).
turbo run test --force --only --continue \
  --filter='./packages/*' \
  --filter='!@osdk/react-components' \
  --filter='!@osdk/example-generator' \
  -- "${COVERAGE_ARGS[@]}"
rest_rc=$?

# react-components on its own, uncontended.
turbo run test --force --only --continue \
  --filter='@osdk/react-components' \
  -- "${COVERAGE_ARGS[@]}"
rc_rc=$?

# Fail if either batch had a test failure or threshold breach.
[ "$rest_rc" -eq 0 ] && [ "$rc_rc" -eq 0 ]
