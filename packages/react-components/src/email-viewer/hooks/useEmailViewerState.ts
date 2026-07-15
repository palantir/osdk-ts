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

import { useEffect, useMemo, useState } from "react";

import type { EmailAddress, ParsedEmail } from "../EmailViewerApi.js";
import { parseEmail } from "../parseEmail.js";

/** Which representation of the email body should be rendered. */
export type EmailBodyMode = "html" | "text" | "empty";

export interface UseEmailViewerStateOptions {
  /** Raw .eml bytes to parse and display (e.g. from `media.fetchContents()`). */
  content: ArrayBuffer;
}

export interface UseEmailViewerStateResult {
  /** Whether the email is still being parsed */
  loading: boolean;
  /** Error thrown while parsing the email bytes, if any */
  error: Error | undefined;
  /** The parsed email, or undefined while loading or on error */
  email: ParsedEmail | undefined;
  /**
   * Which representation of the body should be rendered: the sanitized HTML
   * body when present, otherwise the plain-text body, otherwise nothing.
   */
  bodyMode: EmailBodyMode;
  /** Formatted "From" address ("Name <addr>" or "addr"), or undefined when absent */
  formattedFrom: string | undefined;
  /** Comma-separated formatted "To" addresses */
  formattedTo: string;
  /** Comma-separated formatted "Cc" addresses */
  formattedCc: string;
}

function formatAddress(address: EmailAddress): string {
  if (address.name) {
    return `${address.name} <${address.address}>`;
  }
  return address.address;
}

function formatAddressList(addresses: readonly EmailAddress[]): string {
  return addresses.map(formatAddress).join(", ");
}

/**
 * Headless state for an email viewer: parses raw .eml bytes (asynchronously),
 * then derives which body representation to render and formats the sender /
 * recipient addresses into display strings.
 */
export function useEmailViewerState({
  content,
}: UseEmailViewerStateOptions): UseEmailViewerStateResult {
  const [email, setEmail] = useState<ParsedEmail | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(
    function parseEmailContent() {
      let cancelled = false;
      setLoading(true);
      setError(undefined);
      setEmail(undefined);

      parseEmail(content)
        .then((parsed) => {
          if (!cancelled) {
            setEmail(parsed);
            setLoading(false);
          }
        })
        .catch((err: unknown) => {
          if (!cancelled) {
            setError(err instanceof Error ? err : new Error(String(err)));
            setLoading(false);
          }
        });

      return () => {
        cancelled = true;
      };
    },
    [content]
  );

  return useMemo((): UseEmailViewerStateResult => {
    const bodyMode: EmailBodyMode =
      email?.html != null ? "html" : email?.text != null ? "text" : "empty";

    return {
      loading,
      error,
      email,
      bodyMode,
      formattedFrom:
        email?.from != null ? formatAddress(email.from) : undefined,
      formattedTo: email != null ? formatAddressList(email.to) : "",
      formattedCc: email != null ? formatAddressList(email.cc) : "",
    };
  }, [loading, error, email]);
}
