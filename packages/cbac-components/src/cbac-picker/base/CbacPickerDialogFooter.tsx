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

import { ActionButton, Tooltip } from "@osdk/react-components/primitives";
import React from "react";
import styles from "./CbacPickerDialogFooter.module.css";

interface CbacPickerDialogFooterProps {
  onCancel: () => void;
  onConfirm: () => void;
  submitDisabledReason?: string;
}

export function CbacPickerDialogFooter({
  onCancel,
  onConfirm,
  submitDisabledReason,
}: CbacPickerDialogFooterProps): React.ReactElement {
  const isSubmitDisabled = submitDisabledReason != null;

  const submitButton = (
    <ActionButton
      variant="primary"
      onClick={onConfirm}
      disabled={isSubmitDisabled}
    >
      Set classification
    </ActionButton>
  );

  return (
    <>
      <ActionButton variant="secondary" onClick={onCancel}>
        Cancel
      </ActionButton>
      {isSubmitDisabled ? (
        <Tooltip.Root>
          <Tooltip.Trigger
            render={<span className={styles.tooltipTriggerWrapper} />}
          >
            {submitButton}
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Positioner side="top">
              <Tooltip.Popup>
                {submitDisabledReason}
                <Tooltip.Arrow />
              </Tooltip.Popup>
            </Tooltip.Positioner>
          </Tooltip.Portal>
        </Tooltip.Root>
      ) : (
        submitButton
      )}
    </>
  );
}
