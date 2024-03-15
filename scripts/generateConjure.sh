#!/usr/bin/env bash
set -e

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

source "$SCRIPT_DIR/checkCommand.sh"
source "$SCRIPT_DIR/formatTypescript.sh"

REALPATH=$(checkCommand "grealpath" "realpath" "Try 'brew install coreutils'")
XQ=$(checkCommand "xq" "xq" "Try 'brew install python-yq'")
WGET=$(checkCommand "wget" "wget" "Try 'brew install wget'")

rm -rf "${SCRIPT_DIR}/../tmp"

CONJURE_LITE="$SCRIPT_DIR/../packages/cli/node_modules/.bin/conjure-lite"

function generateConjure() {
    GROUP_ID="$1"
    ARTIFACT_ID="$2"
    PACKAGE_PATH="$3"
    OUT_DIR=$("$REALPATH" --relative-to=. "${PACKAGE_PATH}/src/generated/${ARTIFACT_ID/%-api//}")

    rm -rf "$OUT_DIR"

    printf "Fetching conjure IR\n  Coordinate: %s\n  Path: %s\n" "$GROUP_ID:$ARTIFACT_ID" "$OUT_DIR"
    "$SCRIPT_DIR/getConjureIr.sh" "$GROUP_ID" "$ARTIFACT_ID"
    echo "  - Generating typescript"
    $CONJURE_LITE generate --ir "${SCRIPT_DIR}/../tmp/${ARTIFACT_ID}.conjure.json" --outDir "$OUT_DIR"

    formatTypescript "$OUT_DIR" "$PACKAGE_PATH"
}

generateConjure "com.palantir.artifacts" "artifacts-sites-api" "${SCRIPT_DIR}/../packages/cli"

generateConjure "com.palantir.object-set-service" "object-set-service-api" "${SCRIPT_DIR}/../packages/client"
generateConjure "com.palantir.object-set-watcher" "object-set-watcher-api" "${SCRIPT_DIR}/../packages/client"
generateConjure "com.palantir.ontology" "ontology-metadata-api" "${SCRIPT_DIR}/../packages/client"
