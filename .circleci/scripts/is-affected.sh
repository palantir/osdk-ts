#!/usr/bin/env bash
#
#   is-affected.sh <package>
#
# Exits 0 if <package>, or anything in its dependency closure, changed since the
# base commit. Exits 1 if nothing did.
#
# This asks turbo's package graph rather than matching paths, which matters:
# a change to @osdk/client can reach a story through imports, and no pattern
# over `packages/react-components*` would ever see it. The filter expression
# `<pkg>...[<ref>]` means "packages within <pkg> and its dependencies that
# changed since <ref>", so a non-empty result is the signal.
#
# Fails open (exit 0) when the base commit is unknown — running work we did not
# need to is much cheaper than skipping work we did.

set -uo pipefail

pkg="${1:?usage: is-affected.sh <package>}"
here="$(dirname "$0")"

if ! base="$("$here/base-ref.sh")"; then
  echo "Base commit unknown; treating $pkg as affected."
  exit 0
fi

# `packages` in the dry-run output reflects the filter selection and is
# populated whether or not the selected packages define the named task.
# turbo prints a banner before the JSON, hence the seek to the first brace.
selected="$(
  pnpm exec turbo run test --filter="$pkg...[$base]" --dry=json 2>/dev/null \
    | node -e '
        let s = "";
        process.stdin.on("data", (d) => s += d).on("end", () => {
          const start = s.indexOf("{");
          if (start < 0) { process.exit(3); }
          try {
            const out = JSON.parse(s.slice(start));
            process.stdout.write((out.packages ?? []).join("\n"));
          } catch { process.exit(3); }
        });
      '
)"
status=$?

# Any failure at all — turbo erroring, unparseable output — means we do not
# know, and "do not know" has to mean "run it".
if [ "$status" -ne 0 ]; then
  echo "Could not determine the affected set (exit $status); treating $pkg as affected."
  exit 0
fi

if [ -z "$selected" ]; then
  echo "Nothing in $pkg's dependency graph changed since $base."
  exit 1
fi

echo "Changed within $pkg's dependency graph since $base:"
while IFS= read -r changed; do
  echo "  $changed"
done <<<"$selected"
exit 0
