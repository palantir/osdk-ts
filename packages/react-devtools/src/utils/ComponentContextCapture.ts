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

import {
  getComponentId,
  getComponentName,
  getSourceLocation,
} from "../fiber/FiberInspection.js";
import type { Fiber } from "../fiber/types.js";

export interface ComponentContext {
  id: string;
  name: string;
  displayName?: string;
  filePath?: string;
  lineNumber?: number;
  columnNumber?: number;
  stackTrace: string;
}

export class ComponentContextCapture {
  private fiberToId = new WeakMap<Fiber, string>();
  private idCounter = 0;
  private enabled = true;

  captureNow(): ComponentContext | null {
    if (!this.enabled) {
      return null;
    }

    return this.tryStackTraceAnalysis();
  }

  /**
   * Extract context from a fiber node when one is available.
   * Only use this at click-time when we have a fiber from DOM element.
   */
  contextFromFiber(fiber: Fiber): ComponentContext {
    const id = this.getComponentIdForFiber(fiber);
    const name = getComponentName(fiber);
    const displayName = this.getFiberDisplayName(fiber);
    const sourceLocation = getSourceLocation(fiber);

    return {
      id,
      name,
      displayName,
      filePath: sourceLocation?.fileName,
      lineNumber: sourceLocation?.lineNumber,
      columnNumber: sourceLocation?.columnNumber,
      stackTrace: "",
    };
  }

  getComponentIdForFiber(fiber: Fiber): string {
    let id = this.fiberToId.get(fiber);
    if (!id) {
      id = getComponentId(fiber);

      // If no stable ID available, generate one
      if (!id || id === "unknown-0") {
        const name = getComponentName(fiber);
        const sourceLocation = getSourceLocation(fiber);

        if (sourceLocation) {
          const shortPath =
            sourceLocation.fileName?.split("/").slice(-2).join("/")
            || "unknown";
          id = `fiber-${name}-${shortPath}-${sourceLocation.lineNumber || 0}`;
        } else {
          id = `fiber-${name}-${this.idCounter++}`;
        }
      }

      this.fiberToId.set(fiber, id);
    }
    return id;
  }

  private getFiberDisplayName(fiber: Fiber): string | undefined {
    if (
      typeof fiber.type === "function"
      && "displayName" in fiber.type
      && typeof fiber.type.displayName === "string"
    ) {
      return fiber.type.displayName;
    }
    return undefined;
  }

  private tryStackTraceAnalysis(): ComponentContext | null {
    const error = new Error();
    const stack = error.stack || "";

    const parsed = this.parseStackTrace(stack);

    const shortPath = parsed.filePath?.split("/").slice(-2).join("/")
      || "unknown";
    const id = `stack-${parsed.componentName || "Unknown"}-${shortPath}-${
      parsed.lineNumber || 0
    }`;

    return {
      id,
      name: parsed.componentName || "Unknown",
      filePath: parsed.filePath,
      lineNumber: parsed.lineNumber,
      columnNumber: parsed.columnNumber,
      stackTrace: stack,
    };
  }

