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

import { useOsdkAction } from "@osdk/react";
import React from "react";

import type { Assignment } from "../../generatedNoCheck2/index.js";
import { endAssignment } from "../../generatedNoCheck2/index.js";
import { ErrorBanner } from "../common/index.js";

import styles from "./actions.module.css";

export interface EndAssignmentButtonProps {
  assignment: Assignment.OsdkInstance;
}

/** Ends an assignment (sets status=Ended + endDate). Disabled when already ended. */
export function EndAssignmentButton(
  props: EndAssignmentButtonProps,
): React.JSX.Element {
  const { assignment } = props;
  const { applyAction, isPending, error } = useOsdkAction(endAssignment);
  const alreadyEnded = assignment.assignmentStatus === "Ended";

  const onClick = React.useCallback(() => {
    const endDate = new Date().toISOString().slice(0, 10);
    void applyAction({ assignment, endDate });
  }, [applyAction, assignment]);

  return (
    <div className={styles.actionBlock}>
      <button
        type="button"
        className={styles.dangerButton}
        onClick={onClick}
        disabled={isPending || alreadyEnded}
      >
        {alreadyEnded ? "Assignment ended" : "End assignment"}
      </button>
      <ErrorBanner
        message={error?.actionValidation?.message}
        context="End assignment"
      />
    </div>
  );
}
