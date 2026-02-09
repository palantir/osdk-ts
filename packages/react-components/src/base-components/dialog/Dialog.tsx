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

import { Button } from "@base-ui/react/button";
import { Dialog as BaseUIDialog } from "@base-ui/react/dialog";
import { Cross } from "@blueprintjs/icons";
import classnames from "classnames";
import React from "react";
import styles from "./Dialog.module.css";

export interface DialogProps {
  isOpen: boolean;
  onOpenChange: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export function Dialog({
  isOpen,
  onOpenChange,
  title,
  children,
  footer,
  className,
}: DialogProps): React.ReactElement {
  return (
    <BaseUIDialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <BaseUIDialog.Portal>
        <BaseUIDialog.Backdrop className={styles.backdrop} />
        <BaseUIDialog.Popup
          className={classnames(
            styles.popup,
            className,
          )}
        >
          <BaseUIDialog.Title className={styles.title}>
            {title}
          </BaseUIDialog.Title>
          <div className={styles.body}>{children}</div>
          {footer != null && <div className={styles.footer}>{footer}</div>}
          <BaseUIDialog.Close className={styles.closeButton}>
            <Cross className={styles.closeIcon} />
          </BaseUIDialog.Close>
        </BaseUIDialog.Popup>
      </BaseUIDialog.Portal>
    </BaseUIDialog.Root>
  );
}

export interface DialogFooterProps {
  children: React.ReactNode;
}

export function DialogFooter({
  children,
}: DialogFooterProps): React.ReactElement {
  return <div className={styles.footerActions}>{children}</div>;
}

export interface DialogButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>
{
  variant?: "primary" | "secondary";
}

export function DialogButton({
  variant = "secondary",
  className,
  ...rest
}: DialogButtonProps): React.ReactElement {
  return (
    <Button
      className={classnames(
        styles.button,
        variant === "primary" ? styles.primaryButton : styles.secondaryButton,
        className,
      )}
      {...rest}
    />
  );
}
