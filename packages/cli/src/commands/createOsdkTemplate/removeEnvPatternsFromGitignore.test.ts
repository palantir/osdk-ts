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
import { removeEnvPatternsFromGitignore } from "./removeEnvPatternsFromGitignore.js";

describe("removeEnvPatternsFromGitignore", () => {
  it("removes .env.* patterns from gitignore content", () => {
    const gitignoreContent = `
# dependencies
node_modules
.pnp
.pnp.js

# testing
/coverage

# env files
.env
.env.local
.env.*
.env.development
.env.production
*.env.*

# misc
.DS_Store
*.pem
.env*

# specific env file
.env.staging

# keep this
something.else
`;

    const result = removeEnvPatternsFromGitignore(gitignoreContent);

    // Patterns that should be removed
    expect(result).not.toContain(".env.*");
    expect(result).not.toContain("*.env.*");
    expect(result).not.toContain(".env*");
    expect(result).not.toContain(".env.development");
    expect(result).not.toContain(".env.production");
    expect(result).not.toContain(".env.staging");

    // Patterns that should be kept
    expect(result).toContain(".env");
    expect(result).toContain("node_modules");
    expect(result).toContain("/coverage");
    expect(result).toContain(".DS_Store");
    expect(result).toContain("*.pem");
    expect(result).toContain("something.else");

    // Comments and empty lines should be preserved
    expect(result).toContain("# env files");
    expect(result).toContain("# dependencies");
  });

  it("handles empty gitignore files", () => {
    const emptyContent = "";
    const result = removeEnvPatternsFromGitignore(emptyContent);
    expect(result).toBe("");
  });

  it("handles gitignore with only comments", () => {
    const commentsOnly = `# This is a comment
# Another comment`;
    const result = removeEnvPatternsFromGitignore(commentsOnly);
    expect(result).toBe(commentsOnly);
  });

  it("preserves empty lines and spacing", () => {
    const contentWithEmptyLines = `node_modules

.env.*

# Comment`;
    const result = removeEnvPatternsFromGitignore(contentWithEmptyLines);
    expect(result).toContain("node_modules");
    expect(result).not.toContain(".env.*");
    expect(result).toContain("# Comment");
    expect(result.split("\n").filter(line => line === "").length).toBe(2);
  });
});
