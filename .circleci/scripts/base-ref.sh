#!/usr/bin/env bash
#
# Prints the commit this build should be compared against.
#
# On a topic branch that is the merge-base with $BASE_BRANCH (default: main).
# On $BASE_BRANCH itself it is the previous commit, which mirrors what
# `github.event.before` gives the GitHub Actions workflows.
#
# Exits 2 (printing nothing to stdout) when the base cannot be resolved.
# Callers must treat that as "unknown" and fail open by doing the work anyway —
# skipping a job because we could not read git history is the wrong trade.

set -euo pipefail

BASE_BRANCH="${BASE_BRANCH:-main}"

# CircleCI's checkout only guarantees the current branch's history. Use an
# explicit refspec so the remote-tracking ref exists regardless of how the
# remote's default refspec happens to be configured.
fetch_base() {
  git fetch --quiet origin \
    "+refs/heads/$BASE_BRANCH:refs/remotes/origin/$BASE_BRANCH" 2>/dev/null
}

resolve_base() {
  if [ "${CIRCLE_BRANCH:-}" = "$BASE_BRANCH" ]; then
    git rev-parse --verify --quiet 'HEAD^' || true
  else
    git merge-base HEAD "origin/$BASE_BRANCH" 2>/dev/null || true
  fi
}

fetch_base || true
base="$(resolve_base)"

# A shallow clone can hold both refs without holding the commit that joins
# them, which makes merge-base fail. Deepen once and retry before giving up.
if [ -z "$base" ] && [ "$(git rev-parse --is-shallow-repository)" = "true" ]; then
  echo "Shallow clone has no common ancestor yet; deepening history." >&2
  git fetch --quiet --unshallow origin 2>/dev/null \
    || git fetch --quiet --deepen=100 origin 2>/dev/null \
    || true
  fetch_base || true
  base="$(resolve_base)"
fi

if [ -z "$base" ]; then
  echo "Could not resolve a base commit to compare against." >&2
  exit 2
fi

echo "$base"
