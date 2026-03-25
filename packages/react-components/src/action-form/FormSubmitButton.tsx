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

import React, { memo } from "react";
import { ActionButton } from "../base-components/action-button/ActionButton.js";
import styles from "./FormSubmitButton.module.css";

interface FormSubmitButtonProps {
  isPending: boolean;
  isDisabled: boolean;
}

export const FormSubmitButton: React.FC<FormSubmitButtonProps> = memo(
  function FormSubmitButtonFn({
    isPending,
    isDisabled,
  }: FormSubmitButtonProps): React.ReactElement {
    return (
      <div className={styles.osdkFormSubmitContainer}>
        <ActionButton
          type="submit"
          variant="primary"
          disabled={isDisabled || isPending}
        >
          {isPending ? "Submitting…" : "Submit"}
        </ActionButton>
      </div>
    );
  },
);
