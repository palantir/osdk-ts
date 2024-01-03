#!/usr/bin/env bash
set -e

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

function checkCommand() {
    local DARWIN_COMMAND="$1"
    local LINUX_COMMAND="$2"
    local DARWIN_ERROR="$3"

    local COMMAND_NAME="$LINUX_COMMAND"
    local ERROR_MESSAGE="Aborting"

    if [[ "$OSTYPE" == "darwin"* ]]; then
        COMMAND_NAME="$DARWIN_COMMAND"
        ERROR_MESSAGE="$DARWIN_ERROR"
    fi
    command -v "$COMMAND_NAME" || { echo >&2 "$COMMAND_NAME is required but not installed. $ERROR_MESSAGE."; exit 1; }
}

REALPATH=$(checkCommand "grealpath" "realpath" "Try 'brew install coreutils'")
SPONGE=$(checkCommand "sponge" "sponge" "Try 'brew install moreutils'")
XQ=$(checkCommand "xq" "xq" "Try 'brew install python-yq'")
WGET=$(checkCommand "wget" "wget" "Try 'brew install wget'")

"$SCRIPT_DIR/getOpenApiIr.sh"

GATEWAY_GENERATOR="$SCRIPT_DIR/../packages/gateway-generator/bin/gateway-generator.cjs"
OPENAPI_IR_JSON="${SCRIPT_DIR}/build/tmp/api-gateway-ir/openapi-ir.json"

PACKAGE_PATH="${SCRIPT_DIR}/../packages/gateway"
OUT_DIR=$("$REALPATH" --relative-to=. "${PACKAGE_PATH}/src/generated/openapi")
echo "Generating gateway bindings"
echo "Output directory: $OUT_DIR"

# Generate the API bindings
$GATEWAY_GENERATOR generate --inputFile "${OPENAPI_IR_JSON}" --outputDir "${OUT_DIR}" --generateVisitors false

while IFS= read -r -d '' -u 9
do
    printf '/*\n *\n */\n\n' | cat - "$REPLY" | "$SPONGE" "$REPLY"
done 9< <( find "$OUT_DIR" -type f -exec printf '%s\0' {} + )

# # Actually fix the headers now
echo "  - Running lint-fix"
(cd "$PACKAGE_PATH" && pnpm run fix-lint)