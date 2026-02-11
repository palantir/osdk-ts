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

import { useState } from "react";
import { ObjectTable } from "@osdk/react-components/experimental";
import { Employee } from "../../generatedNoCheck/index.js";

export function ContextMenuExample() {
  const [copiedValue, setCopiedValue] = useState<string>("");

  const renderCellContextMenu = (_employee: Employee.OsdkInstance, cellValue: unknown) => {
    const value = String(cellValue || "");

    return (
      <div
        style={{
          background: "white",
          border: "1px solid #e5e7eb",
          borderRadius: "6px",
          padding: "4px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          minWidth: "160px",
        }}
      >
        <button
          onClick={() => {
            navigator.clipboard.writeText(value);
            setCopiedValue(value);
            setTimeout(() => setCopiedValue(""), 2000);
          }}
          style={{
            width: "100%",
            textAlign: "left",
            padding: "8px 12px",
            border: "none",
            background: "transparent",
            cursor: "pointer",
            borderRadius: "4px",
            fontSize: "13px",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#f3f4f6";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
          }}
        >
          📋 Copy to clipboard
        </button>
      </div>
    );
  };

  return (
    <div className="space-y-3">
      <div className="px-4 py-3 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-900">
          <strong>Right-click any cell</strong> to copy its value to your clipboard.
        </p>
      </div>
      {copiedValue && (
        <div className="px-4 py-3 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm text-green-900">
            ✓ Copied: <code className="bg-green-100 px-2 py-0.5 rounded font-mono text-xs">{copiedValue}</code>
          </p>
        </div>
      )}
      <div style={{ height: "400px" }}>
        <ObjectTable
          objectType={Employee}
          renderCellContextMenu={renderCellContextMenu}
        />
      </div>
    </div>
  );
}
