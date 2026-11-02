/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import React from "react";

import { ActionButton } from "../../base-components/action-button/ActionButton.js";
import type { AuthStatus } from "../hooks/useWorkshopAuth.js";

import styles from "./WorkshopModuleSignIn.module.css";

interface WorkshopModuleSignInProps {
  status: Exclude<AuthStatus, "ready">;
  onSignIn: () => void;
  moduleUrl: string;
}

const AUTH_MESSAGES = {
  checking: "Loading Workshop…",
  required: "Sign in to Foundry to view this module.",
  signingIn: "Complete sign-in in the popup window.",
  unavailable:
    "Unable to open Workshop here. Try signing in again or open it in Foundry.",
};

export function WorkshopModuleSignIn({
  status,
  onSignIn,
  moduleUrl,
}: WorkshopModuleSignInProps): React.ReactElement {
  const newTabUrl = new URL(moduleUrl);
  newTabUrl.searchParams.delete("embedded");

  return (
    <div className={styles.auth}>
      <output className={styles.message}>{AUTH_MESSAGES[status]}</output>
      {status !== "checking" && (
        <div className={styles.actions}>
          <ActionButton onClick={onSignIn} variant="primary">
            {status === "signingIn" ? "Open sign-in" : "Sign in to Foundry"}
          </ActionButton>
          <a href={newTabUrl.href} target="_blank" rel="noopener noreferrer">
            Open in Foundry
          </a>
        </div>
      )}
    </div>
  );
}
