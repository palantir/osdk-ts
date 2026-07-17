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

import type { Address } from "postal-mime";
import PostalMime from "postal-mime";

import type { EmailAddress, ParsedEmail } from "./EmailViewerApi.js";

function extractAddresses(
  addresses: Address[] | undefined
): readonly EmailAddress[] {
  if (addresses == null) {
    return [];
  }
  const result: EmailAddress[] = [];
  for (const addr of addresses) {
    if (addr.address != null) {
      result.push({ name: addr.name, address: addr.address });
    } else if (addr.group != null) {
      for (const member of addr.group) {
        result.push({ name: member.name, address: member.address });
      }
    }
  }
  return result;
}

function extractSingleAddress(
  address: Address | undefined
): EmailAddress | undefined {
  if (address == null) {
    return undefined;
  }
  if (address.address != null) {
    return { name: address.name, address: address.address };
  }
  return undefined;
}

/**
 * Parses raw .eml bytes into a {@link ParsedEmail}.
 */
export async function parseEmail(content: ArrayBuffer): Promise<ParsedEmail> {
  const email = await PostalMime.parse(content);

  return {
    subject: email.subject,
    from: extractSingleAddress(email.from),
    to: extractAddresses(email.to),
    cc: extractAddresses(email.cc),
    date: email.date,
    html: email.html ?? undefined,
    text: email.text ?? undefined,
  };
}
