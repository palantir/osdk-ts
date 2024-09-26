#!/usr/bin/env bash

set -eu

# Define the necessary directories and files
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
mkdir -p "${SCRIPT_DIR}/../tmp"

BUILD_DIR="${SCRIPT_DIR}/../tmp"
DOWNLOAD_DIR="${BUILD_DIR}/api-gateway-bundle"
EXTRACT_DIR="${BUILD_DIR}/api-gateway-ir"

MAVEN_CONJURE_GROUP_ID="com.palantir.foundry.api"
MAVEN_CONJURE_ARTIFACT_ID="api-gateway-rosetta-bundle"
MAVEN_REPO_PATH="${MAVEN_DIST_RELEASE}/$(echo "$MAVEN_CONJURE_GROUP_ID" | sed 's/\./\//g')/${MAVEN_CONJURE_ARTIFACT_ID}"

API_GATEWAY_VERSION=$( wget -q -O - "${MAVEN_REPO_PATH}/maven-metadata.xml" | \
    yq -p xml -r '.metadata.versioning.release' )

echo "GATEWAY VERSION: ${API_GATEWAY_VERSION}"

mkdir -p "${DOWNLOAD_DIR}"
wget -P "${DOWNLOAD_DIR}"  "${MAVEN_REPO_PATH}/${API_GATEWAY_VERSION}/${MAVEN_CONJURE_ARTIFACT_ID}-${API_GATEWAY_VERSION}.sls.tgz"

mkdir -p "${EXTRACT_DIR}"
tar -xf "${DOWNLOAD_DIR}/api-gateway-rosetta-bundle-${API_GATEWAY_VERSION}.sls.tgz" -C "${EXTRACT_DIR}" --strip-components=4 "api-gateway-rosetta-bundle-${API_GATEWAY_VERSION}/asset/palantir/ir-v2/openapi-ir.json"
tar -xf "${DOWNLOAD_DIR}/api-gateway-rosetta-bundle-${API_GATEWAY_VERSION}.sls.tgz" -C "${EXTRACT_DIR}" --strip-components=4 "api-gateway-rosetta-bundle-${API_GATEWAY_VERSION}/asset/palantir/ir-v2/v2.json"
tar -xf "${DOWNLOAD_DIR}/api-gateway-rosetta-bundle-${API_GATEWAY_VERSION}.sls.tgz" -C "${EXTRACT_DIR}" --strip-components=2 "api-gateway-rosetta-bundle-${API_GATEWAY_VERSION}/deployment/manifest.yml"

jq -s '[.[] | to_entries] | flatten | reduce .[] as $dot ({}; .[$dot.key] += $dot.value)' tmp/api-gateway-ir/*.json > tmp/api-gateway-ir/combined.json