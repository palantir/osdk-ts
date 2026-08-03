#!/usr/bin/env bash
#
# Publishes the prebuilt Storybook to Chromatic and reports back on the PR.
#
# The Storybook is built once (the `build-storybook` job) and handed to this job
# through the CircleCI workspace, so this never rebuilds it. Chromatic is given
# the prebuilt directory plus the TurboSnap stats file, which lets it snapshot
# only the stories a commit can actually reach.

set -uo pipefail

# Pinned rather than depended on: chromatic is a CI-only CLI that is never
# imported by source, and adding it to package.json forces pnpm to re-resolve
# enough of the tree to drag unrelated version bumps into the lockfile.
CHROMATIC_CLI_VERSION="18.1.0"

STORYBOOK_DIR="packages/react-components-storybook"
BUILD_DIR="$STORYBOOK_DIR/storybook-static"
STATS_FILE="$BUILD_DIR/preview-stats.json"
OUTPUT_FILE="/tmp/chromatic-output.json"
COMMENT_FILE="/tmp/chromatic-comment.md"
MARKER="## Chromatic"

# Forked PRs do not receive the project token. Skipping cleanly (rather than
# failing) keeps the check green for outside contributors, who get the
# storybook-static artifact from the build-storybook job instead.
if [ -z "${CHROMATIC_PROJECT_TOKEN:-}" ]; then
  echo "Skipping Chromatic (no CHROMATIC_PROJECT_TOKEN — likely a fork build)."
  exit 0
fi

if [ ! -d "$BUILD_DIR" ]; then
  echo "Expected a prebuilt Storybook at $BUILD_DIR but found none." >&2
  echo "The build-storybook job should have persisted it to the workspace." >&2
  exit 1
fi

# Chromatic only *warns* when the stats file is absent and then silently
# snapshots everything, which quietly turns TurboSnap off and multiplies the
# snapshot bill. Treat it as a hard error so the regression is visible.
if [ ! -f "$STATS_FILE" ]; then
  echo "TurboSnap stats file missing: $STATS_FILE" >&2
  echo "Storybook must be built with --stats-json (see the build-stats script)." >&2
  exit 1
fi

args=(
  --storybook-build-dir "$BUILD_DIR"
  # Chromatic runs from the repo root but Storybook is built one level down.
  # Without this, TurboSnap cannot map changed git paths onto stats entries.
  --storybook-base-dir "$STORYBOOK_DIR"
  --only-changed
  --trace-changed
  --zip
  --output-file "$OUTPUT_FILE"
  # Automated branches have no reviewer to look at visual diffs.
  --skip "@(changeset-release|renovate|dependabot)/**"
)

if [ "${CIRCLE_BRANCH:-}" = "main" ]; then
  # main *is* the baseline: accept whatever landed so the next PR diffs against
  # the current state of the world rather than against a stale accepted build.
  args+=(--auto-accept-changes)
else
  # Visual changes are a review signal, not a build break — Chromatic's own
  # "UI Tests" check on the PR carries that. Genuinely broken stories still
  # fail this job, because Chromatic exits non-zero on component errors
  # regardless of this flag.
  args+=(--exit-zero-on-changes)
fi

echo "Running chromatic@$CHROMATIC_CLI_VERSION ${args[*]}"
pnpm dlx "chromatic@$CHROMATIC_CLI_VERSION" "${args[@]}"
chromatic_exit=$?

if [ ! -f "$OUTPUT_FILE" ]; then
  echo "Chromatic produced no output file; skipping the PR comment."
  exit "$chromatic_exit"
fi

node "$(dirname "$0")/chromatic-comment.mjs" "$OUTPUT_FILE" "$MARKER" > "$COMMENT_FILE" \
  || echo "Could not render the Chromatic comment (non-fatal)."

"$(dirname "$0")/pr-comment.sh" "$MARKER" "$COMMENT_FILE"

exit "$chromatic_exit"
