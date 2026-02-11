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
import { Tooltip } from "@base-ui/react/tooltip";
import { useState } from "react";

interface CodeBlockProps {
  code: string;
}

export function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="docs-code-block">
      <pre>
        <code>{code}</code>
      </pre>
      <Tooltip.Root open={copied ? true : undefined}>
        <Tooltip.Trigger asChild>
          <Button
            onClick={handleCopy}
            className="docs-code-block-copy-button"
            aria-label="Copy code to clipboard"
          >
            {copied ? 'Copied!' : 'Copy'}
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Positioner sideOffset={4}>
            <Tooltip.Popup className="docs-code-block-tooltip">
              {copied ? 'Copied!' : 'Click to copy'}
            </Tooltip.Popup>
          </Tooltip.Positioner>
        </Tooltip.Portal>
      </Tooltip.Root>
    </div>
  );
}
