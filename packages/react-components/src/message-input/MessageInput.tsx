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

import { Cog, SendMessage } from "@blueprintjs/icons";
import classnames from "classnames";
import * as React from "react";
import { ActionButton } from "../base-components/action-button/ActionButton.js";
import styles from "./MessageInput.module.css";

const DEFAULT_PLACEHOLDER = "Type a message…";
const DEFAULT_SEND_LABEL = "Send";
const DEFAULT_AUTO_SCROLL_LABEL = "Auto-scroll";
const DEFAULT_CONFIGURE_LABEL = "Configure";
const INPUT_ARIA_LABEL = "Message";

export interface MessageInputProps {
  /** Called when the user submits the message (Enter or Send click). */
  onSendMessage: (text: string) => void;
  /**
   * Slot rendered at the left of the actions row, typically a button that
   * opens a custom attachment picker. Replaces the built-in attachment dialog
   * that forge agent-engine shipped — the consumer wires their own picker.
   */
  attachmentTrigger?: React.ReactNode;
  /**
   * Optional callback for a "configure" action. When provided, a configure
   * button renders in the actions row. When undefined, the button is hidden.
   */
  onConfigure?: () => void;
  /**
   * When provided alongside `onAutoScrollChange`, an auto-scroll toggle
   * renders in the actions row. Pair this with `<MessageList autoScrollOnAppend>`.
   */
  autoScroll?: boolean;
  onAutoScrollChange?: (enabled: boolean) => void;
  /** Disables the input, send button, and other built-in controls. */
  disabled?: boolean;
  /** Placeholder shown when the input is empty. */
  placeholder?: string;
  /** Visible label of the send button. */
  sendLabel?: string;
  /** Visible label of the configure button (rendered when `onConfigure` is set). */
  configureLabel?: string;
  /** Visible label of the auto-scroll toggle. */
  autoScrollLabel?: string;
  /** Additional CSS class for the form root. */
  className?: string;
}

export const MessageInput: React.NamedExoticComponent<MessageInputProps> = React
  .memo(function MessageInput({
    onSendMessage,
    attachmentTrigger,
    onConfigure,
    autoScroll,
    onAutoScrollChange,
    disabled,
    placeholder = DEFAULT_PLACEHOLDER,
    sendLabel = DEFAULT_SEND_LABEL,
    configureLabel = DEFAULT_CONFIGURE_LABEL,
    autoScrollLabel = DEFAULT_AUTO_SCROLL_LABEL,
    className,
  }: MessageInputProps): React.ReactElement {
    const [text, setText] = React.useState("");
    const trimmed = text.trim();
    const canSend = trimmed.length > 0 && disabled !== true;

    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
      },
      [],
    );

    const handleSubmit = React.useCallback(
      (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!canSend) {
          return;
        }
        onSendMessage(trimmed);
        setText("");
      },
      [canSend, onSendMessage, trimmed],
    );

    const handleAutoScrollChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        onAutoScrollChange?.(event.target.checked);
      },
      [onAutoScrollChange],
    );

    const showAutoScroll = autoScroll !== undefined
      && onAutoScrollChange !== undefined;
    const showActionsRow = attachmentTrigger !== undefined
      || onConfigure !== undefined
      || showAutoScroll;

    return (
      <form
        className={classnames(styles.form, className)}
        onSubmit={handleSubmit}
      >
        <div className={styles.inputRow}>
          <input
            type="text"
            className={styles.input}
            value={text}
            onChange={handleChange}
            placeholder={placeholder}
            disabled={disabled}
            aria-label={INPUT_ARIA_LABEL}
          />
          <ActionButton
            type="submit"
            variant="primary"
            disabled={!canSend}
            className={styles.sendButton}
            aria-label={sendLabel}
          >
            <SendMessage className={styles.sendIcon} />
            <span>{sendLabel}</span>
          </ActionButton>
        </div>
        {showActionsRow && (
          <div className={styles.actionsRow}>
            {attachmentTrigger !== undefined && (
              <span className={styles.attachmentTrigger}>
                {attachmentTrigger}
              </span>
            )}
            {onConfigure !== undefined && (
              <ActionButton
                type="button"
                onClick={onConfigure}
                disabled={disabled}
                className={styles.configureButton}
                aria-label={configureLabel}
              >
                <Cog className={styles.configureIcon} />
                <span>{configureLabel}</span>
              </ActionButton>
            )}
            {showAutoScroll && (
              <label className={styles.autoScrollLabel}>
                <input
                  type="checkbox"
                  className={styles.autoScrollCheckbox}
                  checked={autoScroll}
                  onChange={handleAutoScrollChange}
                  disabled={disabled}
                />
                <span>{autoScrollLabel}</span>
              </label>
            )}
          </div>
        )}
      </form>
    );
  });
