#!/usr/bin/env bash
#
# Prints the files this build changed relative to its base commit, one per line.
#
# Use this for questions about *files* — "did anyone touch CI config", "did the
# lockfile move without a manifest". For "does this package need rebuilding or
# retesting", use is-affected.sh instead: it asks turbo's package graph and so
# accounts for transitive dependencies, which a path pattern cannot.
#
# Exits 2 (printing nothing to stdout) when the base cannot be resolved, which
# callers must treat as "unknown" and fail open.

set -euo pipefail

base="$("$(dirname "$0")/base-ref.sh")"

echo "Diffing against base commit $base" >&2
git diff --name-only "$base" HEAD
