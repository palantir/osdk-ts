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
    GROUP_ID="$1"
    ARTIFACT_ID="$2"
    PACKAGE_PATH="$3"
    OUT_DIR=$("$REALPATH" --relative-to=. "${PACKAGE_PATH}/src/generated/${ARTIFACT_ID/%-api//}")

    rm -rf "$OUT_DIR"

    printf "Fetching conjure IR\n  Coordinate: %s\n  Path: %s\n" "$GROUP_ID:$ARTIFACT_ID" "$OUT_DIR"
    "$SCRIPT_DIR/getConjureIr.sh" "$GROUP_ID" "$ARTIFACT_ID"
    echo "  - Generating typescript"
    $CONJURE_LITE generate --ir "${SCRIPT_DIR}/../tmp/${ARTIFACT_ID}.conjure.json" --outDir "$OUT_DIR" --header "/**/"

    formatTypescript "$OUT_DIR" "$PACKAGE_PATH"
}

generateConjure "com.palantir.object-set-service" "object-set-service-api" "${SCRIPT_DIR}/../packages/client"
generateConjure "com.palantir.object-set-watcher" "object-set-watcher-api" "${SCRIPT_DIR}/../packages/client"
generateConjure "com.palantir.ontology" "ontology-metadata-api" "${SCRIPT_DIR}/../packages/client"

# Reset git changes if the generated files are only changed by copyright year
git status --porcelain --untracked-files=no | while read line; do
    status=$(echo "$line" | awk '{print $1 }')
    file=$(echo "$line" | awk '{print $2 }')

    if [[ "$status" == "D" ]]; then
        # do nothing
        bnitgub="da"
    else 
        v=$(git diff -U0 $file | tail +5 | md5sum)
        expected="ce0376e23ce2aa3d0dcd56c2befc2993  -" 


        if [[ $v == $expected ]]; then
            git checkout --quiet $file
        else
            # echo "KEEP $file"
            asdfasfd=""
        fi
    fi
done