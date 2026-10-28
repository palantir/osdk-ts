#!/usr/bin/env bash
#
# Upserts a "sticky" comment on the pull request for this build.
#
#   pr-comment.sh <marker> <body-file>
#
# <marker> is a stable string that must be the first line of the body (e.g.
# "## size-limit report"). It is how we find a previous comment to edit instead
# of spamming the PR with one comment per push.
#
# Requires a GitHub App with `pull-requests: write` (GITHUB_APP_ID,
# GITHUB_APP_PRIVATE_KEY as a base64-encoded .pem, GITHUB_APP_INSTALLATION_ID).
# Every failure mode here is non-fatal: a CI job must not go red because we
# could not decorate a PR.

set -uo pipefail

MARKER="${1:?usage: pr-comment.sh <marker> <body-file>}"
BODY_FILE="${2:?usage: pr-comment.sh <marker> <body-file>}"

REPO="${CIRCLE_PROJECT_USERNAME:-}/${CIRCLE_PROJECT_REPONAME:-}"
API="https://api.github.com"

# Authenticates as a GitHub App: it is scoped to this repo and its installation
# tokens expire after an hour.
token=""
if [ -n "${GITHUB_APP_ID:-}" ] && [ -n "${GITHUB_APP_PRIVATE_KEY:-}" ] && [ -n "${GITHUB_APP_INSTALLATION_ID:-}" ]; then
  token="$(node "$(dirname "$0")/github-app-token.mjs")"
else
  echo "GITHUB_APP_ID, GITHUB_APP_PRIVATE_KEY and GITHUB_APP_INSTALLATION_ID must all be set."
fi

if [ -z "$token" ]; then
  echo "No GitHub App token; skipping PR comment. Body would have been:"
  cat "$BODY_FILE"
  exit 0
fi

if [ ! -s "$BODY_FILE" ]; then
  echo "Comment body '$BODY_FILE' is missing or empty; nothing to post."
  exit 0
fi

gh_api() {
  local method="$1" path="$2"
  shift 2
  curl --silent --show-error --fail-with-body \
    --request "$method" \
    --header "Authorization: Bearer $token" \
    --header "Accept: application/vnd.github+json" \
    --header "X-GitHub-Api-Version: 2022-11-28" \
    "$@" \
    "$API$path"
}

# CIRCLE_PULL_REQUEST is a full PR URL, but CircleCI only populates it reliably
# for fork builds, so fall back to asking GitHub which PR has this head branch.
pr_number="${CIRCLE_PULL_REQUEST##*/}"
if ! [[ "$pr_number" =~ ^[0-9]+$ ]]; then
  pr_number="$(
    gh_api GET "/repos/$REPO/pulls?state=open&head=$CIRCLE_PROJECT_USERNAME:${CIRCLE_BRANCH:-}" \
      | node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>{try{const p=JSON.parse(s);if(Array.isArray(p)&&p[0])process.stdout.write(String(p[0].number))}catch{}})'
  )"
fi

if ! [[ "$pr_number" =~ ^[0-9]+$ ]]; then
  echo "No open pull request found for branch '${CIRCLE_BRANCH:-}'; skipping comment."
  exit 0
fi

# Build the JSON payload with node so the body is escaped correctly regardless
# of what markdown/backticks it contains.
payload="$(node -e '
  const fs = require("fs");
  process.stdout.write(JSON.stringify({ body: fs.readFileSync(process.argv[1], "utf8") }));
' "$BODY_FILE")"

# Only our own App's comments: we cannot edit ones posted by other bots that
# happen to share the marker (e.g. the GitHub Actions size-limit job).
existing="$(
  gh_api GET "/repos/$REPO/issues/$pr_number/comments?per_page=100" \
    | MARKER="$MARKER" node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>{try{const c=JSON.parse(s);const m=c.find(x=>String(x.performed_via_github_app?.id)===process.env.GITHUB_APP_ID&&typeof x.body==="string"&&x.body.startsWith(process.env.MARKER));if(m)process.stdout.write(String(m.id))}catch{}})'
)"

if [[ "$existing" =~ ^[0-9]+$ ]]; then
  echo "Updating existing comment $existing on PR #$pr_number."
  gh_api PATCH "/repos/$REPO/issues/comments/$existing" --data "$payload" >/dev/null \
    || echo "Failed to update PR comment (non-fatal)."
else
  echo "Creating a new comment on PR #$pr_number."
  gh_api POST "/repos/$REPO/issues/$pr_number/comments" --data "$payload" >/dev/null \
    || echo "Failed to create PR comment (non-fatal)."
fi
