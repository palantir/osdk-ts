#!/usr/bin/env bash
#
# Refuses a fork pull request that touches install-time or CI configuration.
#
# Either would run attacker-controlled code with our credentials: install-time
# config executes during `pnpm install`, and a CI config change rewrites the
# pipeline that is about to run. A maintainer can accept the risk after reading
# the diff by applying the bypass label.
#
# Mirrors the fork-guard job in .github/workflows/ci.yml.

set -euo pipefail

BYPASS_LABEL="${BYPASS_LABEL:-safe-to-test}"
REPO="${CIRCLE_PROJECT_USERNAME:-}/${CIRCLE_PROJECT_REPONAME:-}"

pr_number="${CIRCLE_PULL_REQUEST##*/}"

# Maintainer override. Unlike the Actions workflow, which reads labels straight
# off the webhook payload, we have to ask GitHub — and fork builds get no token,
# so treat an unanswerable question as "no bypass" rather than as consent.
if [[ "$pr_number" =~ ^[0-9]+$ ]] && [ -n "${GITHUB_TOKEN:-}" ]; then
  labels="$(
    curl --silent --show-error \
      --header "Authorization: Bearer $GITHUB_TOKEN" \
      --header "Accept: application/vnd.github+json" \
      "https://api.github.com/repos/$REPO/issues/$pr_number/labels" \
      | node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>{try{const l=JSON.parse(s);if(Array.isArray(l))console.log(l.map(x=>x.name).join("\n"))}catch{}})'
  )"
  if printf '%s\n' "$labels" | grep -qxF "$BYPASS_LABEL"; then
    echo "Bypass label '$BYPASS_LABEL' is set; skipping the sensitive-paths check."
    exit 0
  fi
fi

if ! changed="$("$(dirname "$0")/changed-files.sh")"; then
  echo "Could not determine which files this PR changed; refusing to vouch for it." >&2
  exit 1
fi

echo "Changed files:"
echo "$changed"
echo "---"

violations=()

while IFS= read -r f; do
  [ -n "$f" ] || continue
  case "$f" in
    .npmrc | pnpm-workspace.yaml)
      violations+=("$f (install-time config)")
      ;;
    .github/workflows/*)
      violations+=("$f (CI workflow)")
      ;;
    .circleci/*)
      violations+=("$f (CI config)")
      ;;
  esac
done <<<"$changed"

# A lockfile edit with no manifest edit to justify it is the classic
# dependency-substitution signal.
if printf '%s\n' "$changed" | grep -qx "pnpm-lock.yaml"; then
  if ! printf '%s\n' "$changed" | grep -q "package.json$"; then
    violations+=("pnpm-lock.yaml changed without any package.json change")
  fi
fi

# The root package.json's `pnpm` field carries overrides and
# onlyBuiltDependencies, both of which change what executes on install.
if printf '%s\n' "$changed" | grep -qx "package.json"; then
  base="$(git merge-base HEAD "origin/${BASE_BRANCH:-main}")"
  base_pnpm="$(git show "$base:package.json" | node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>console.log(JSON.stringify(JSON.parse(s).pnpm??{})))')"
  head_pnpm="$(git show "HEAD:package.json" | node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>console.log(JSON.stringify(JSON.parse(s).pnpm??{})))')"
  if [ "$base_pnpm" != "$head_pnpm" ]; then
    violations+=("package.json 'pnpm' field changed (overrides/onlyBuiltDependencies)")
  fi
fi

if [ "${#violations[@]}" -gt 0 ]; then
  echo "This fork PR modifies install-time or CI configuration." >&2
  echo "Maintainer review required. Apply the '$BYPASS_LABEL' label to bypass after review." >&2
  echo "" >&2
  echo "Violations:" >&2
  for v in "${violations[@]}"; do
    echo "  - $v" >&2
  done
  exit 1
fi

echo "No sensitive-path modifications detected."
