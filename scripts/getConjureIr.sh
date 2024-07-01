#!/usr/bin/env bash

set -e

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

mkdir -p "${SCRIPT_DIR}/../tmp"

MAVEN_CONJURE_GROUP_ID="$1"
MAVEN_CONJURE_ARTIFACT_ID="$2"

if [[ -z "$MAVEN_CONJURE_BASE_PATH" ]]; then
  echo "Error: Must set \$MAVEN_CONJURE_BASE_PATH"
  exit 1;
fi

CURRENT_VERSION=$( wget -q -O - "${MAVEN_CONJURE_BASE_PATH}/$(echo "$MAVEN_CONJURE_GROUP_ID" | sed 's/\./\//g')/${MAVEN_CONJURE_ARTIFACT_ID}/maven-metadata.xml" | \
  yq -p xml -r '.metadata.versioning.release' )

echo "getting ${MAVEN_CONJURE_BASE_PATH}/$(echo "$MAVEN_CONJURE_GROUP_ID" | sed 's/\./\//g')/${MAVEN_CONJURE_ARTIFACT_ID}/${CURRENT_VERSION}/${MAVEN_CONJURE_ARTIFACT_ID}-${CURRENT_VERSION}.conjure.json"

wget -q -O - "${MAVEN_CONJURE_BASE_PATH}/$(echo "$MAVEN_CONJURE_GROUP_ID" | sed 's/\./\//g')/${MAVEN_CONJURE_ARTIFACT_ID}/${CURRENT_VERSION}/${MAVEN_CONJURE_ARTIFACT_ID}-${CURRENT_VERSION}.conjure.json" > "${SCRIPT_DIR}/../tmp/${MAVEN_CONJURE_ARTIFACT_ID}.conjure.json"

