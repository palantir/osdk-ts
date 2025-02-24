#!/usr/bin/env bash
set -e

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

cd "${SCRIPT_DIR}/../"

pnpm exec turbo transpile --filter "./packages/tool.release"
node ./packages/tool.release/build/esm/index.js --mode simulateMinorBump --repo palantir/osdk-ts
echo "WARNING: You are probably on the pr branch"
