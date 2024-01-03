function checkCommand() {
    local DARWIN_COMMAND="$1"
    local LINUX_COMMAND="$2"
    local DARWIN_ERROR="$3"

    local COMMAND_NAME="$LINUX_COMMAND"
    local ERROR_MESSAGE="Aborting"

    if [[ "$OSTYPE" == "darwin"* ]]; then
        COMMAND_NAME="$DARWIN_COMMAND"
        ERROR_MESSAGE="$DARWIN_ERROR"
    fi
    command -v "$COMMAND_NAME" || { echo >&2 "$COMMAND_NAME is required but not installed. $ERROR_MESSAGE."; exit 1; }
}
