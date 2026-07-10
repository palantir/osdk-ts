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

import type { Osdk } from "@osdk/api";
import { useOsdkAction } from "@osdk/react";
import React from "react";

import type { StatusUpdate } from "../../generatedNoCheck2/index.js";
import { toggleStatusExclusion } from "../../generatedNoCheck2/index.js";
import { ErrorBanner } from "../common/index.js";

import styles from "./actions.module.css";

export interface ToggleExclusionButtonProps {
  statusUpdate: Osdk.Instance<StatusUpdate, "$allBaseProperties">;
}

/** Flips `isExcluded` on a StatusUpdate row. The action expects the new (flipped) value. */
export function ToggleExclusionButton(
  props: ToggleExclusionButtonProps,
): React.JSX.Element {
  const { statusUpdate } = props;
  const { applyAction, isPending, error } = useOsdkAction(
    toggleStatusExclusion,
  );
  const currentlyExcluded = statusUpdate.isExcluded === true;

  const onClick = React.useCallback(() => {
    void applyAction({
      statusUpdate,
      isExcluded: !currentlyExcluded,
    });
  }, [applyAction, statusUpdate, currentlyExcluded]);

  const errorMessage = error?.actionValidation?.message
    ?? (error != null ? "Failed to toggle exclusion." : undefined);

  return (
    <>
      <button
        type="button"
        className={styles.linkButton}
        onClick={onClick}
        disabled={isPending}
      >
        {currentlyExcluded ? "Include" : "Exclude"}
      </button>
      <ErrorBanner message={errorMessage} context="Toggle exclusion" />
    </>
  );
}
