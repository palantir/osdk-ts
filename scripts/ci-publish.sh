#!/usr/bin/env bash

set -e

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

source "$SCRIPT_DIR/checkCommand.sh"
JQ=$(checkCommand "jq" "jq" "Try 'brew install jq'")

# Default value for pnpm
TAG="latest"

if [ -f "${SCRIPT_DIR}/../.changeset/pre.json" ]; then
    MODE=$($JQ --raw-output .mode "${SCRIPT_DIR}/../.changeset/pre.json")
    
    if [ "$MODE" == "pre" ]; then
        TAG=$(JQ --raw-output .tag "${SCRIPT_DIR}/../.changeset/pre.json")
    else
        echo "Invalid mode for releasing: $MODE"
        exit 100
    fi
fi

echo "Publishing with tag: $TAG"

pnpm run prePublish && pnpm publish --no-git-checks -r --report-summary --tag "$TAG"
