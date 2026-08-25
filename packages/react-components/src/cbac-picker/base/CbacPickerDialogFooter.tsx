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

import { Button, Tooltip } from "@blueprintjs/core";
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
    <Button intent="primary" onClick={onConfirm} disabled={isSubmitDisabled}>
      Set classification
    </Button>
  );

  return (
    <>
      <Button onClick={onCancel}>Cancel</Button>
      {isSubmitDisabled ? (
        <Tooltip content={submitDisabledReason} placement="top">
          <span className={styles.tooltipTriggerWrapper}>{submitButton}</span>
        </Tooltip>
      ) : (
        submitButton
      )}
    </>
  );
}
