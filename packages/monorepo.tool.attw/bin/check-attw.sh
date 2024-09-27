#!/usr/bin/env bash

set -e

BUILD_TYPE="${1:-esm}"

if [[ "$BUILD_TYPE" != "esm" && "$BUILD_TYPE" != "both" ]]; then
    echo "Invalid build type: $BUILD_TYPE"
    exit 1
fi

mkdir -p build

ATTW="pnpm exec attw";

EXTRA_ENTRY_POINTS="$( (ls src/public 2> /dev/null || echo "") | xargs -I {} basename {} .ts )"
echo "Checking extra entry points: $EXTRA_ENTRY_POINTS"

# Run ATTW for all entrypoints (assuming the convention)
# Don't fail on exit code.
$ATTW --pack --format json  --entrypoints . $EXTRA_ENTRY_POINTS > build/attw.json || true 

cat build/attw.json
# Check for errors, will be empty string if there are none.
# shellcheck disable=SC2002
errors=$(cat build/attw.json | jq --arg check_type "$BUILD_TYPE" '
    def filterIssues($problems):
        $problems | map_values( 
            [.[] | select(
                $check_type != "esm" or .resolutionKind != "node10" and .resolutionKind != "node16-cjs"
            )] 
        ) | map_values(if . | length == 0 then empty else . end)
    ;

    filterIssues(.problems | {}) | if (. == {}) then empty else . end
    ')

if [[ -z "$errors" ]]; then
    echo "ATTW: No issues found"
else
    echo ""
    echo "Found ATTW Errors: "
    echo ""
    echo "$errors" | jq --color-output

    # fail script
    exit 1
fi
