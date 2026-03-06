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

import type { ObjectTypeDefinition } from "@osdk/api";
import { useOsdkMetadata } from "@osdk/react/experimental";
import { LoadingIndicator } from "./LoadingIndicator.js";

interface LinkMetadataPanelProps {
  objectType: ObjectTypeDefinition;
}

export function LinkMetadataPanel({ objectType }: LinkMetadataPanelProps) {
  const { loading, metadata, error } = useOsdkMetadata(objectType);

  const interfaceLinkMap = metadata?.interfaceLinkMap;
  const interfaces = interfaceLinkMap ? Object.keys(interfaceLinkMap) : [];
  const hasData = interfaceLinkMap
    ? interfaces.some(
      (iface) => Object.keys(interfaceLinkMap[iface]).length > 0,
    )
    : false;

  return (
    <div className="space-y-2">
      <div className="text-[10px] text-[var(--officenetwork-text-muted)]">
        {loading && <LoadingIndicator size="sm" />}
        {error && (
          <div className="text-red-400">
            Error loading metadata: {error}
          </div>
        )}
        {metadata && hasData && interfaceLinkMap && (
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--officenetwork-border-default)]">
                <th className="text-left pb-1 font-medium">Interface</th>
                <th className="text-left pb-1 font-medium">
                  Interface Link
                </th>
                <th className="text-left pb-1 font-medium">OT Links</th>
              </tr>
            </thead>
            <tbody>
              {interfaces.flatMap((iface) =>
                Object.entries(interfaceLinkMap[iface]).map(
                  ([ifaceLink, otLinks]) => (
                    <tr
                      key={`${iface}-${ifaceLink}`}
                      className="border-b border-[var(--officenetwork-border-default)] last:border-0"
                    >
                      <td className="py-0.5 text-[var(--officenetwork-accent-teal)] officenetwork-mono">
                        {iface}
                      </td>
                      <td className="py-0.5 text-[var(--officenetwork-text-secondary)] officenetwork-mono">
                        {ifaceLink}
                      </td>
                      <td className="py-0.5 text-[var(--officenetwork-hier-evp)] officenetwork-mono">
                        {otLinks.join(", ")}
                      </td>
                    </tr>
                  ),
                )
              )}
            </tbody>
          </table>
        )}
        {metadata && !hasData && (
          <span className="italic">
            No interface link type mappings
            {interfaces.length > 0
              ? ` (${interfaces.join(", ")} have no ILT constraints)`
              : ""}
          </span>
        )}
      </div>
    </div>
  );
}
