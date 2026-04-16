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

/**
 * oxlint JS plugin that enforces Apache 2.0 license headers.
 *
 * Equivalent to the eslint-plugin-header rule previously used in this repo.
 */

const HEADER_PATTERN =
  /Copyright \d{4} Palantir Technologies, Inc\. All rights reserved\./;

function makeHeader() {
  const year = new Date().getFullYear();
  return (
    "/*\n" +
    ` * Copyright ${year} Palantir Technologies, Inc. All rights reserved.\n` +
    " *\n" +
    ' * Licensed under the Apache License, Version 2.0 (the "License");\n' +
    " * you may not use this file except in compliance with the License.\n" +
    " * You may obtain a copy of the License at\n" +
    " *\n" +
    " *     http://www.apache.org/licenses/LICENSE-2.0\n" +
    " *\n" +
    " * Unless required by applicable law or agreed to in writing, software\n" +
    ' * distributed under the License is distributed on an "AS IS" BASIS,\n' +
    " * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n" +
    " * See the License for the specific language governing permissions and\n" +
    " * limitations under the License.\n" +
    " */\n\n"
  );
}

const rule = {
  meta: {
    fixable: "code",
  },
  create(context) {
    return {
      Program(node) {
        const source = context.sourceCode ?? context.getSourceCode();
        const text = typeof source === "string" ? source : source.getText();

        // Check the first block comment for the license header
        const comments =
          typeof source.getAllComments === "function"
            ? source.getAllComments()
            : ((source.ast ?? node).comments ?? []);

        const firstBlockComment = comments.find(
          (c) => c.type === "Block" && c.loc.start.line <= 3,
        );

        if (firstBlockComment && HEADER_PATTERN.test(firstBlockComment.value)) {
          return; // Header present and valid
        }

        // No valid header found
        context.report({
          node,
          message: "Missing or invalid Apache 2.0 license header",
          fix(fixer) {
            if (
              firstBlockComment &&
              /Copyright.*Palantir/.test(firstBlockComment.value)
            ) {
              // Replace existing malformed header
              return fixer.replaceTextRange(
                [firstBlockComment.range[0], firstBlockComment.range[1]],
                makeHeader().trimEnd(),
              );
            }
            // Insert header at the very beginning of the file
            return fixer.insertTextBeforeRange([0, 0], makeHeader());
          },
        });
      },
    };
  },
};

const plugin = {
  meta: { name: "palantir-header" },
  rules: { header: rule },
};

export default plugin;
