#!/usr/bin/env bash

set -e

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
WORKSPACE_DIR="${SCRIPT_DIR}/.."

turbo codegen --filter @osdk/examples.basic.sdk

E2E_DIR="${WORKSPACE_DIR}/tmp/e2e/"


mkdir -p "$E2E_DIR/sdk.v1"
mkdir -p "$E2E_DIR/sdk.v2"
node ./packages/cli/bin/osdk.mjs unstable typescript generate --outDir "$E2E_DIR/sdk.v2" --ontologyPath "$WORKSPACE_DIR/examples-extra/basic/sdk/ontology.json" --beta true   --version 0.0.0 --asPackage --packageName @osdk/e2e.sdk.v2 --clean
node ./packages/cli/bin/osdk.mjs unstable typescript generate --outDir "$E2E_DIR/sdk.v1" --ontologyPath "$WORKSPACE_DIR/examples-extra/basic/sdk/ontology.json"               --version 0.0.0 --asPackage --packageName @osdk/e2e.sdk.v1 --clean


cd "${E2E_DIR}/sdk.v2"
npm install
npm run check

cd "${E2E_DIR}/sdk.v1"
npm install
npm run check
