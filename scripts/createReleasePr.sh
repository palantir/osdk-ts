#!/usr/bin/env bash
set -e

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

cd "${SCRIPT_DIR}/../"

if [[ $(git rev-parse --abbrev-ref HEAD | sed -E 's/^changeset-release\/.*$/ABORT/') == "ABORT" ]]; then
    echo "===== ABORTING ====="
    echo ""
    echo "Given you are already on a changeset branch, you almost certainly dont"
    echo "want to run a release from here".
    exit 1
fi

# generator needed by turbo codegen in postVersionCmd
pnpm exec turbo transpileEsm --filter "./packages/tool.release" --filter "@osdk/cli.cmd.typescript..."
node ./packages/tool.release/build/esm/index.js --repo palantir/osdk-ts
echo "WARNING: You are probably on the pr branch"
