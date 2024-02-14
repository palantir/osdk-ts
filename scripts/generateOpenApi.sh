#!/usr/bin/env bash
set -e

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

source "$SCRIPT_DIR/checkCommand.sh"
source "$SCRIPT_DIR/formatTypescript.sh"

REALPATH=$(checkCommand "grealpath" "realpath" "Try 'brew install coreutils'")
XQ=$(checkCommand "xq" "xq" "Try 'brew install python-yq'")
WGET=$(checkCommand "wget" "wget" "Try 'brew install wget'")

"$SCRIPT_DIR/getOpenApiIr.sh"

GATEWAY_GENERATOR="$SCRIPT_DIR/../packages/gateway-generator/bin/gateway-generator.cjs"
OPENAPI_IR_JSON="${SCRIPT_DIR}/../tmp/api-gateway-ir/openapi-ir.json"
OPENAPI_MANIFEST_YML="${SCRIPT_DIR}/../tmp/api-gateway-ir/manifest.yml"

PACKAGE_PATH="${SCRIPT_DIR}/../packages/gateway"
OUT_DIR=$("$REALPATH" --relative-to=. "${PACKAGE_PATH}/src/generated/openapi")

rm -rf "$OUT_DIR"
# Generate the API bindings
echo "Generating gateway bindings"
$GATEWAY_GENERATOR generate --inputFile "${OPENAPI_IR_JSON}" --manifestFile "${OPENAPI_MANIFEST_YML}" --outputDir "${OUT_DIR}" --generateVisitors false

formatTypescript "$OUT_DIR" "$PACKAGE_PATH"