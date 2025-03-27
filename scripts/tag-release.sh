#!/usr/bin/env bash
set -e

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

cd "${SCRIPT_DIR}/../"

COMMIT_SHA=${1:-}

pnpm exec turbo transpile --filter "./packages/tool.release"
node ./packages/tool.release/build/esm/index.js --repo palantir/osdk-ts --mode tag-version --commitSha "${COMMIT_SHA}"