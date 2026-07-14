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

import { useMemo } from "react";

import type { EmailAddress, ParsedEmail } from "../EmailViewerApi.js";

/** Which representation of the email body should be rendered. */
export type EmailBodyMode = "html" | "text" | "empty";

export interface UseEmailViewerStateOptions {
  /** Parsed email to display */
  email: ParsedEmail;
}

export interface UseEmailViewerStateResult {
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
 * Headless state for an email viewer: derives which body representation to
 * render and formats the sender / recipient addresses into display strings.
 */
export function useEmailViewerState({
  email,
}: UseEmailViewerStateOptions): UseEmailViewerStateResult {
  return useMemo((): UseEmailViewerStateResult => {
    const bodyMode: EmailBodyMode =
      email.html != null ? "html" : email.text != null ? "text" : "empty";

    return {
      bodyMode,
      formattedFrom: email.from != null ? formatAddress(email.from) : undefined,
      formattedTo: formatAddressList(email.to),
      formattedCc: formatAddressList(email.cc),
    };
  }, [email.html, email.text, email.from, email.to, email.cc]);
}
