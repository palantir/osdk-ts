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

import { Button, TextArea } from "@blueprintjs/core";
import classNames from "classnames";
import * as React from "react";

import styles from "../AipAgentChat.module.css";

const COMPOSER_TEXTAREA_STYLE: React.CSSProperties = {
  background: "transparent",
  borderRadius: 0,
  boxShadow: "none",
};

export interface AipAgentChatComposerProps {
  isInFlight: boolean;
  onSendMessage: (text: string) => void;
  onStop?: () => void;
  placeholder?: string;
  className?: string;
  /**
   * Optional content rendered to the left of the send button (e.g. the
   * model picker passed in by the OSDK wrapper).
   */
  footerLeft?: React.ReactNode;
}

/**
 * Textarea + send/stop button. Enter sends; Shift+Enter inserts a newline.
 * The button toggles to "Stop" while a stream is in flight (when an
 * `onStop` callback is provided).
 */
export function AipAgentChatComposer({
  isInFlight,
  onSendMessage,
  onStop,
  placeholder,
  className,
  footerLeft,
}: AipAgentChatComposerProps): React.ReactElement {
  const [draft, setDraft] = React.useState("");

  const canSend = !isInFlight && draft.trim().length > 0;

  const handleSend = React.useCallback(() => {
    const trimmed = draft.trim();
    if (trimmed.length === 0) {
      return;
    }
    // Absorb sync throws and unhandled rejections; chat-level errors are
    // surfaced via `onError` on the upstream useChat hook.
    try {
      const result = onSendMessage(trimmed) as void | Promise<void>;
      if (result instanceof Promise) {
        result.catch(noop);
      }
    } catch {
      // swallow sync throws
    }
    setDraft("");
  }, [draft, onSendMessage]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        if (!isInFlight) {
          handleSend();
        }
      }
    },
    [handleSend, isInFlight],
  );

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setDraft(event.currentTarget.value);
    },
    [],
  );

  return (
    <div className={classNames(styles.composer, className)}>
      <div className={styles.inputWrapper}>
        <TextArea
          aria-label="Message input"
          className={styles.textarea}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          placeholder={placeholder}
          rows={3}
          style={COMPOSER_TEXTAREA_STYLE}
          value={draft}
        />
        <div className={styles.inputActions}>
          {isInFlight && onStop != null ? (
            <Button onClick={onStop} type="button">
              Stop
            </Button>
          ) : (
            <Button
              disabled={!canSend}
              onClick={handleSend}
              type="button"
              intent="primary"
            >
              Send
            </Button>
          )}
        </div>
      </div>
      {footerLeft != null && (
        <div className={styles.composerFooterLeft}>{footerLeft}</div>
      )}
    </div>
  );
}

function noop(): void {}
