#!/usr/bin/env bash

set -e

cleanup() {
    echo "Regenerating test SDK with workspace version"
    pnpm exec turbo codegen --filter "./packages/client.test.ontology"
}

# Set up a trap to call the cleanup function on EXIT
trap cleanup EXIT

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

cd "${SCRIPT_DIR}/../"

pnpm exec turbo transpile --filter "./packages/test.minor-backcompat"
node ./packages/test.minor-backcompat/build/esm/index.js