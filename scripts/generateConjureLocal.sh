#!/usr/bin/env bash
set -e

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

source "$SCRIPT_DIR/checkCommand.sh"
source "$SCRIPT_DIR/formatTypescript.sh"

REALPATH=$(checkCommand "grealpath" "realpath" "Try 'brew install coreutils'")
YQ=$(checkCommand "yq" "yq" "Try 'brew install yq'")
WGET=$(checkCommand "wget" "wget" "Try 'brew install wget'")

rm -rf "${SCRIPT_DIR}/../tmp"

CONJURE_LITE="$SCRIPT_DIR/../packages/client/node_modules/.bin/conjure-lite"

function generateConjure() {
    CONJURE_PATH="$1"
    PACKAGE_PATH="$2"
    ARTIFACT_ID="$3"

    mkdir -p "${PACKAGE_PATH}/src/generated/${ARTIFACT_ID/%-api//}"

    OUT_DIR=$("$REALPATH" --relative-to=. "${PACKAGE_PATH}/src/generated/${ARTIFACT_ID/%-api//}")

    rm -rf "$OUT_DIR"

    echo "  - Generating typescript"
    $CONJURE_LITE generate --ir "$CONJURE_PATH" --outDir "$OUT_DIR" --header "/**/"

    formatTypescript "$OUT_DIR" "$PACKAGE_PATH"
}

generateConjure "/Volumes/git/second/ontology-metadata-service/ontology-metadata-api/build/conjure-transform-output/ontology-metadata-api.conjure.json" "${SCRIPT_DIR}/../packages/client.unstable" "ontology-metadata"

# Reset git changes if the generated files are only changed by copyright year
git status --porcelain --untracked-files=no | while read line; do
    status=$(echo "$line" | awk '{print $1 }')
    file=$(echo "$line" | awk '{print $2 }')

    if [[ "$status" == "D" ]]; then
        # do nothing
        bnitgub="da"
    else 
        # 2023 -> 2024, 2023 -> 2025, 2024 -> 2025
        v=$(git diff -U0 $file | tail +5 | md5sum)
        expected=("ce0376e23ce2aa3d0dcd56c2befc2993  -", "ef60ce5d7f8bca44ce62fda0e2640235  -", "fab2d6132fef74b11845dc9106c49a4f  -")


        if [[ " ${expected[@]} " =~ "$v" ]]; then
            git checkout --quiet $file
        else
            # echo "KEEP $file"
            asdfasfd=""
        fi
    fi
done