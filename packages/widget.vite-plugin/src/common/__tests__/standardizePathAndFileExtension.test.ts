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

import { describe, expect, it } from "vitest";
import { standardizePathAndFileExtension } from "../standardizePathAndFileExtension.js";

describe("standardizePathAndFileExtension", () => {
  describe("file extension standardization", () => {
    it("should replace .ts extension with .js", () => {
      expect(standardizePathAndFileExtension("/path/to/file.ts")).toBe(
        "/path/to/file.js",
      );
    });

    it("should replace .tsx extension with .js", () => {
      expect(standardizePathAndFileExtension("/path/to/component.tsx")).toBe(
        "/path/to/component.js",
      );
    });

    it("should replace .jsx extension with .js", () => {
      expect(standardizePathAndFileExtension("/path/to/component.jsx")).toBe(
        "/path/to/component.js",
      );
    });

    it("should keep .js extension as is", () => {
      expect(standardizePathAndFileExtension("/path/to/file.js")).toBe(
        "/path/to/file.js",
      );
    });

    it("should append .js to config files", () => {
      expect(standardizePathAndFileExtension("/path/to/widget.config")).toBe(
        "/path/to/widget.config.js",
      );
    });

    it("should handle files without extensions", () => {
      expect(standardizePathAndFileExtension("/path/to/file")).toBe(
        "/path/to/file",
      );
    });
  });

  describe("path normalization", () => {
    it("should normalize Windows paths with backslashes to forward slashes", () => {
      expect(
        standardizePathAndFileExtension("C:\\Users\\project\\src\\file.ts"),
      ).toBe("C:/Users/project/src/file.js");
    });

    it("should normalize Windows paths with mixed separators", () => {
      expect(standardizePathAndFileExtension("C:\\Users/project\\src/file.tsx"))
        .toBe("C:/Users/project/src/file.js");
    });

    it("should preserve paths that already use forward slashes", () => {
      expect(standardizePathAndFileExtension("/Users/project/src/file.ts"))
        .toBe("/Users/project/src/file.js");
    });

    it("should handle Windows config file paths", () => {
      expect(
        standardizePathAndFileExtension(
          "D:\\workspace\\widgets\\my-widget.config",
        ),
      ).toBe("D:/workspace/widgets/my-widget.config.js");
    });

    it("should handle Windows paths without file extensions", () => {
      expect(standardizePathAndFileExtension("C:\\Users\\project\\README"))
        .toBe("C:/Users/project/README");
    });
  });

  describe("edge cases", () => {
    it("should handle empty string", () => {
      expect(standardizePathAndFileExtension("")).toBe("");
    });

    it("should handle paths with multiple dots", () => {
      expect(standardizePathAndFileExtension("/path/to/file.test.ts")).toBe(
        "/path/to/file.test.js",
      );
    });

    it("should handle Windows paths with multiple dots", () => {
      expect(standardizePathAndFileExtension("C:\\path\\to\\file.test.tsx"))
        .toBe("C:/path/to/file.test.js");
    });

    it("should handle virtual paths with @fs prefix", () => {
      expect(
        standardizePathAndFileExtension(
          "/@fs/C:\\Users\\project\\src\\file.ts",
        ),
      ).toBe("/@fs/C:/Users/project/src/file.js");
    });

    it("should handle paths with /src/ directory for Windows", () => {
      const windowsPath = "C:\\projects\\my-app\\src\\components\\Widget.tsx";
      const result = standardizePathAndFileExtension(windowsPath);
      expect(result).toBe("C:/projects/my-app/src/components/Widget.js");
      expect(result.includes("/src/")).toBe(true);
    });
  });
});
