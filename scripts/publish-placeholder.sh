#!/usr/bin/env bash
#
# Publishes an empty 0.0.0 placeholder for a brand-new @osdk/<name> package
# so that subsequent automated releases from GitHub can publish real versions
# under that name. The Release workflow cannot create new npm package names
# itself; a human with publish rights must establish the name first.
#
# Usage:
#   ./scripts/publish-placeholder.sh @osdk/the-new-package
#
# Requirements:
#   - Logged in to npm as a user with publish rights to the @osdk scope
#     (run `npm whoami` to confirm; `npm login` if not).
set -euo pipefail

if [[ $# -ne 1 ]]; then
  echo "Usage: $0 @osdk/<package-name>" >&2
  exit 64
fi

PACKAGE_NAME="$1"

if [[ "${PACKAGE_NAME}" != @osdk/* ]]; then
  echo "Refusing: package name must start with @osdk/ (got: ${PACKAGE_NAME})" >&2
  exit 64
fi

# Validate the remainder is a legal npm package name segment.
remainder="${PACKAGE_NAME#@osdk/}"
if [[ ! "${remainder}" =~ ^[a-z0-9][a-z0-9._-]*$ ]]; then
  echo "Refusing: '${remainder}' is not a valid npm package name segment" >&2
  exit 64
fi

# Bail early if the name is already taken, so we don't 403 partway through.
encoded="${PACKAGE_NAME//\//%2f}"
status=$(curl -sS -I --connect-timeout 10 --max-time 60 -o /dev/null -w '%{http_code}' "https://registry.npmjs.org/${encoded}") || status="000"
case "${status}" in
  404)
    ;;
  200)
    echo "Refusing: ${PACKAGE_NAME} already exists on npm. Nothing to do." >&2
    exit 0
    ;;
  *)
    echo "Unexpected HTTP ${status} from registry while probing ${PACKAGE_NAME}" >&2
    exit 2
    ;;
esac

tmp_dir=$(mktemp -d)
trap 'rm -rf "${tmp_dir}"' EXIT

cat > "${tmp_dir}/package.json" <<EOF
{
  "name": "${PACKAGE_NAME}",
  "version": "0.0.0"
}
EOF

echo "Publishing placeholder for ${PACKAGE_NAME} from ${tmp_dir}..."
(
  cd "${tmp_dir}"
  npm publish --access public
)

echo "Done. ${PACKAGE_NAME}@0.0.0 is now reserved on npm."
