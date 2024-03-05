source "$SCRIPT_DIR/checkCommand.sh"
SPONGE=$(checkCommand "sponge" "sponge" "Try 'brew install moreutils'")

function formatTypescript() {
    local OUT_DIR="$1"
    local PACKAGE_PATH="$2"


    echo "  - Running lint-fix"
    (cd "$PACKAGE_PATH" && pnpm run fix-lint)
}
