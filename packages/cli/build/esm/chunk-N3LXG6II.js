import { init_esm_shims } from './chunk-VHOQB2JW.js';
import { consola } from 'consola';

// src/consola/handlePromptCancel.ts
init_esm_shims();
var cancelSymbol = Symbol.for("cancel");
function handlePromptCancel(promptResponse) {
  const isFalse = typeof promptResponse === "boolean" && !promptResponse;
  const isSigInt = promptResponse === cancelSymbol;
  if (isSigInt || isFalse) {
    consola.fail("Operation cancelled");
    process.exit(0);
  }
}

export { handlePromptCancel };
//# sourceMappingURL=chunk-N3LXG6II.js.map
//# sourceMappingURL=chunk-N3LXG6II.js.map