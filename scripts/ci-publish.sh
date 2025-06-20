#!/usr/bin/env bash
set -e

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

cd "${SCRIPT_DIR}/../"

pnpm exec turbo transpile --filter "./packages/tool.release"
node ./packages/tool.release/build/esm/ciPublish.js
