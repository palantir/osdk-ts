#!/usr/bin/env bash
set -e

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

cd "${SCRIPT_DIR}/../"

if [[ $(git rev-parse --abbrev-ref HEAD | sed -E 's/^changeset-release\/.*$/ABORT/') == "ABORT" ]]; then
    echo "===== ABORTING ====="
    echo ""
    echo "Given you are already on a changeset branch, you almost certainly dont"
    echo "want to run a release from here".
    exit 1
fi


if output=$(git status --porcelain) && [ -z "$output" ]; then
  # Working directory clean
  
  pnpm exec turbo transpile --filter "./packages/tool.release"
  node ./packages/tool.release/build/js/index.mjs --repo palantir/osdk-ts --versionCmd "pnpm ci:version"
  echo
  echo
  echo "WARNING: You are on the release branch"
else
  # Uncommitted changes
  echo "===== ABORTING ====="
  echo ""
  echo "For your protection, we are aborting the createReleasePr flow as you have"
  echo "unmerged changes in your tree."
  exit 1
fi