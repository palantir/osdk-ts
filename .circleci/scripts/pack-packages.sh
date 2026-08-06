#!/usr/bin/env bash
#
# Pack every publishable workspace package into a directory of .tgz files, plus a
# manifest.json describing them. CircleCI stores that directory as job artifacts,
# so a consumer can smoketest an unreleased change by pointing `pnpm.overrides`
# at a downloaded tarball with the `file:` protocol, rather than waiting for a
# release.
#
# Packs at the CURRENT versions on purpose: nothing runs `changeset version`
# first. Each tarball's dependency ranges then still point at versions that
# exist on npm, so a consumer overrides only the packages they actually changed.
# Packing after a version bump would leave every workspace dependency pointing
# at an unpublished version and force an override for all of them. That is also
# why this cannot be folded into the `e2e` job, which versions before it
# publishes.
#
# Packs ALL publishable packages, deliberately. Choosing a subset is the client's
# job: it knows which dependencies it actually wants to override, and the
# manifest plus CircleCI's per-file artifact API let it download just those.
# Scoping here would risk the one tarball a consumer needs not existing.
#
# Private packages are skipped, which is the same set `pnpm publish -r` skips.
#
# Usage: pack-packages.sh [output-dir]

set -euo pipefail

out="${1:-artifacts}"
mkdir -p "$out"
out="$(cd "$out" && pwd)"

list="$(mktemp)"
packed_tsv="$(mktemp)"
trap 'rm -f "$list" "$packed_tsv"' EXIT

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

  # Pack into a per-package temp dir so exactly one tarball is produced and its
  # name needs no guessing. pnpm writes diagnostics to stdout, so parsing its
  # output for the filename is not reliable, and an mtime sort over a shared
  # directory would race.
  #
  # Recording the real filename is the point of the manifest. Deriving a package
  # name from a tarball name is ambiguous here: plenty of OSDK packages contain
  # hyphens (@osdk/generator-converters, @osdk/vite-plugin-oac), so a client
  # cannot split `osdk-generator-converters-1.2.3.tgz` back apart the way
  # wizard-prerelease does for Blueprint, where no name has one.
  stage="$(mktemp -d)"
  if ( cd "$path" && pnpm pack --pack-destination "$stage" >/dev/null 2>&1 ); then
    file="$(find "$stage" -maxdepth 1 -name '*.tgz' -print -quit)"
    if [ -z "$file" ]; then
      echo "  NO TARBALL     $name@$version" >&2
      broken=$((broken + 1))
    else
      mv "$file" "$out/"
      printf '%s\t%s\t%s\n' "$name" "$version" "$(basename "$file")" >> "$packed_tsv"
      packed=$((packed + 1))
    fi
  else
    echo "  PACK FAILED    $name@$version" >&2
    broken=$((broken + 1))
  fi
  rm -rf "$stage"
done < <(node -e '
  const list = JSON.parse(require("fs").readFileSync(process.argv[1], "utf8"));
  for (const p of list) {
    if (p.private || !p.name || !p.version) continue;
    process.stdout.write(p.name + "\t" + p.version + "\t" + p.path + "\n");
  }
' "$list")

# shellcheck disable=SC2016  # the ${...} below are JS template literals; bash
# must not expand them.
node -e '
  const fs = require("fs");
  const [tsv, dest] = process.argv.slice(1);
  const packages = fs.readFileSync(tsv, "utf8")
    .split("\n").filter(Boolean)
    .map(line => {
      const [name, version, file] = line.split("\t");
      return { name, version, file };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
  const env = k => process.env[k] || null;
  fs.writeFileSync(dest, JSON.stringify({
    schemaVersion: 1,
    // Provenance, so a client can report exactly what it stashed.
    source: {
      repository: env("CIRCLE_PROJECT_USERNAME") && env("CIRCLE_PROJECT_REPONAME")
        ? `${env("CIRCLE_PROJECT_USERNAME")}/${env("CIRCLE_PROJECT_REPONAME")}`
        : null,
      branch: env("CIRCLE_BRANCH"),
      sha: env("CIRCLE_SHA1"),
      pullRequest: env("CIRCLE_PULL_REQUEST"),
      buildNumber: env("CIRCLE_BUILD_NUM"),
      workflowId: env("CIRCLE_WORKFLOW_ID"),
    },
    packages,
  }, null, 2) + "\n");
' "$packed_tsv" "$out/manifest.json"

echo "Packed $packed package(s) into $out"
echo "Wrote $out/manifest.json"
du -sh "$out" | awk '{print "Total artifact size: " $1}'

if [ "$broken" -gt 0 ]; then
  echo "$broken package(s) could not be packed; see above." >&2
  echo "If these are 'MISSING BUILD', transpile did not run before this step." >&2
  exit 1
fi
