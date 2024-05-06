#!/usr/bin/env bash
set -e

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

source "$SCRIPT_DIR/checkCommand.sh"

REALPATH=$(checkCommand "grealpath" "realpath" "Try 'brew install coreutils'")
XQ=$(checkCommand "yq" "yq" "Try 'brew install yq'")
WGET=$(checkCommand "wget" "wget" "Try 'brew install wget'")

echo "Making sure the tool is built"
pnpm exec turbo run transpile --filter ./packages/foundry-generator --output-logs=errors-only

# "$SCRIPT_DIR/getOpenApiIr.sh"

CODE_GENERATOR="$SCRIPT_DIR/../packages/foundry-generator/bin/foundry-generator.mjs"
OPENAPI_IR_JSON="${SCRIPT_DIR}/../tmp/api-gateway-ir/openapi-ir.json"
OPENAPI_MANIFEST_YML="${SCRIPT_DIR}/../tmp/api-gateway-ir/manifest.yml"

PACKAGE_PATH="${SCRIPT_DIR}/../packages/internal.foundry"
OUT_DIR=$("$REALPATH" --relative-to=. "${PACKAGE_PATH}/src")

echo "Generating bindings for internal.foundry"
$CODE_GENERATOR generate --inputFile "${OPENAPI_IR_JSON}" --manifestFile "${OPENAPI_MANIFEST_YML}" --outputDir "${OUT_DIR}"


# Generate the API bindings for @oskd/foundry (omni v2)
OUT_PATH="${SCRIPT_DIR}/../packages/"
OUT_DIR=$("$REALPATH" --relative-to=. "${OUT_PATH}")
OMNIAPI_IR_JSON="${SCRIPT_DIR}/../tmp/api-gateway-ir/v2.json"


echo "Generating bindings"
$CODE_GENERATOR generate --v2 --inputFile "${OMNIAPI_IR_JSON}" --manifestFile "${OPENAPI_MANIFEST_YML}" --outputDir "${OUT_PATH}"

echo
echo pnpm install to make align deps
pnpm install --reporter=silent

echo
echo "Running mrl"
pnpm exec mrl check --fix --quiet

echo
echo "Fixing lint and formatting lines"
pnpm exec turbo run --output-logs=errors-only fix-lint 

echo
echo "Checking for any remaining lint errors"
pnpm exec turbo run --output-logs=errors-only check
