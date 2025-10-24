#!/usr/bin/env bash
set -e

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

cd "${SCRIPT_DIR}/../"

echo "Converting minor changesets to patch..."

converted_count=0
for file in .changeset/*.md; do
  if grep -q ": minor" "$file" 2>/dev/null; then
    sed -i '' 's/: minor/: patch/g' "$file"
    echo "Converted: $file"
    ((converted_count++))
  fi
done

if [ $converted_count -eq 0 ]; then
  echo "No minor changesets found."
else
  echo "Converted $converted_count changeset(s) from minor to patch."
fi
