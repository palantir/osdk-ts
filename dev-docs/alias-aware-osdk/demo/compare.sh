#!/usr/bin/env bash
# Runs the same driver twice -- same code, same command, only ALIASES_JSON_FILE differs --
# and prints the two wire-name digests side by side.
#
# Two processes rather than one, deliberately: `$ontologyRid` is resolved eagerly at module
# init and the registry is module-level, so one process can only ever observe one alias
# file. A re-run is the only honest way to show a before and an after.
set -euo pipefail

cd "$(dirname "$0")"

left=${1:-aliases.identity.json}
right=${2:-aliases.remapped.json}

# blank lines would render as "(null)" once column(1) pads the shorter side
ALIASES_JSON_FILE=$left node ./trace.mjs | grep -v '^$' >/tmp/osdk-alias-left.txt
ALIASES_JSON_FILE=$right node ./trace.mjs | grep -v '^$' >/tmp/osdk-alias-right.txt

paste -d'|' /tmp/osdk-alias-left.txt /tmp/osdk-alias-right.txt \
  | column -t -s'|'
