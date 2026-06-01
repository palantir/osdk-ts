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
