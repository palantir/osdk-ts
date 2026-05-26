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

import { Button } from "@blueprintjs/core";
import classNames from "classnames";
import React, { useCallback, useRef, useState } from "react";
import styles from "./CopyableCodeBlock.module.scss";

interface CopyableCodeBlockProps {
  children: React.ReactNode;
  className?: string;
}

export const CopyableCodeBlock: React.FC<CopyableCodeBlockProps> = ({
  children,
  className,
}) => {
  const [copied, setCopied] = useState(false);
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const handleCopy = useCallback(async () => {
    const text = typeof children === "string"
      ? children
      : String(children ?? "");
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      clearTimeout(copyTimeoutRef.current);
      copyTimeoutRef.current = setTimeout(() => setCopied(false), 1500);
    } catch {
    }
  }, [children]);

  return (
    <div className={styles.container}>
      <pre className={classNames(styles.code, className)}>{children}</pre>
      <Button
        variant="minimal"
        size="small"
        icon={copied ? "tick" : "clipboard"}
        className={classNames(styles.copyButton, copied && styles.copied)}
        onClick={() => void handleCopy()}
        aria-label="Copy to clipboard"
      />
    </div>
  );
};
