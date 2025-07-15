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

import { safeGetEnvVar } from "../common/safeGetEnvVar.js";
import {
  getCodeWorkspacesFoundryToken,
  isCodeWorkspacesMode,
} from "./codeWorkspacesMode.js";

// User token environment variable name
const FOUNDRY_TOKEN = "FOUNDRY_TOKEN";

export function getFoundryToken(mode: string | undefined): string {
  if (isCodeWorkspacesMode(mode)) {
    return getCodeWorkspacesFoundryToken();
  }
  return safeGetEnvVar(
    process.env,
    FOUNDRY_TOKEN,
    "This value is required to run dev mode.",
  );
}
