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
"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CopyCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-10 items-center gap-3 rounded-lg border bg-fd-muted/60 px-4 font-mono text-sm text-fd-muted-foreground transition-colors hover:text-fd-foreground"
    >
      <span className="text-fd-primary">$</span>
      {command}
      {copied
        ? <Check className="size-3.5" aria-label="Copied" />
        : <Copy className="size-3.5" aria-label="Copy command" />}
    </button>
  );
}
