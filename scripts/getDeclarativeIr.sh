#!/usr/bin/env bash

set -euo pipefail

# Adapted from foundry-platform-typescript/scripts/getOpenApiIr.sh.
print_help() {
    printf '%s\n' \
        "Usage: $(basename "$0") [--api-gateway-version VERSION]" \
        "Downloads the declarative IR from the API Gateway Rosetta bundle into tmp/api-gateway-ir/." \
        "Requires MAVEN_DIST_RELEASE, curl, python3, and tar. Defaults to the latest Maven release."
}

API_GATEWAY_VERSION=""
while [[ $# -gt 0 ]]; do
    case "$1" in
        --api-gateway-version)
            API_GATEWAY_VERSION="${2:?Expected an API Gateway version}"
            shift 2
            ;;
        --help)
            print_help
            exit 0
            ;;
        *)
            printf 'Unknown option: %s\n' "$1" >&2
            print_help >&2
            exit 1
            ;;
    esac
done

: "${MAVEN_DIST_RELEASE:?Set MAVEN_DIST_RELEASE to the Maven release repository URL}"
SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)
DOWNLOAD_DIR="${SCRIPT_DIR}/../tmp/api-gateway-bundle"
EXTRACT_DIR="${SCRIPT_DIR}/../tmp/api-gateway-ir"
ARTIFACT_ID="api-gateway-rosetta-bundle"
REPO_PATH="${MAVEN_DIST_RELEASE%/}/com/palantir/foundry/api/${ARTIFACT_ID}"
mkdir -p "${DOWNLOAD_DIR}" "${EXTRACT_DIR}"

if [[ -z "${API_GATEWAY_VERSION}" ]]; then
    API_GATEWAY_VERSION=$(curl --fail --silent --show-error --location "${REPO_PATH}/maven-metadata.xml" | \
        python3 -c 'import sys, xml.etree.ElementTree as ET; print(ET.parse(sys.stdin).findtext("./versioning/release"))')
fi
printf 'API Gateway version: %s\n' "${API_GATEWAY_VERSION}"
BUNDLE="${ARTIFACT_ID}-${API_GATEWAY_VERSION}"
ARCHIVE="${DOWNLOAD_DIR}/${BUNDLE}.sls.tgz"
curl --fail --silent --show-error --location \
    "${REPO_PATH}/${API_GATEWAY_VERSION}/${BUNDLE}.sls.tgz" --output "${ARCHIVE}"
tar -xzf "${ARCHIVE}" -C "${EXTRACT_DIR}" --strip-components=4 \
    "${BUNDLE}/asset/palantir/ir-v2/omniapi-declarative-ir.json"
printf '%s\n' "${API_GATEWAY_VERSION}" > "${EXTRACT_DIR}/version.txt"
printf 'Declarative IR: %s/omniapi-declarative-ir.json\n' "${EXTRACT_DIR}"
