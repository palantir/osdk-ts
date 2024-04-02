#!/usr/bin/env bash
set -e

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

source "$SCRIPT_DIR/checkCommand.sh"
source "$SCRIPT_DIR/formatTypescript.sh"

REALPATH=$(checkCommand "grealpath" "realpath" "Try 'brew install coreutils'")
XQ=$(checkCommand "xq" "xq" "Try 'brew install python-yq'")
WGET=$(checkCommand "wget" "wget" "Try 'brew install wget'")

# "$SCRIPT_DIR/getOpenApiIr.sh"

CODE_GENERATOR="$SCRIPT_DIR/../packages/omniapi-generator/bin/omniapi-generator.mjs"
OPENAPI_IR_JSON="${SCRIPT_DIR}/../tmp/api-gateway-ir/openapi-ir.json"
OPENAPI_MANIFEST_YML="${SCRIPT_DIR}/../tmp/api-gateway-ir/manifest.yml"

PACKAGE_PATH="${SCRIPT_DIR}/../packages/omniapi"
OUT_DIR=$("$REALPATH" --relative-to=. "${PACKAGE_PATH}/src")

# Generate the API bindings
echo "Generating bindings"
$CODE_GENERATOR generate --inputFile "${OPENAPI_IR_JSON}" --manifestFile "${OPENAPI_MANIFEST_YML}" --outputDir "${OUT_DIR}"

formatTypescript "$OUT_DIR" "$PACKAGE_PATH"