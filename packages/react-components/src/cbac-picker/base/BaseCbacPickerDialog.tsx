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

import { Dialog, DialogBody, DialogFooter } from "@blueprintjs/core";
import React from "react";

import {
  resolvePortalContainerElement,
  usePortalContainer,
} from "../../shared/PortalContainerContext.js";
import { BaseCbacPicker } from "./BaseCbacPicker.js";
import type { BaseCbacPickerProps } from "./BaseCbacPicker.js";
import { CbacPickerDialogFooter } from "./CbacPickerDialogFooter.js";

export interface BaseCbacPickerDialogProps extends BaseCbacPickerProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  onCancel: () => void;
  title?: string;
  submitDisabledReason?: string;
}

export function BaseCbacPickerDialog({
  isOpen,
  onOpenChange,
  onConfirm,
  onCancel,
  title = "Select classification",
  submitDisabledReason,
  ...pickerProps
}: BaseCbacPickerDialogProps): React.ReactElement {
  const portalContainer = resolvePortalContainerElement(usePortalContainer());
  const handleOpenChange = React.useCallback(
    (open: boolean) => {
      if (!open) {
        onCancel();
      }
      onOpenChange(open);
    },
    [onCancel, onOpenChange],
  );

  return (
    <Dialog
      isOpen={isOpen}
      onClose={() => handleOpenChange(false)}
      title={title}
      canOutsideClickClose={false}
      portalContainer={portalContainer}
    >
      <DialogBody>
        <BaseCbacPicker
          {...pickerProps}
          showInfoBanner={pickerProps.showInfoBanner ?? true}
        />
      </DialogBody>
      <DialogFooter
        actions={
          <CbacPickerDialogFooter
            onCancel={onCancel}
            onConfirm={onConfirm}
            submitDisabledReason={submitDisabledReason}
          />
        }
      />
    </Dialog>
  );
}
