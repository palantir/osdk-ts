import type { Osdk } from "@osdk/api";
import { useOsdkAction } from "@osdk/react";
import React from "react";
import type { StatusUpdate } from "../../generatedNoCheck2/index.js";
import { toggleStatusExclusion } from "../../generatedNoCheck2/index.js";
import styles from "./actions.module.css";

export interface ToggleExclusionButtonProps {
  statusUpdate: Osdk.Instance<StatusUpdate, "$allBaseProperties">;
}

/** Flips `isExcluded` on a StatusUpdate row. The action expects the new (flipped) value. */
export function ToggleExclusionButton(
  props: ToggleExclusionButtonProps,
): React.JSX.Element {
  const { statusUpdate } = props;
  const { applyAction, isPending } = useOsdkAction(toggleStatusExclusion);
  const currentlyExcluded = statusUpdate.isExcluded === true;

  const onClick = React.useCallback(() => {
    void applyAction({
      statusUpdate,
      isExcluded: !currentlyExcluded,
    });
  }, [applyAction, statusUpdate, currentlyExcluded]);

  return (
    <button
      type="button"
      className={styles.linkButton}
      onClick={onClick}
      disabled={isPending}
    >
      {currentlyExcluded ? "Include" : "Exclude"}
    </button>
  );
}
