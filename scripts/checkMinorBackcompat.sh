#!/usr/bin/env bash

set -e

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

cd "${SCRIPT_DIR}/../"

pnpm exec turbo transpile --filter "./packages/tests.backcompat"
node ./packages/tests.backcompat/build/esm/index.js -c