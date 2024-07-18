#!/usr/bin/env bash

set -e

find . \( -path build/cjs -or -path build/esm -or -path build/browser \) -type f \( -name '*.js' -or -name '*.js.map' -or -name '*.cjs' -or -name '*.cjs.map' \) -delete \
    && pnpm exec tsup