  private parseStackTrace(stack: string): {
    componentName: string | null;
    filePath?: string;
    lineNumber?: number;
    columnNumber?: number;
  } {
    const lines = stack.split("\n");

    const internalPatterns = [
      /node_modules/,
      /@osdk\/react/,
      /react-devtools/,
      /ComponentContextCapture/,
      /ObservableClientMonitor/,
      /ComponentQueryRegistry/,
      /packages\/react\/build/,
      /packages\/react\/esm/,
      /packages\/react\/src/,
      /Proxy/,
    ];

    const internalFuncNames = new Set([
      "Proxy",
      "ComponentContextCapture",
      "Object",
      "Array",
      "Function",
      "Promise",
      "eval",
      "anonymous",
      "Module",
    ]);

    const isInternalFrame = (filePath: string, funcName: string): boolean => {
      if (internalFuncNames.has(funcName)) {
        return true;
      }
      for (const pattern of internalPatterns) {
        if (pattern.test(filePath)) {
          return true;
        }
      }
      return false;
    };

    const isAppFilePath = (filePath: string): boolean => {
      for (const pattern of internalPatterns) {
        if (pattern.test(filePath)) {
          return false;
        }
      }
      return /\.(tsx?|jsx?)(\?|:|$)/.test(filePath)
        && !/node_modules/.test(filePath);
    };

    const extractComponentNameFromPath = (
      filePath: string,
    ): string | null => {
      const match = filePath.match(/\/([A-Z][a-zA-Z0-9]*)\.(tsx?|jsx?)[\?:]/);
      if (match) {
        return match[1];
      }
      const match2 = filePath.match(/([A-Z][a-zA-Z0-9]*)\.(tsx?|jsx?)[\?:]?$/);
      if (match2) {
        return match2[1];
      }
      return null;
    };

    const maxLines = Math.min(lines.length, 40);

    for (let i = 3; i < maxLines; i++) {
      const line = lines[i];

      const chromeMatch = line.match(/at\s+([A-Z]\w+)\s+\((.*?):(\d+):(\d+)\)/);
      if (chromeMatch) {
        const [, funcName, filePath, lineNum, colNum] = chromeMatch;
        if (!isInternalFrame(filePath, funcName)) {
          return {
            componentName: funcName,
            filePath,
            lineNumber: parseInt(lineNum, 10),
            columnNumber: parseInt(colNum, 10),
          };
        }
        continue;
      }

      const firefoxMatch = line.match(/([A-Z]\w+)@(.*?):(\d+):(\d+)/);
      if (firefoxMatch) {
        const [, funcName, filePath, lineNum, colNum] = firefoxMatch;
        if (!isInternalFrame(filePath, funcName)) {
          return {
            componentName: funcName,
            filePath,
            lineNumber: parseInt(lineNum, 10),
            columnNumber: parseInt(colNum, 10),
          };
        }
        continue;
      }
    }

    for (let i = 3; i < maxLines; i++) {
      const line = lines[i];

      const fileMatch = line.match(
        /\((https?:\/\/[^)]+|\/[^)]+)\)|at\s+(https?:\/\/\S+|\/\S+)/,
      );
      if (fileMatch) {
        const filePath = fileMatch[1] || fileMatch[2];
        if (isAppFilePath(filePath)) {
          const componentName = extractComponentNameFromPath(filePath);
          if (componentName) {
            const locationMatch = filePath.match(/:(\d+):(\d+)$/);
            return {
              componentName,
              filePath,
              lineNumber: locationMatch
                ? parseInt(locationMatch[1], 10)
                : undefined,
              columnNumber: locationMatch
                ? parseInt(locationMatch[2], 10)
                : undefined,
            };
          }
        }
      }
    }

    for (let i = 3; i < maxLines; i++) {
      const line = lines[i];

      const anyFuncMatch = line.match(/at\s+(\w+)\s+\((.*?):(\d+):(\d+)\)/);
      if (anyFuncMatch) {
        const [, funcName, filePath, lineNum, colNum] = anyFuncMatch;
        if (
          funcName.length >= 3
          && !internalFuncNames.has(funcName)
          && isAppFilePath(filePath)
        ) {
          const pathName = extractComponentNameFromPath(filePath);
          return {
            componentName: pathName || funcName,
            filePath,
            lineNumber: parseInt(lineNum, 10),
            columnNumber: parseInt(colNum, 10),
          };
        }
      }
    }

    for (let i = 3; i < maxLines; i++) {
      const line = lines[i];
      const nameMatch = line.match(/at\s+([A-Z]\w+)/);
      if (nameMatch) {
        const funcName = nameMatch[1];
        if (!internalFuncNames.has(funcName)) {
          return { componentName: funcName };
        }
      }
    }

    return { componentName: null };
  }

  disable(): void {
    this.enabled = false;
  }

  enable(): void {
    this.enabled = true;
  }

  clearCache(): void {
    this.fiberToId = new WeakMap();
  }
}

export const componentContextCapture: ComponentContextCapture =
  new ComponentContextCapture();
