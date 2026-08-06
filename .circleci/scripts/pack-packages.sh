#!/usr/bin/env bash
#
# Pack every publishable workspace package into a directory of .tgz files.
# CircleCI stores that directory as job artifacts, so a consumer can smoketest an
# unreleased change by pointing `pnpm.overrides` at a downloaded tarball with the
# `file:` protocol, rather than waiting for a release.
#
# Packs at the CURRENT versions on purpose: nothing runs `changeset version`
# first. Each tarball's dependency ranges then still point at versions that
# exist on npm, so a consumer overrides only the packages they actually changed.
# Packing after a version bump would leave every workspace dependency pointing
# at an unpublished version and force an override for all ~47. That is also why
# this cannot be folded into the `e2e` job, which versions before it publishes.
#
# Private packages are skipped, which is the same set `pnpm publish -r` skips.
#
# Usage: pack-packages.sh [output-dir]

set -euo pipefail

out="${1:-artifacts}"
mkdir -p "$out"
out="$(cd "$out" && pwd)"

list="$(mktemp)"
trap 'rm -f "$list"' EXIT
pnpm -r list --depth -1 --json > "$list"

packed=0
broken=0

while IFS=$'\t' read -r name version path; do
  # The `files` field of every publishable package ships build/{esm,cjs,…}, so a
  # missing build directory means the tarball would be an empty shell. Fail
  # loudly rather than publish-shaped garbage.
  if [ ! -d "$path/build" ]; then
    echo "  MISSING BUILD  $name@$version" >&2
    broken=$((broken + 1))
    continue
  fi

  if ( cd "$path" && pnpm pack --pack-destination "$out" >/dev/null ); then
    packed=$((packed + 1))
  else
    echo "  PACK FAILED    $name@$version" >&2
    broken=$((broken + 1))
  fi
done < <(node -e '
  const list = JSON.parse(require("fs").readFileSync(process.argv[1], "utf8"));
  for (const p of list) {
    if (p.private || !p.name || !p.version) continue;
    process.stdout.write(p.name + "\t" + p.version + "\t" + p.path + "\n");
  }
' "$list")

echo "Packed $packed package(s) into $out"
du -sh "$out" | awk '{print "Total artifact size: " $1}'

if [ "$broken" -gt 0 ]; then
  echo "$broken package(s) could not be packed; see above." >&2
  echo "If these are 'MISSING BUILD', transpile did not run before this step." >&2
  exit 1
fi
