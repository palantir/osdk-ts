#!/usr/bin/env bash

set -e
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

# Clean up old files
find . \( -path build/cjs -or -path build/esm -or -path build/browser \) -type f \( -name '*.ts' -or -name '*.ts.map' -or -name '*.cts' -or -name '*.cts.map' \) -delete


# Command line arg
BUILD_TYPE="${1:-esm}"

if [[ "$BUILD_TYPE" != "esm" && "$BUILD_TYPE" != "both" ]]; then
    echo "Invalid build type: $BUILD_TYPE"
    exit 1
fi

source "$SCRIPT_DIR/../../../scripts/checkCommand.sh"
SED="$(checkCommand "gsed" "sed" "Try 'brew install gnu-sed'")"
TSC="pnpm exec tsc-absolute"



# Run tsc for ESM
echo "Typechecking ESM"
$TSC -p tsconfig.json

# Run tsc for CJS
if [[ "$BUILD_TYPE" == "both" ]]; then
    echo "Typechecking CJS"
    $TSC -p tsconfig.cjs.json


    find build/cjs -name '*.d.ts' -print0 | while IFS= read -r -d '' file; do
        # TS is producting .d.ts files but because the repo is { type: "module" } we need to rename them to .cts
        mv "$file" "${file%.ts}.cts"
        
        # Update imports to use .cts
        $SED -E -i 's/(from ".*.)js(";)$/\1cjs\2/g;s/(from \x27.*.)js(\x27;)$/\1cjs\2/g' "${file%.ts}.cts"
    done
fi
