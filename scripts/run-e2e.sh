#!/bin/bash

# Execute like: runWithPropertiesTest --no-transpile

set -e

GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
NC='\033[0m'

RUN_TRANSPILE=true

TEST_NAME=""

while [[ "$#" -gt 0 ]]; do
    case $1 in
        --no-transpile)
            RUN_TRANSPILE=false
            shift
            ;;
        -*)
            echo -e "${RED}Unknown option: $1${NC}"
            ;;
        *)
            if [[ -z "$TEST_NAME" ]]; then
                TEST_NAME="$1"
            else
                echo -e "${RED}Error: Multiple test file names provided.${NC}"
            fi
            shift
            ;;
    esac
done

if [[ -z "$TEST_NAME" ]]; then
    echo -e "${RED}Error: Test file name not provided.${NC}"
    usage
fi

TEST_DIR="packages/e2e.sandbox.catchall/build/esm"
FILEPATH="$TEST_NAME"

if [[ "$FILEPATH" != *.js ]]; then
  FILEPATH="${FILEPATH}.js"
fi

TEST_PATH="$TEST_DIR/$FILEPATH"

if [[ ! -f "$TEST_PATH" ]]; then
    echo -e "${RED}Error${NC}: Test file '$FILEPATH' does not exist in '$TEST_DIR'."
    exit 1
fi

if [[ "$RUN_TRANSPILE" == true ]]; then
    pnpm turbo transpile 
else
    echo -e "${YELLOW}Skipping 'pnpm turbo transpile'${NC}"
fi

echo -e "${GREEN}Running test${NC}: $TEST_PATH"
node "$TEST_PATH"