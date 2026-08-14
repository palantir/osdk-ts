#!/usr/bin/env bash
#
#   collect-test-results.sh <destination>
#
# Gathers each package's JUnit report into one directory for store_test_results,
# which takes a single path rather than a glob. Reports are renamed per package
# because they are all called junit.xml and would otherwise collide here.
#
# Classnames are already package-prefixed by the `classnameTemplate` in each
# vitest config, so nothing is rewritten on the way through.

set -euo pipefail

dest="${1:?usage: collect-test-results.sh <destination>}"
mkdir -p "$dest"

count=0
skipped=0
while IFS= read -r report; do
  pkg="$(basename "$(dirname "$(dirname "$report")")")"
  # A run cut short leaves no closing tag, and store_test_results fails on it.
  if ! tail -c 400 "$report" | grep -q '</testsuites>'; then
    echo "Skipping truncated report (no closing tag): $report" >&2
    skipped=$((skipped + 1))
    continue
  fi
  cp "$report" "$dest/$pkg.xml"
  count=$((count + 1))
done < <(find packages -path '*/reports/junit.xml' -type f 2>/dev/null | sort)

if [ "$skipped" -gt 0 ]; then
  echo "Skipped $skipped truncated report(s); their suites were cut short." >&2
fi

echo "Collected $count JUnit report(s) into $dest."

# Not an error: a container that halted early or ran no matching packages has
# nothing to collect.
if [ "$count" -eq 0 ]; then
  echo "No JUnit reports found — nothing to upload."
fi
