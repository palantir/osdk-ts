/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { promises as fs } from "fs";
import * as path from "path";

/**
 * Creates a folder named `.jemma` in the specified directory path
 * and writes the necessary scripts to it. If the `.jemma` folder already exists,
 * only updates the `setting.sh` file.
 *
 * @param targetPath - The path where the `.jemma` folder should be created.
 * @returns A promise that resolves to a boolean indicating success.
 */
export async function generateJemmaFolderWithContent(
  targetPath: string,
): Promise<boolean> {
  const jemmaPath = path.join(targetPath, ".jemma");

  try {
    const jemmaExists = await directoryExists(jemmaPath);

    if (!jemmaExists) {
      // Create the directory and all scripts if it doesn't exist
      await fs.mkdir(jemmaPath, { recursive: true });
      await createDownloadNodeScript(jemmaPath);
      await createInstallNodeScript(jemmaPath);
    }

    // Always update the setting.sh script
    await createSettingScript(jemmaPath);

    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Checks if a directory exists.
 *
 * @param directory - The directory path to check.
 * @returns A promise that resolves to a boolean indicating if the directory exists.
 */
async function directoryExists(directory: string): Promise<boolean> {
  try {
    const stats = await fs.stat(directory);
    return stats.isDirectory();
  } catch (error) {
    return false;
  }
}

/**
 * Creates a Python script named `download-node.py` in the specified directory.
 *
 * @param directory - The directory where the script should be created.
 * @returns A promise that resolves to a boolean indicating success.
 */
async function createDownloadNodeScript(directory: string): Promise<boolean> {
  const scriptPath = path.join(directory, "download-node.py");
  const scriptContent = `#!/usr/bin/env python3
import os
import sys
import urllib.request

if __name__ == "__main__":
    url = sys.argv[1]
    filename = sys.argv[2]
    token = sys.argv[3]
    save_path = os.path.join(os.getcwd(), filename)

    request = urllib.request.Request(url, headers={"Authorization": f"Bearer {token}"})
    with urllib.request.urlopen(request) as response:
        with open(save_path, "wb") as out_file:
            out_file.write(response.read())
`;

  try {
    await fs.writeFile(scriptPath, scriptContent, { mode: 0o755 });
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Creates a Bash script named `install-node.sh` in the specified directory.
 *
 * @param directory - The directory where the script should be created.
 * @returns A promise that resolves to a boolean indicating success.
 */
async function createInstallNodeScript(directory: string): Promise<boolean> {
  const scriptPath = path.join(directory, "install-node.sh");
  const scriptContent = `#!/usr/bin/env bash
set -euo pipefail

script_dir=$( cd -- "$( dirname -- "\${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

# Format for https://nodejs.org/dist
os="unknown"
arch="unknown"
case "\$(uname -s)" in
    Linux*)               os="linux";;
    Darwin*)              os="darwin";;
    CYGWIN*|MINGW*|MSYS*) os="win";;
esac

case "\$(uname -m)" in
    aarch64|arm64) arch="arm64";;
    armv7l)        arch="armv7l";;
    ppc64le)       arch="ppc64le";;
    s390x)         arch="s390x";;
    x86_64)        arch="x64";;
esac

node_arch="\${os}-\${arch}"
echo "Detected platform: \${node_arch}"

mkdir -p .node-installation
pushd .node-installation

node_version=v\${NODE_INSTALLATION_VERSION}
base_url="\${NODE_DIST_URI%/}/\${node_version}"
filename="node-\${node_version}-\${node_arch}.tar.gz"
url="\${base_url}/\${filename}"

echo "Downloading nodejs from \${url}"
\$script_dir/download-node.py \$url \$filename \$FOUNDRY_TOKEN
echo "Download completed: \${filename}"

tar -xzf \${filename}
if [ \$? -ne 0 ]; then
    echo "Extracting archive failed"
    exit 1
fi
echo "Extracting archive completed"

echo "Setting up PATH"
install_dir="\$(pwd)/node-\${node_version}-\${node_arch}"
export PATH=\${install_dir}/bin:\$PATH
echo "Setting up PATH completed"

popd
`;

  try {
    await fs.writeFile(scriptPath, scriptContent, { mode: 0o755 });
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Creates a Bash script named `setting.sh` in the specified directory.
 *
 * @param directory - The directory where the script should be created.
 * @returns A promise that resolves to a boolean indicating success.
 */
async function createSettingScript(directory: string): Promise<boolean> {
  const scriptPath = path.join(directory, "settings.sh");
  const scriptContent = `#!/usr/bin/env bash
export NODE_INSTALLATION_VERSION=18.18.0
export REPOSITORY_RID={{REPOSITORY_RID}}
`;

  try {
    await fs.writeFile(scriptPath, scriptContent, { mode: 0o755 });
    return true;
  } catch (error) {
    return false;
  }
}
