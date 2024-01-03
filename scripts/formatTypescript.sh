source "$SCRIPT_DIR/checkCommand.sh"
SPONGE=$(checkCommand "sponge" "sponge" "Try 'brew install moreutils'")

function formatTypescript() {
    local OUT_DIR="$1"
    local PACKAGE_PATH="$2"

    echo "  - Fixing up generated typescript"
    while IFS= read -r -d '' -u 9
    do
        printf '/*\n *\n */\n\n' | cat - "$REPLY" | "$SPONGE" "$REPLY"
    done 9< <( find "$OUT_DIR" -type f -exec printf '%s\0' {} + )

    echo "  - Running lint-fix"
    (cd "$PACKAGE_PATH" && pnpm run fix-lint)
}
