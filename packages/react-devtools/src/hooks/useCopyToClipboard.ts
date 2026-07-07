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

import { useCallback, useRef, useState } from "react";

export interface UseCopyToClipboard {
  copied: boolean;
  copy: (text: string) => Promise<void>;
}

/**
 * Copies text to the clipboard and briefly reports success so a caller can flip
 * an icon or label. Clipboard writes can reject (e.g. denied permission); those
 * are swallowed and leave `copied` false.
 */
export function useCopyToClipboard(resetMs = 1500): UseCopyToClipboard {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setCopied(false), resetMs);
      } catch {
        // Clipboard writes can reject (e.g. denied permission); ignore silently.
      }
    },
    [resetMs]
  );

  return { copied, copy };
}
