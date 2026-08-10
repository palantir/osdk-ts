import { defineConfig } from "oxlint";
import core from "ultracite/oxlint/core";

export default defineConfig({
  extends: [core],
  ignorePatterns: core.ignorePatterns,
  rules: {
    // Ultracite's preset forces function expressions (`const f = () => ...`).
    // We steer toward named function declarations (`function f() { ... }`) but
    // only warn, so arrow functions remain allowed. Inline arrow callbacks are
    // unaffected (and still preferred, see prefer-arrow-callback).
    "func-style": ["warn", "declaration"],
  },
});
