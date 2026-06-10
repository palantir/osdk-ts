#!/usr/bin/env bash
#
# Fails if any publishable workspace package has never been published to npm.
#
# A "publishable" package is any workspace package.json that does NOT set
# `"private": true`. When such a package has never been published before,
# the GitHub-hosted Release job cannot create it (npm requires a human to
# establish a new package name). Use `scripts/publish-placeholder.sh` to
# publish a 0.0.0 placeholder before merging the PR that introduces the
# package.
set -euo pipefail

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
REPO_ROOT="${SCRIPT_DIR}/.."

cd "${REPO_ROOT}"

# Source of truth: pnpm reads pnpm-workspace.yaml and reports every workspace
# package with its `private` flag. `--depth -1` skips dependency resolution
# so this runs in well under a second and does not require `pnpm install`.
declare -a MISSING=()
declare -a CHECKED=()

if ! command -v pnpm >/dev/null 2>&1; then
  echo "::error::pnpm is required on PATH (got: not found)" >&2
  exit 2
fi

while IFS= read -r name; do
  CHECKED+=("${name}")
done < <(pnpm m ls --depth -1 --json | jq -r '.[] | select(.private != true) | select(.name) | .name')

if [[ ${#CHECKED[@]} -eq 0 ]]; then
  echo "No publishable packages found. Are workspace globs out of date?" >&2
  exit 1
fi

echo "Checking ${#CHECKED[@]} publishable packages against the npm registry..."

# Query the registry directly so we don't need `npm` configured. A 404 means
# the package name has never been claimed. Any other non-200 is treated as a
# transient failure and surfaced loudly.
#
# All requests are HEADs sent in one curl invocation so a single TCP+TLS
# connection (HTTP/2 multiplexed) is reused across packages. Status codes
# come back as one line per package, in the same order as CHECKED.
curl_config=""
for i in "${!CHECKED[@]}"; do
  name="${CHECKED[$i]}"
  encoded="${name//\//%2f}"
  if [[ ${i} -gt 0 ]]; then
    curl_config+=$'next\n'
  fi
  curl_config+=$'url = "https://registry.npmjs.org/'"${encoded}"$'"\noutput = "/dev/null"\nhead\nconnect-timeout = "10"\nmax-time = "60"\nwrite-out = "%{http_code}\\n"\n'
done

STATUSES=()
while IFS= read -r line; do
  STATUSES+=("${line}")
done < <(printf '%s' "${curl_config}" | curl -sS -K -)

if [[ ${#STATUSES[@]} -ne ${#CHECKED[@]} ]]; then
  echo "::error::Expected ${#CHECKED[@]} status codes from curl, got ${#STATUSES[@]}" >&2
  exit 2
fi

for i in "${!CHECKED[@]}"; do
  name="${CHECKED[$i]}"
  status="${STATUSES[$i]}"
  case "${status}" in
    200)
      ;;
    404)
      MISSING+=("${name}")
      ;;
    *)
      echo "::error::Unexpected HTTP ${status} from registry for ${name}" >&2
      exit 2
      ;;
  esac
done

if [[ ${#MISSING[@]} -gt 0 ]]; then
  echo
  echo "::error::The following publishable packages have never been published to npm:" >&2
  for name in "${MISSING[@]}"; do
    echo "  - ${name}" >&2
  done
  echo >&2
  cat <<'EOF' >&2
The Release workflow cannot create new npm package names on its own. A
human with publish rights must claim each name by publishing a 0.0.0
placeholder, e.g.:

    ./scripts/publish-placeholder.sh @osdk/the-new-package

Run that for every missing package, then re-run this check.
EOF
  exit 1
fi

echo "All ${#CHECKED[@]} publishable packages are already known to npm."
